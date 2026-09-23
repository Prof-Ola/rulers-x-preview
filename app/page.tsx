import { EvidenceExplorer } from "@/components/EvidenceExplorer";
import { PREVIEW_SNAPSHOT } from "@/lib/preview-data";

function Hero({ variant }: { variant: "a" | "b" }) {
  if (variant === "a") {
    return (
      <>
        <p className="eyebrow">RULERS-X RESEARCH PREVIEW</p>
        <h1>From 1,000+ crypto markets to the handful worth investigating.</h1>
        <p className="hero-copy">
          RULERS-X scans digital-asset markets and separates attention from action:
          first decide what deserves investigation, then inspect the evidence.
        </p>
      </>
    );
  }

  return (
    <>
      <p className="eyebrow">RULERS-X RESEARCH PREVIEW</p>
      <h1>Know what deserves attention before you risk capital.</h1>
      <p className="hero-copy">
        RULERS-X scans large market universes and narrows them into a smaller set worth investigating.
        It does not tell you what to buy. The first live market is digital assets; cross-asset expansion comes later.
      </p>
      <div className="thesis-lines" aria-label="RULERS-X operating philosophy">
        <span>Not every market deserves attention.</span>
        <span>Not everything interesting is an opportunity.</span>
        <span>Not every opportunity deserves capital.</span>
      </div>
    </>
  );
}

function Capability({
  label,
  status,
}: {
  label: string;
  status: "LIVE" | "PROVISIONAL" | "NOT BUILT";
}) {
  return (
    <div className="capability-card">
      <span>{label}</span>
      <strong>{status}</strong>
    </div>
  );
}

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const raw = Array.isArray(searchParams.variant)
    ? searchParams.variant[0]
    : searchParams.variant;
  const variant: "a" | "b" = raw === "a" ? "a" : "b";

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <div>
            <div className="brand">RULERS-X</div>
            <div className="brand-note">Evidence before conviction.</div>
          </div>
          <nav aria-label="Preview navigation">
            <a href="#radar">Radar</a>
            <a href="#evidence">Evidence</a>
            <a href="#method">Method</a>
          </nav>
        </div>
      </header>

      <section className="hero shell">
        <Hero variant={variant} />
        <div className="hero-actions">
          <a className="button primary" href="#radar">
            Explore the Market Radar
          </a>
          <a className="button secondary" href="#evidence">
            See how the evidence works
          </a>
        </div>
        <div className="trust-strip" aria-label="Current trust and safety facts">
          <span>Static, timestamped snapshot</span>
          <span>Source provenance visible</span>
          <span>Read-only</span>
          <span>No wallet signing</span>
          <span>Scanner policy: PROVISIONAL</span>
        </div>
        <p className="microcopy">
          Validation preview only · no trade execution · no investment recommendation
        </p>
      </section>

      <section className="radar-section" id="radar">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">MARKET RADAR</p>
              <h2>Compress first. Investigate second.</h2>
              <p>
                The scanner narrows a large market universe into a smaller
                attention set. It does not decide what deserves capital.
              </p>
            </div>
            <div className="snapshot-meta">
              <span>{PREVIEW_SNAPSHOT.snapshotLabel}</span>
              <span>
                Observed {new Date(PREVIEW_SNAPSHOT.observedAt).toUTCString()}
              </span>
              <span>{PREVIEW_SNAPSHOT.policyVersion}</span>
            </div>
          </div>

          <div className="metric-grid">
            <div className="metric-card">
              <strong>{PREVIEW_SNAPSHOT.rankableMarkets.toLocaleString()}</strong>
              <span>Rankable markets</span>
            </div>
            <div className="metric-card">
              <strong>{PREVIEW_SNAPSHOT.extremeMarkets.toLocaleString()}</strong>
              <span>EXTREME attention class</span>
            </div>
            <div className="metric-card">
              <strong>{PREVIEW_SNAPSHOT.policyStatus}</strong>
              <span>Scanner policy</span>
            </div>
            <div className="metric-card">
              <strong>{PREVIEW_SNAPSHOT.qualificationStatus}</strong>
              <span>Qualification</span>
            </div>
          </div>

          <div className="snapshot-note">
            <strong>Why no token list yet?</strong>
            <p>
              This standalone validation site deliberately does not expose the
              private RULERS-X backend. Candidate-level rows will be added only
              through a controlled, read-only export. The counts above are a
              static qualification-era snapshot, not a live market feed.
            </p>
          </div>
        </div>
      </section>

      <section className="shell section" id="evidence">
        <div className="section-heading">
          <p className="eyebrow">WHY IS THIS HERE?</p>
          <h2>The label is not the explanation.</h2>
          <p>
            RULERS-X is designed so a user can inspect the components behind an
            attention classification instead of trusting an opaque badge.
          </p>
        </div>
        <EvidenceExplorer />
      </section>

      <section className="method-section" id="method">
        <div className="shell">
          <div className="section-heading light">
            <p className="eyebrow">CURRENT CAPABILITY TRUTH</p>
            <h2>
              The scanner directs attention. Later gates must earn the right to
              touch capital.
            </h2>
          </div>

          <div className="capability-grid">
            <Capability label="Discovery" status="LIVE" />
            <Capability label="Eligibility" status="LIVE" />
            <Capability label="Scanner" status="PROVISIONAL" />
            <Capability label="Regime" status="NOT BUILT" />
            <Capability label="RULERS gates" status="NOT BUILT" />
            <Capability label="Risk engine" status="NOT BUILT" />
          </div>

          <div className="trust-grid">
            <div>
              <strong>Provenance</strong>
              <p>Make data source, timestamps, and policy lineage visible.</p>
            </div>
            <div>
              <strong>Uncertainty</strong>
              <p>Keep unresolved evidence unresolved instead of hiding it.</p>
            </div>
            <div>
              <strong>Versioning</strong>
              <p>Show which policy produced an observation and its status.</p>
            </div>
            <div>
              <strong>Security</strong>
              <p>No wallet signing, private keys, or hidden execution.</p>
            </div>
          </div>

          <div className="limitations">
            <strong>What this preview does not claim</strong>
            <ul>
              {PREVIEW_SNAPSHOT.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <span>RULERS-X Research Preview</span>
          <span>Market intelligence research, not investment advice.</span>
        </div>
      </footer>
    </main>
  );
}
