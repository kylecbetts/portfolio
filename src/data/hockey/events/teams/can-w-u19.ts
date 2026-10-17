import type { Event } from "../types";

export const canWU19Events = [
  {
    kind: "neutral",
    name: "2015 Exhibition",
    team: "can-w-u19",
    rink: "duncan-mcdonald-memorial-community-gardens",
    opponents: ["rus-u19"],
    seasons: ["2015-2016"],
  },
  {
    kind: "neutral",
    name: "2015 World Jr. A Challenge",
    team: "can-w-u19",
    rink: "cobourg-community-centre",
    opponents: ["can-e-u19", "cze-u19", "rus-u19", "sui-u19", "usa-u19"],
    seasons: ["2015-2016"],
  },
  {
    kind: "neutral",
    name: "2016 Exhibition",
    team: "can-w-u19",
    rink: "cold-lake-energy-centre",
    opponents: ["usa-u19"],
    seasons: ["2016-2017"],
  },
  {
    kind: "neutral",
    name: "2016 World Jr. A Challenge",
    team: "can-w-u19",
    rink: "rj-lalonde-arena",
    opponents: ["can-e-u19", "cze-u19", "rus-u19", "sui-u19", "usa-u19"],
    seasons: ["2016-2017"],
  },
] as const satisfies Array<Event & { team: "can-w-u19" }>;
