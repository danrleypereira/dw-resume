import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  roleNodes,
  childrenOf,
  byId,
  hasChildren,
  GraphNode,
  Lang,
} from "data/graphData";

import "../page.css";
import "./skills.css";

interface Placed {
  node: GraphNode;
  x: number; // 0-100 (percent of the square canvas)
  y: number;
  small: boolean;
}

// Radius grows with the number of children; large levels stagger on two radii.
function placeChildren(children: GraphNode[]): Placed[] {
  const n = children.length;
  const small = n > 10;
  const base = n <= 6 ? 32 : n <= 10 ? 36 : 40;
  return children.map((node, i) => {
    const r = base + (n > 11 ? (i % 2 === 0 ? 3.5 : -3.5) : 0);
    const deg = -90 + (n === 1 ? 0 : (i * 360) / n);
    const rad = (deg * Math.PI) / 180;
    return {
      node,
      x: 50 + r * Math.cos(rad),
      y: 50 + r * Math.sin(rad),
      small,
    };
  });
}

const KIND: Record<string, Record<Lang, string>> = {
  framework: { en: "Framework", es: "Framework", pt: "Framework" },
  library: { en: "Library", es: "Librería", pt: "Biblioteca" },
  orm: { en: "ORM", es: "ORM", pt: "ORM" },
  database: { en: "Database", es: "Base de datos", pt: "Banco de dados" },
  warehouse: { en: "Warehouse", es: "Warehouse", pt: "Warehouse" },
  storage: { en: "Storage", es: "Almacenamiento", pt: "Armazenamento" },
  concept: { en: "Concept", es: "Concepto", pt: "Conceito" },
  practice: { en: "Practice", es: "Práctica", pt: "Prática" },
  tool: { en: "Tool", es: "Herramienta", pt: "Ferramenta" },
  cloud: { en: "Cloud", es: "Nube", pt: "Nuvem" },
  service: { en: "Service", es: "Servicio", pt: "Serviço" },
  runtime: { en: "Runtime", es: "Runtime", pt: "Runtime" },
  language: { en: "Language", es: "Lenguaje", pt: "Linguagem" },
  foundation: { en: "Foundation", es: "Fundamento", pt: "Fundamento" },
  mindset: { en: "Mindset", es: "Mentalidad", pt: "Mentalidade" },
  leadership: { en: "Leadership", es: "Liderazgo", pt: "Liderança" },
  soft: { en: "Soft Skill", es: "Habilidad Blanda", pt: "Soft Skill" },
  role: { en: "Role", es: "Rol", pt: "Papel" },
  domain: { en: "Area", es: "Área", pt: "Área" },
  skill: { en: "Skill", es: "Habilidad", pt: "Habilidade" },
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

export default function Skills() {
  const { t, i18n } = useTranslation();
  const lang = ((i18n.language || "pt").split("-")[0] || "pt") as Lang;
  const [path, setPath] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const currentId = path.length ? path[path.length - 1] : null;
  const current = currentId ? byId(currentId) : undefined;
  const children = currentId ? childrenOf(currentId) : roleNodes();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const placed = useMemo(() => placeChildren(children), [currentId]);

  const centerLabel = current ? current.label[lang] : t("skills.title");
  const sel = selectedId ? byId(selectedId) : current;

  const onNodeClick = (node: GraphNode) => {
    setSelectedId(node.id);
    if (hasChildren(node.id)) setPath((p) => [...p, node.id]);
  };
  const goUp = () => {
    setPath((p) => p.slice(0, -1));
    setSelectedId(null);
  };
  const crumbTo = (i: number) => {
    setPath((p) => p.slice(0, i));
    setSelectedId(null);
  };

  const crumbs = [
    { label: t("skills.title") },
    ...path.map((id) => ({ label: byId(id)?.label[lang] ?? id })),
  ];

  const kindLabel = (node: GraphNode) => {
    const k = node.kind || node.tier;
    return KIND[k]?.[lang] || k;
  };

  return (
    <div className="skills-page">
      <h1 className="page-title">{t("skills.title")}</h1>
      <p className="page-subtitle">{t("skills.hint")}</p>

      <nav className="rad-breadcrumb" aria-label="breadcrumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="crumb-sep">/</span>}
            <button
              type="button"
              className="crumb"
              onClick={() => crumbTo(i)}
              disabled={i === crumbs.length - 1}
            >
              {c.label}
            </button>
          </React.Fragment>
        ))}
      </nav>

      <div className="radial-layout">
        <div className="radial-canvas" key={currentId || "root"}>
          <svg
            className="radial-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {placed.map((p) => (
              <line
                key={`s-${p.node.id}`}
                x1={50}
                y1={50}
                x2={p.x}
                y2={p.y}
                className="line-spoke"
              />
            ))}
            {placed.length > 1 &&
              placed.map((p, i) => {
                if (placed.length === 2 && i === 1) return null;
                const q = placed[(i + 1) % placed.length];
                return (
                  <line
                    key={`r-${p.node.id}`}
                    x1={p.x}
                    y1={p.y}
                    x2={q.x}
                    y2={q.y}
                    className="line-ring"
                  />
                );
              })}
          </svg>

          <button
            type="button"
            className={`rnode rnode-center ${current ? "clickable" : ""}`}
            style={{ left: "50%", top: "50%" }}
            onClick={current ? goUp : undefined}
            disabled={!current}
            title={current ? t("skills.back") : undefined}
          >
            <span>{centerLabel}</span>
          </button>

          {placed.map((p, i) => (
            <button
              key={p.node.id}
              type="button"
              className={`rnode rnode-${p.node.tier} ${
                p.small ? "rnode-sm" : ""
              } ${selectedId === p.node.id ? "is-selected" : ""}`}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                animationDelay: `${i * 35}ms`,
              }}
              onClick={() => onNodeClick(p.node)}
            >
              <span>{p.node.label[lang]}</span>
            </button>
          ))}
        </div>

        <aside className="skills-panel">
          {path.length > 0 && (
            <button type="button" className="skills-reset" onClick={goUp}>
              ↑ {t("skills.back")}
            </button>
          )}
          {sel ? (
            <div className="panel-card">
              <span className={`panel-tier tier-${sel.tier}`}>
                {kindLabel(sel)}
              </span>
              <h3 className="panel-title">{sel.label[lang]}</h3>
              {sel.description && (
                <p className="panel-desc">{sel.description[lang]}</p>
              )}
              {typeof sel.level === "number" && (
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
    </div>
  );
}
