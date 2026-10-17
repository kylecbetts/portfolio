import { Team } from "../types";

import colLogo from "@/assets/hockey/teams/nhl/col.png";
import ottLogo from "@/assets/hockey/teams/nhl/ott.png";
import stlLogo from "@/assets/hockey/teams/nhl/stl.png";

export const nhlTeams = {
  "col-avalanche": {
    place: "Colorado",
    nickname: "Avalanche",
    abbreviation: "COL",
    league: "nhl",
    logo: colLogo,
  },
  "ott-senators": {
    place: "Ottawa",
    nickname: "Senators",
    abbreviation: "OTT",
    league: "nhl",
    logo: ottLogo,
  },
  "stl-blues": {
    place: "St. Louis",
    nickname: "Blues",
    abbreviation: "STL",
    league: "nhl",
    logo: stlLogo,
  },
} as const satisfies Record<string, Team & { league: "nhl" }>;
