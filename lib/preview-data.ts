import type { EvidenceDimension, PreviewSnapshot } from "./types";

/**
 * Static validation snapshot.
 *
 * Values below are intentionally limited to facts already verified from the
 * RULERS-X Phase 2.7E qualification-era run. We do not invent intermediate
 * funnel counts or candidate-level evidence that has not been exported into
 * this standalone repository.
 */
export const PREVIEW_SNAPSHOT: PreviewSnapshot = {
  snapshotLabel: "Qualification-era scanner snapshot",
  observedAt: "2026-09-19T10:40:46Z",
  policyVersion: "broad-scan-candidate-v4",
  policyStatus: "PROVISIONAL",
  qualificationStatus: "COLLECTING",
  rankableMarkets: 1272,
  extremeMarkets: 90,
  sourceNote:
    "Static read-only validation snapshot derived from the RULERS-X scanner qualification workstream. It is not a live feed.",
  limitations: [
    "Candidate-level rows are intentionally not exported in this first public validation build.",
    "The scanner policy is still under forward qualification.",
    "The preview does not provide trade authorization, position sizing, or expected returns.",
    "Regime, full RULERS decision gates, and the risk engine are not yet public capabilities.",
  ],
};

export const EVIDENCE_DIMENSIONS: EvidenceDimension[] = [
  {
    name: "Move evidence",
    short: "What changed?",
    description:
      "The scanner checks whether a market's 24-hour move is meaningfully large in absolute terms rather than relying on rank alone.",
    rule:
      "Under v4, a very strong move can independently support EXTREME classification.",
  },
  {
    name: "Activity evidence",
    short: "Is participation elevated?",
    description:
      "Trade-count activity is assessed as evidence of unusual participation, but activity alone cannot make a market EXTREME.",
    rule:
      "Very strong activity requires at least one other elevated evidence component for EXTREME.",
  },
  {
    name: "Location evidence",
    short: "Where is price in its range?",
    description:
      "Range location helps describe where the current market sits within its own 24-hour high-low range.",
    rule:
      "Very strong location also requires supporting elevated evidence; location alone is not enough.",
  },
  {
    name: "Trust evidence",
    short: "Can we rely on the observation?",
    description:
      "Data confidence, identity confidence, timestamps, policy version, and qualification state remain visible rather than being hidden behind one score.",
    rule:
      "Unknown or unresolved evidence is allowed to remain unknown. Confidence never silently becomes certainty.",
  },
];
