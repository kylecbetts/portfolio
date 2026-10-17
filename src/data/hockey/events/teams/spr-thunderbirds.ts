import type { Event } from "../types";

export const sprThunderbirdsEvents = [
  {
    kind: "roadGame",
    team: "spr-thunderbirds",
    opponent: "prov-bruins",
    seasons: ["2025-2026"],
  },
] as const satisfies Array<Event & { team: "spr-thunderbirds" }>;
