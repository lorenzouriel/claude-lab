import { useStore } from "@/store/useStore";

export function CompanyOverview() {
  const company = useStore((s) => s.companyState?.company);

  if (!company) {
    return (
      <section style={sectionStyle}>
        <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
          No company data — make sure state.json is present and the server is running.
        </p>
      </section>
    );
  }

  return (
    <section style={sectionStyle}>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>
        {company.name}
      </h1>
      <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 6, lineHeight: 1.5 }}>
        {company.tagline}
      </p>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <Pill label={company.profile} />
        <Pill label={company.language} />
      </div>
    </section>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span style={{
      fontSize: 11,
      padding: "2px 8px",
      borderRadius: 12,
      border: "1px solid var(--border)",
      color: "var(--text-secondary)",
      background: "var(--bg-secondary)",
      textTransform: "capitalize",
    }}>
      {label}
    </span>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: "24px 24px 16px",
  borderBottom: "1px solid var(--border)",
};
