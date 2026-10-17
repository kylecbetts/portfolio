import type { Team } from "../types";

import cjhlLogo from "@/assets/hockey/teams/cjhl/cjhl.png";

export const cjhlTeams = {
  "cjhl-e-prospects": {
    place: "CJHL East",
    nickname: "CJHL-E",
    abbreviation: "CJHL-E",
    league: "cjhl",
    logo: cjhlLogo,
  },
  "cjhl-w-prospects": {
    place: "CJHL West",
    nickname: "Prospects",
    abbreviation: "CJHL-W",
    league: "cjhl",
    logo: cjhlLogo,
  },
} as const satisfies Record<string, Team & { league: "cjhl" }>;
