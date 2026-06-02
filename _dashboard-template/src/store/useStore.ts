import { create } from "zustand";
import type { DashboardState, SquadInfo, SquadState } from "@/types/state";

interface Store {
  companyState: DashboardState | null;
  loadCompanyState: () => Promise<void>;

  squads: Map<string, SquadInfo>;
  activeStates: Map<string, SquadState>;
  isConnected: boolean;
  selectedSquad: string | null;

  setConnected: (v: boolean) => void;
  setSnapshot: (squads: SquadInfo[], activeStates: Record<string, SquadState>) => void;
  updateSquadState: (squad: string, state: SquadState) => void;
  setSquadInactive: (squad: string) => void;
  selectSquad: (name: string | null) => void;
}

export const useStore = create<Store>((set) => ({
  companyState: null,
  squads: new Map(),
  activeStates: new Map(),
  isConnected: false,
  selectedSquad: null,

  loadCompanyState: async () => {
    try {
      const res = await fetch("./state.json", { cache: "no-store" });
      if (!res.ok) return;
      const data: DashboardState = await res.json();
      set({ companyState: data });
    } catch {
      // state.json not reachable — static layer shows placeholder
    }
  },

  setConnected: (isConnected) => set({ isConnected }),

  setSnapshot: (squads, activeStates) =>
    set({
      squads: new Map(squads.map((s) => [s.code, s])),
      activeStates: new Map(Object.entries(activeStates)),
    }),

  updateSquadState: (squad, state) =>
    set((prev) => ({
      activeStates: new Map(prev.activeStates).set(squad, state),
    })),

  setSquadInactive: (squad) =>
    set((prev) => {
      const next = new Map(prev.activeStates);
      next.delete(squad);
      return {
        activeStates: next,
        selectedSquad: prev.selectedSquad === squad ? null : prev.selectedSquad,
      };
    }),

  selectSquad: (selectedSquad) => set({ selectedSquad }),
}));
