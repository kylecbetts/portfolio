import type { Event } from "../types";

export const watSiskinsEvents = [
  {
    kind: "roadGame",
    team: "wat-siskins",
    opponent: "brm-bombers",
    seasons: ["2014-2015"],
  },
  {
    kind: "roadGame",
    team: "wat-siskins",
    opponent: "bfd-99ers",
    seasons: ["2014-2015"],
  },
  {
    kind: "roadGame",
    team: "wat-siskins",
    opponent: "cam-winter-hawks",
    seasons: ["2014-2015"],
  },
  {
    kind: "roadGame",
    team: "wat-siskins",
    opponent: "elm-sugar-kings",
    seasons: ["2014-2015"],
  },
  {
    kind: "roadGame",
    team: "wat-siskins",
    opponent: "gue-hurricanes",
    seasons: ["2014-2015"],
  },
  {
    kind: "roadGame",
    team: "wat-siskins",
    opponent: "kit-dutchmen",
    seasons: ["2014-2015"],
  },
  {
    kind: "roadGame",
    team: "wat-siskins",
    opponent: "lis-cyclones",
    seasons: ["2014-2015"],
  },
  {
    kind: "neutral",
    name: "2014 GOJHL Showcase",
    team: "wat-siskins",
    rink: "seymour-hannah-sports-centre",
    opponents: ["ldn-nationals"],
    seasons: ["2014-2015"],
  },
  {
    kind: "roadGame",
    team: "wat-siskins",
    opponent: "sfd-cullitons",
    seasons: ["2014-2015"],
  },
] as const satisfies Array<Event & { team: "wat-siskins" }>;
