import { Team } from "../types";

import brmLogo from "@/assets/hockey/teams/gojhl/brm.png";
import bfdLogo from "@/assets/hockey/teams/gojhl/bfd.png";
import camLogo from "@/assets/hockey/teams/gojhl/cam.png";
import elmLogo from "@/assets/hockey/teams/gojhl/elm.png";
import gueLogo from "@/assets/hockey/teams/gojhl/gue.png";
import kitLogo from "@/assets/hockey/teams/gojhl/kit.png";
import lisLogo from "@/assets/hockey/teams/gojhl/lis.png";
import ldnLogo from "@/assets/hockey/teams/gojhl/ldn.png";
import sfdLogo from "@/assets/hockey/teams/gojhl/sfd.png";
import watLogo from "@/assets/hockey/teams/gojhl/wat.png";

export const gojhlTeams = {
  "brm-bombers": {
    place: "Brampton",
    nickname: "Bombers",
    abbreviation: "BRM",
    league: "gojhl",
    homeRink: "victoria-park-arena",
    logo: brmLogo,
  },
  "bfd-99ers": {
    place: "Brantford",
    nickname: "99ers",
    abbreviation: "BFD",
    league: "gojhl",
    homeRink: "wayne-gretzky-sports-centre",
    logo: bfdLogo,
  },
  "cam-winter-hawks": {
    place: "Cambridge",
    nickname: "Winter Hawks",
    abbreviation: "CAM",
    league: "gojhl",
    homeRink: "galt-arena-gardens",
    logo: camLogo,
  },
  "elm-sugar-kings": {
    place: "Elmira",
    nickname: "Sugar Kings",
    abbreviation: "ELM",
    league: "gojhl",
    homeRink: "dan-snyder-memorial-arena",
    logo: elmLogo,
  },
  "gue-hurricanes": {
    place: "Guelph",
    nickname: "Hurricanes",
    abbreviation: "GUE",
    league: "gojhl",
    homeRink: "the-sleeman-centre",
    logo: gueLogo,
  },
  "kit-dutchmen": {
    place: "Kitchener",
    nickname: "Dutchmen",
    abbreviation: "KIT",
    league: "gojhl",
    homeRink: "kitchener-memorial-auditorium",
    logo: kitLogo,
  },
  "lis-cyclones": {
    place: "Listowel",
    nickname: "Cyclones",
    abbreviation: "LIS",
    league: "gojhl",
    homeRink: "listowel-memorial-arena",
    logo: lisLogo,
  },
  "ldn-nationals": {
    place: "London",
    nickname: "Nationals",
    abbreviation: "LDN",
    league: "gojhl",
    logo: ldnLogo,
  },
  "sfd-cullitons": {
    place: "Stratford",
    nickname: "Cullitons",
    abbreviation: "SFD",
    league: "gojhl",
    homeRink: "william-allman-memorial-arena",
    logo: sfdLogo,
  },
  "wat-siskins": {
    place: "Waterloo",
    nickname: "Siskins",
    abbreviation: "WAT",
    league: "gojhl",
    homeRink: "sun-life-financial-arena",
    logo: watLogo,
  },
} as const satisfies Record<string, Team & { league: "gojhl" }>;
