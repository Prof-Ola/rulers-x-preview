"use client";

import { useState } from "react";

import { EVIDENCE_DIMENSIONS } from "@/lib/preview-data";

export function EvidenceExplorer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="evidence-list">
      {EVIDENCE_DIMENSIONS.map((item, index) => {
        const open = openIndex === index;
        return (
          <article className="evidence-card" key={item.name}>
            <button
              className="evidence-toggle"
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span>
                <strong>{item.name}</strong>
                <small>{item.short}</small>
              </span>
              <span aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open ? (
              <div className="evidence-body">
                <p>{item.description}</p>
                <p className="evidence-rule">{item.rule}</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
