export type PreviewStatus = "LIVE" | "PROVISIONAL" | "COLLECTING" | "NOT_BUILT";

export interface PreviewSnapshot {
  snapshotLabel: string;
  observedAt: string;
  policyVersion: string;
  policyStatus: "PROVISIONAL";
  qualificationStatus: "COLLECTING";
  rankableMarkets: number;
  extremeMarkets: number;
  sourceNote: string;
  limitations: string[];
}

export interface EvidenceDimension {
  name: string;
  short: string;
  description: string;
  rule: string;
}
