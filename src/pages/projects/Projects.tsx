import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { projects, Project, Lang } from "data/projects";

import "../page.css";
import "./projects.css";

const PX = 16; // pixels per month
const LANE_H = 66;
const LANE_GAP = 14;
const AXIS_H = 28;

const toIdx = (s: string, nowIdx: number) => {
  if (s === "present") return nowIdx;
  const [y, m] = s.split("-").map(Number);
  return y * 12 + (m - 1);
};

function useLang(): Lang {
  const { i18n } = useTranslation();
  const l = (i18n.language || "pt").split("-")[0];
  return (["en", "es", "pt"].includes(l) ? l : "pt") as Lang;
}

function fmtDate(s: string, lang: Lang, presentLabel: string): string {
  if (s === "present") return presentLabel;
  const [y, m] = s.split("-").map(Number);
  const d = new Date(y, m - 1, 1);
  const locale = lang === "pt" ? "pt-BR" : lang;
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(d);
}

export default function Projects() {
  const { t } = useTranslation();
  const lang = useLang();
  const [selected, setSelected] = useState<Project | null>(null);

  const now = new Date();
  const nowIdx = now.getFullYear() * 12 + now.getMonth();

  const layout = useMemo(() => {
    const starts = projects.map((p) => toIdx(p.start, nowIdx));
    const ends = projects.map((p) => toIdx(p.end, nowIdx));
    const minIdx = Math.min(...starts);
    const maxIdx = Math.max(...ends);

    // Greedy lane packing by start date.
    const sorted = [...projects].sort(
      (a, b) => toIdx(a.start, nowIdx) - toIdx(b.start, nowIdx)
    );
    const laneEnds: number[] = [];
    const laneOf: Record<string, number> = {};
    for (const p of sorted) {
      const s = toIdx(p.start, nowIdx);
      let lane = laneEnds.findIndex((e) => e <= s);
      if (lane === -1) lane = laneEnds.length;
      laneEnds[lane] = toIdx(p.end, nowIdx);
      laneOf[p.id] = lane;
    }

    const laneCount = Math.max(laneEnds.length, 1);
    const width = (maxIdx - minIdx + 2) * PX;
    const height = laneCount * (LANE_H + LANE_GAP);

    const startYear = Math.floor(minIdx / 12);
    const endYear = Math.floor(maxIdx / 12);
    const years: { year: number; x: number }[] = [];
    for (let y = startYear; y <= endYear; y++) {
      years.push({ year: y, x: (y * 12 - minIdx) * PX });
    }

    const bars = projects.map((p) => {
      const s = toIdx(p.start, nowIdx);
      const e = toIdx(p.end, nowIdx);
      return {
        project: p,
        left: (s - minIdx) * PX,
        width: Math.max((e - s + 1) * PX, 46),
        top: laneOf[p.id] * (LANE_H + LANE_GAP),
      };
    });

    return { width, height, years, bars };
  }, [nowIdx]);

  // Close modal on Escape.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="page projects-page">
      <h1 className="page-title">{t("projects.title")}</h1>
      <p className="page-subtitle">{t("projects.subtitle")}</p>
      <hr className="page-rule" />

      <div className="timeline-scroll">
        <div
          className="timeline-inner"
          style={{ width: layout.width, height: layout.height + AXIS_H }}
        >
          {/* year gridlines + labels */}
          {layout.years.map((y) => (
            <div key={y.year} className="tl-year" style={{ left: y.x }}>
              <span className="tl-year-label">{y.year}</span>
            </div>
          ))}

          {/* project bars */}
          {layout.bars.map((b) => (
            <button
              key={b.project.id}
              type="button"
              className="tl-bar"
              style={{ left: b.left, width: b.width, top: b.top + AXIS_H }}
              title={`${b.project.org} — ${b.project.role[lang]}`}
              onClick={() => setSelected(b.project)}
            >
              <span className="tl-bar-org">{b.project.org}</span>
              <span className="tl-bar-role">{b.project.role[lang]}</span>
              <span className="tl-bar-dates">
                {fmtDate(b.project.start, lang, t("projects.present"))} –{" "}
                {fmtDate(b.project.end, lang, t("projects.present"))}
              </span>
            </button>
          ))}
        </div>
      </div>
      <p className="tl-hint">{t("projects.scrollHint")}</p>

      {selected && (
        <div className="tl-modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="tl-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="tl-modal-close"
              aria-label={t("projects.close")}
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <span className="tl-modal-dates">
              {fmtDate(selected.start, lang, t("projects.present"))} –{" "}
              {fmtDate(selected.end, lang, t("projects.present"))}
            </span>
            <h2 className="tl-modal-org">{selected.org}</h2>
            <p className="tl-modal-role">{selected.role[lang]}</p>
            <p className="tl-modal-summary">{selected.summary[lang]}</p>
            <ul className="tl-modal-details">
              {selected.details.map((d, i) => (
                <li key={i}>{d[lang]}</li>
              ))}
            </ul>
            <div className="tl-modal-tech">
              <span className="tl-tech-label">{t("projects.tech")}</span>
              <div className="tl-tech-chips">
                {selected.tech.map((tch, i) => (
                  <span key={i} className="tl-chip">
                    {tch}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
