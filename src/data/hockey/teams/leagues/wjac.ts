import type { Team } from "../types";

import canLogo from "@/assets/hockey/teams/wjac/can.png";
import czeLogo from "@/assets/hockey/teams/wjac/cze.png";
import rusLogo from "@/assets/hockey/teams/wjac/rus.png";
import suiLogo from "@/assets/hockey/teams/wjac/sui.png";
import usaLogo from "@/assets/hockey/teams/wjac/usa.png";

export const wjacTeams = {
  "can-e-u19": {
    place: "Canada East",
    nickname: "U19",
    abbreviation: "CAN-E",
    league: "wjac",
    logo: canLogo,
  },
  "can-w-u19": {
    place: "Canada West",
    nickname: "U19",
    abbreviation: "CAN-W",
    league: "wjac",
    homeRink: "leduc-recreation-centre",
    logo: canLogo,
  },
  "cze-u19": {
    place: "Czech Republic",
    nickname: "U19",
    abbreviation: "CZE",
    league: "wjac",
    logo: czeLogo,
  },
  "rus-u19": {
    place: "Russia",
    nickname: "U19",
    abbreviation: "RUS",
    league: "wjac",
    logo: rusLogo,
  },
  "sui-u19": {
    place: "Switzerland",
    nickname: "U19",
    abbreviation: "SUI",
    league: "wjac",
    logo: suiLogo,
  },
  "usa-u19": {
    place: "United States",
    nickname: "U19",
    abbreviation: "USA",
    league: "wjac",
    logo: usaLogo,
  },
} as const satisfies Record<string, Team & { league: "wjac" }>;
