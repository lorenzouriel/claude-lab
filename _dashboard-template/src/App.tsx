import { useEffect, Component, type ReactNode } from "react";
import { useStore } from "@/store/useStore";
import { useSquadSocket } from "@/hooks/useSquadSocket";
import { CompanyOverview } from "@/components/CompanyOverview";
import { SkillsGrid } from "@/components/SkillsGrid";
import { KPIPanel } from "@/components/KPIPanel";
import { LiveActivity } from "@/components/LiveActivity";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, color: "#ff6b6b", fontFamily: "monospace", fontSize: 13 }}>
          <strong>Render error:</strong>
          <pre style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export function App() {
  const loadCompanyState = useStore((s) => s.loadCompanyState);
  const companyName = useStore((s) => s.companyState?.company?.name);
  const isConnected = useStore((s) => s.isConnected);

  useSquadSocket();

  useEffect(() => {
    loadCompanyState();
  }, [loadCompanyState]);

  return (
    <ErrorBoundary>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={headerStyle}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>
            {companyName ?? "Dashboard"}
          </span>
          <WsIndicator connected={isConnected} />
        </header>
        <main style={{ flex: 1, overflowY: "auto" }}>
          <LiveActivity />
          <CompanyOverview />
          <SkillsGrid />
          <KPIPanel />
        </main>
      </div>
    </ErrorBoundary>
  );
}

function WsIndicator({ connected }: { connected: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--text-secondary)" }}>
      <span style={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: connected ? "var(--accent-green)" : "#444",
        boxShadow: connected ? "0 0 5px var(--accent-green)" : "none",
        flexShrink: 0,
      }} />
      {connected ? "live" : "offline"}
    </div>
  );
}

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 24px",
  height: 44,
  minHeight: 44,
  borderBottom: "1px solid var(--border)",
  flexShrink: 0,
  background: "var(--bg-primary)",
};
