import type { Event } from "../types";

export const colEaglesEvents = [
  {
    kind: "roadGame",
    team: "col-eagles",
    opponent: "bak-condors",
    seasons: ["2021-2022"],
  },
  {
    kind: "roadGame",
    team: "col-eagles",
    opponent: "sj-barracuda",
    seasons: ["2021-2022"],
  },
] as const satisfies Array<Event & { team: "col-eagles" }>;
