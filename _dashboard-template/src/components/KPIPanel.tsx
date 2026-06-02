import { useStore } from "@/store/useStore";

export function KPIPanel() {
  const kpis = useStore((s) => s.companyState?.kpis ?? []);
  const goal = useStore((s) => s.companyState?.goal_90d ?? "");

  if (!goal && kpis.length === 0) return null;

  return (
    <section style={sectionStyle}>
      {goal && (
        <div style={{ marginBottom: kpis.length > 0 ? 20 : 0 }}>
          <h2 style={headingStyle}>90-day goal</h2>
          <p style={{ fontSize: 13, color: "var(--text-primary)", marginTop: 8, lineHeight: 1.6 }}>
            {goal}
          </p>
        </div>
      )}
      {kpis.length > 0 && (
        <div>
          <h2 style={headingStyle}>KPIs</h2>
          <ul style={{ marginTop: 8, listStyle: "none" }}>
            {kpis.map((kpi, i) => (
              <li
                key={i}
                style={{
                  fontSize: 13,
                  color: "var(--text-primary)",
                  padding: "6px 0",
                  borderBottom: i < kpis.length - 1 ? "1px solid var(--border)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "var(--accent-cyan)", fontSize: 10 }}>▶</span>
                {kpi}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: "20px 24px",
};

const headingStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "var(--text-secondary)",
};
