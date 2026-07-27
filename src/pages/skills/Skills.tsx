import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlowProvider,
  useReactFlow,
  Node as RFNode,
  Edge as RFEdge,
  NodeProps,
} from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";

import "../page.css";

import {
  nodes as allNodes,
  roleNodes,
  hasChildren,
  byId,
  GraphNode,
  Tier,
} from "data/graphData";

import "./skills.css";

const SIZE: Record<Tier, { w: number; h: number }> = {
  role: { w: 200, h: 58 },
  domain: { w: 184, h: 50 },
  skill: { w: 170, h: 44 },
  base: { w: 150, h: 40 },
};

type NodeData = {
  node: GraphNode;
  expandable: boolean;
  expanded: boolean;
  selected: boolean;
};

function ProficiencyDots({ level }: { level: number }) {
  return (
    <span className="prof-dots" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`dot ${i <= level ? "on" : ""}`} />
      ))}
    </span>
  );
}

function SkillNode({ data }: NodeProps<NodeData>) {
  const { node, expandable, expanded, selected } = data;
  return (
    <div
      className={`gnode gnode-${node.tier} ${selected ? "is-selected" : ""} ${
        expanded ? "is-expanded" : ""
      }`}
    >
      <Handle type="target" position={Position.Left} isConnectable={false} />
      <span className="gnode-label">{node.label}</span>
      {node.tier === "skill" && typeof node.level === "number" && (
        <ProficiencyDots level={node.level} />
      )}
      {expandable && <span className="gnode-toggle">{expanded ? "–" : "+"}</span>}
      <Handle type="source" position={Position.Right} isConnectable={false} />
    </div>
  );
}

const nodeTypes = { skill: SkillNode };

// Which nodes are visible given the set of expanded ancestors.
function computeVisible(expanded: Set<string>): Set<string> {
  const visible = new Set<string>(roleNodes().map((n) => n.id));
  let changed = true;
  while (changed) {
    changed = false;
    for (const n of allNodes) {
      if (visible.has(n.id)) continue;
      if (n.parents && n.parents.some((p) => visible.has(p) && expanded.has(p))) {
        visible.add(n.id);
        changed = true;
      }
    }
  }
  return visible;
}

function buildGraph(
  expanded: Set<string>,
  selected: string | null
): { nodes: RFNode<NodeData>[]; edges: RFEdge[] } {
  const visible = computeVisible(expanded);
  const visibleNodes = allNodes.filter((n) => visible.has(n.id));

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: "LR", nodesep: 20, ranksep: 96, marginx: 8, marginy: 8 });

  visibleNodes.forEach((n) =>
    g.setNode(n.id, { width: SIZE[n.tier].w, height: SIZE[n.tier].h })
  );
  const edges: RFEdge[] = [];
  visibleNodes.forEach((n) => {
    (n.parents || []).forEach((p) => {
      if (visible.has(p)) {
        g.setEdge(p, n.id);
        edges.push({
          id: `${p}->${n.id}`,
          source: p,
          target: n.id,
          type: "smoothstep",
          style: { stroke: "#bbb", strokeWidth: 1.5 },
        });
      }
    });
  });

  dagre.layout(g);

  const nodes: RFNode<NodeData>[] = visibleNodes.map((n) => {
    const p = g.node(n.id);
    const { w, h } = SIZE[n.tier];
    return {
      id: n.id,
      type: "skill",
      position: { x: p.x - w / 2, y: p.y - h / 2 },
      data: {
        node: n,
        expandable: hasChildren(n.id),
        expanded: expanded.has(n.id),
        selected: selected === n.id,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      draggable: false,
    };
  });

  return { nodes, edges };
}

function Graph() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<string | null>(null);
  const { fitView } = useReactFlow();

  const { nodes, edges } = useMemo(
    () => buildGraph(expanded, selected),
    [expanded, selected]
  );

  // Refit whenever the set of visible nodes changes.
  useEffect(() => {
    const id = window.setTimeout(() => fitView({ padding: 0.2, duration: 300 }), 20);
    return () => window.clearTimeout(id);
  }, [expanded, fitView]);

  const onNodeClick = useCallback((_: React.MouseEvent, node: RFNode) => {
    setSelected(node.id);
    if (hasChildren(node.id)) {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (next.has(node.id)) next.delete(node.id);
        else next.add(node.id);
        return next;
      });
    }
  }, []);

  const reset = useCallback(() => {
    setExpanded(new Set());
    setSelected(null);
  }, []);

  const sel = selected ? byId(selected) : undefined;

  return (
    <div className="skills-layout">
      <div className="skills-graph">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.2}
          maxZoom={1.6}
          proOptions={{ hideAttribution: true }}
          nodesConnectable={false}
          nodesDraggable={false}
        >
          <Background color="#eee" gap={20} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>

      <aside className="skills-panel">
        <button type="button" className="skills-reset" onClick={reset}>
          ↺ {t("skills.reset")}
        </button>
        {sel ? (
          <div className="panel-card">
            <span className={`panel-tier tier-${sel.tier}`}>{sel.tier}</span>
            <h3 className="panel-title">{sel.label}</h3>
            {sel.description && <p className="panel-desc">{sel.description}</p>}
            {sel.tier === "skill" && typeof sel.level === "number" && (
              <div className="panel-prof">
                <span>{t("skills.proficiency")}</span>
                <ProficiencyDots level={sel.level} />
              </div>
            )}
          </div>
        ) : (
          <p className="panel-empty">{t("skills.selectHint")}</p>
        )}
      </aside>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  return (
    <div className="skills-page">
      <h1 className="page-title">{t("skills.title")}</h1>
      <p className="page-subtitle">{t("skills.hint")}</p>
      <hr className="page-rule" />
      <ReactFlowProvider>
        <Graph />
      </ReactFlowProvider>
    </div>
  );
}
