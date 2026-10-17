import type { Event } from "../types";

export const cjhlWProspectsEvents = [
  {
    kind: "neutral",
    name: "2016 CJHL Prospects Game",
    team: "cjhl-w-prospects",
    rink: "prospera-centre",
    opponents: ["cjhl-e-prospects"],
    seasons: ["2015-2016"],
  },
] as const satisfies Array<Event & { team: "cjhl-w-prospects" }>;
