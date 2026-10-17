import type { League } from "./types";

import ahlLogo from "@/assets/hockey/leagues/ahl.png";
import bchlLogo from "@/assets/hockey/leagues/bchl.png";
import cjhlLogo from "@/assets/hockey/leagues/cjhl.png";
import echlLogo from "@/assets/hockey/leagues/echl.png";
import gojhlLogo from "@/assets/hockey/leagues/gojhl.png";
import ncaaLogo from "@/assets/hockey/leagues/ncaa.png";
import nhlLogo from "@/assets/hockey/leagues/nhl.png";
import wjacLogo from "@/assets/hockey/leagues/wjac.png";

export const leagues = {
  ahl: {
    name: "American Hockey League",
    abbreviation: "AHL",
    level: "professional",
    logo: ahlLogo,
  },
  bchl: {
    name: "British Columbia Hockey League",
    abbreviation: "BCHL",
    level: "junior",
    logo: bchlLogo,
  },
  cjhl: {
    name: "Canadian Junior Hockey League",
    abbreviation: "CJHL",
    level: "junior",
    logo: cjhlLogo,
  },
  echl: {
    name: "East Coast Hockey League",
    abbreviation: "ECHL",
    level: "professional",
    logo: echlLogo,
  },
  gojhl: {
    name: "Greater Ontario Junior Hockey League",
    abbreviation: "GOJHL",
    level: "junior",
    logo: gojhlLogo,
  },
  ncaa: {
    name: "National Collegiate Athletic Association",
    abbreviation: "NCAA",
    level: "collegiate",
    logo: ncaaLogo,
  },
  nhl: {
    name: "National Hockey League",
    abbreviation: "NHL",
    level: "professional",
    logo: nhlLogo,
  },
  wjac: {
    name: "World Junior A Challenge",
    abbreviation: "WJAC",
    level: "junior",
    logo: wjacLogo,
  },
} as const satisfies Record<string, League>;
