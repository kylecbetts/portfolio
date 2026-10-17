import type { Event } from "../types";

export const flaEverbladesEvents = [
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "atl-gladiators",
    seasons: ["2024-2025", "2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "fw-komets",
    seasons: ["2024-2025"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "gvl-swamp-rabbits",
    seasons: ["2024-2025", "2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "idh-steelheads",
    seasons: ["2024-2025"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "ind-fuel",
    seasons: ["2024-2025"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "jax-icemen",
    seasons: ["2024-2025", "2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "kc-mavericks",
    seasons: ["2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "nor-admirals",
    seasons: ["2024-2025", "2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "orl-solar-bears",
    seasons: ["2024-2025", "2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "sav-ghost-pirates",
    seasons: ["2024-2025", "2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "sc-stingrays",
    seasons: ["2024-2025", "2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "tr-lions",
    seasons: ["2024-2025"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "whl-nailers",
    seasons: ["2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "wic-thunder",
    seasons: ["2025-2026"],
  },
  {
    kind: "roadGame",
    team: "fla-everblades",
    opponent: "wor-railers",
    seasons: ["2025-2026"],
  },
] as const satisfies Array<Event & { team: "fla-everblades" }>;
