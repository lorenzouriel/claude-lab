import { useStore } from "@/store/useStore";
import type { SkillEntry } from "@/types/state";

export function SkillsGrid() {
  const skills = useStore((s) => s.companyState?.skills ?? []);

  if (skills.length === 0) return null;

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
        {skills.map((skill) => (
          <SkillPill key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillPill({ skill }: { skill: SkillEntry }) {
  return (
    <span
      title={skill.custom ? "Custom skill — needs setup" : undefined}
      style={{
        fontSize: 12,
        padding: "4px 10px",
        borderRadius: 14,
        border: skill.installed
          ? "1px solid var(--accent-cyan)"
          : "1px dashed var(--text-secondary)",
        color: skill.installed ? "var(--accent-cyan)" : "var(--text-secondary)",
        background: skill.installed ? "rgba(0,212,255,0.08)" : "transparent",
        cursor: skill.custom ? "help" : "default",
      }}
    >
      {skill.label}
    </span>
  );
}

const sectionStyle: React.CSSProperties = {
  padding: "20px 24px",
  borderBottom: "1px solid var(--border)",
};

const headingStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "var(--text-secondary)",
};
