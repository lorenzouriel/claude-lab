import { useStore } from "@/store/useStore";
import { SquadCard } from "./SquadCard";

export function LiveActivity() {
  const squads = useStore((s) => s.squads);
  const activeStates = useStore((s) => s.activeStates);
  const selectedSquad = useStore((s) => s.selectedSquad);
  const selectSquad = useStore((s) => s.selectSquad);

  if (activeStates.size === 0) return null;

  return (
    <section style={sectionStyle}>
      <div style={{ padding: "0 24px 8px" }}>
        <h2 style={headingStyle}>Live Activity</h2>
      </div>
      {[...activeStates.entries()].map(([code, state]) => {
        const squad = squads.get(code);
        if (!squad) return null;
        return (
          <SquadCard
            key={code}
            squad={squad}
            state={state}
            isSelected={selectedSquad === code}
            onSelect={() => selectSquad(selectedSquad === code ? null : code)}
          />
        );
      })}
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  paddingTop: 20,
  borderBottom: "1px solid var(--border)",
  marginBottom: 4,
};

const headingStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "var(--accent-cyan)",
};
