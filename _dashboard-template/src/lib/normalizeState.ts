import type { SquadState, Agent } from "@/types/state";

export function sortAgentsByDesk(agents: Agent[]): Agent[] {
  return [...agents].sort((a, b) => {
    if (a.desk.row !== b.desk.row) return a.desk.row - b.desk.row;
    return a.desk.col - b.desk.col;
  });
}

export function findAgent(state: SquadState, agentId: string): Agent | undefined {
  return state.agents.find((a) => a.id === agentId);
}

export function getWorkingAgent(state: SquadState): Agent | undefined {
  return state.agents.find((a) => a.status === "working");
}
