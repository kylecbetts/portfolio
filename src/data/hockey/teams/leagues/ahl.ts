import type { Team } from "../types";

import bakLogo from "@/assets/hockey/teams/ahl/bak.png";
import belLogo from "@/assets/hockey/teams/ahl/bel.png";
import briLogo from "@/assets/hockey/teams/ahl/bri.png";
import cleLogo from "@/assets/hockey/teams/ahl/cle.png";
import colLogo from "@/assets/hockey/teams/ahl/col.png";
import grLogo from "@/assets/hockey/teams/ahl/gr.png";
import hfdLogo from "@/assets/hockey/teams/ahl/hfd.png";
import lavLogo from "@/assets/hockey/teams/ahl/lav.png";
import lvLogo from "@/assets/hockey/teams/ahl/lv.png";
import mbLogo from "@/assets/hockey/teams/ahl/mb.png";
import milLogo from "@/assets/hockey/teams/ahl/mil.png";
import provLogo from "@/assets/hockey/teams/ahl/prov.png";
import rocLogo from "@/assets/hockey/teams/ahl/roc.png";
import rfdLogo from "@/assets/hockey/teams/ahl/rfd.png";
import sjLogo from "@/assets/hockey/teams/ahl/sj.png";
import sprLogo from "@/assets/hockey/teams/ahl/spr.png";
import syrLogo from "@/assets/hockey/teams/ahl/syr.png";
import torLogo from "@/assets/hockey/teams/ahl/tor.png";
import utcLogo from "@/assets/hockey/teams/ahl/utc.png";

export const ahlTeams = {
  "bak-condors": {
    place: "Bakersfield",
    nickname: "Condors",
    abbreviation: "BAK",
    league: "ahl",
    homeRink: "dignity-health-arena",
    logo: bakLogo,
  },
  "bel-senators": {
    place: "Belleville",
    nickname: "Senators",
    abbreviation: "BEL",
    league: "ahl",
    homeRink: "caa-arena",
    logo: belLogo,
  },
  "bri-islanders": {
    place: "Bridgeport",
    nickname: "Islanders",
    abbreviation: "BRI",
    league: "ahl",
    homeRink: "total-mortgage-arena",
    logo: briLogo,
  },
  "cle-monsters": {
    place: "Cleveland",
    nickname: "Monsters",
    abbreviation: "CLE",
    league: "ahl",
    homeRink: "rocket-mortgage-fieldhouse",
    logo: cleLogo,
  },
  "col-eagles": {
    place: "Colorado",
    nickname: "Eagles",
    abbreviation: "COL",
    league: "ahl",
    homeRink: "budweiser-events-center",
    logo: colLogo,
  },
  "gr-griffins": {
    place: "Grand Rapids",
    nickname: "Griffins",
    abbreviation: "GR",
    league: "ahl",
    homeRink: "van-andel-arena",
    logo: grLogo,
  },
  "hfd-wolf-pack": {
    place: "Hartford",
    nickname: "Wolf Pack",
    abbreviation: "HFD",
    league: "ahl",
    homeRink: "xl-center",
    logo: hfdLogo,
  },
  "lav-rocket": {
    place: "Laval",
    nickname: "Rocket",
    abbreviation: "LAV",
    league: "ahl",
    homeRink: "place-bell",
    logo: lavLogo,
  },
  "lv-phantoms": {
    place: "Lehigh Valley",
    nickname: "Phantoms",
    abbreviation: "LV",
    league: "ahl",
    homeRink: "ppl-center",
    logo: lvLogo,
  },
  "mb-moose": {
    place: "Manitoba",
    nickname: "Moose",
    abbreviation: "MB",
    league: "ahl",
    homeRink: "canada-life-centre",
    logo: mbLogo,
  },
  "mil-admirals": {
    place: "Milwaukee",
    nickname: "Admirals",
    abbreviation: "MIL",
    league: "ahl",
    homeRink: "uw-milwaukee-panther-arena",
    logo: milLogo,
  },
  "prov-bruins": {
    place: "Providence",
    nickname: "Bruins",
    abbreviation: "PROV",
    league: "ahl",
    homeRink: "dunkin-donuts-center",
    logo: provLogo,
  },
  "roc-americans": {
    place: "Rochester",
    nickname: "Americans",
    abbreviation: "ROC",
    league: "ahl",
    homeRink: "blue-cross-arena",
    logo: rocLogo,
  },
  "rfd-icehogs": {
    place: "Rockford",
    nickname: "IceHogs",
    abbreviation: "RFD",
    league: "ahl",
    homeRink: "bmo-center",
    logo: rfdLogo,
  },
  "sj-barracuda": {
    place: "San Jose",
    nickname: "Barracuda",
    abbreviation: "SJ",
    league: "ahl",
    homeRink: "sap-center",
    logo: sjLogo,
  },
  "spr-thunderbirds": {
    place: "Springfield",
    nickname: "Thunderbirds",
    abbreviation: "SPR",
    league: "ahl",
    homeRink: "mass-mutual-center",
    logo: sprLogo,
  },
  "syr-crunch": {
    place: "Syracuse",
    nickname: "Crunch",
    abbreviation: "SYR",
    league: "ahl",
    homeRink: "upstate-medical-arena",
    logo: syrLogo,
  },
  "tor-marlies": {
    place: "Toronto",
    nickname: "Marlies",
    abbreviation: "TOR",
    league: "ahl",
    homeRink: "coca-cola-coliseum",
    logo: torLogo,
  },
  "utc-comets": {
    place: "Utica",
    nickname: "Comets",
    abbreviation: "UTC",
    league: "ahl",
    homeRink: "adirondack-bank-center",
    logo: utcLogo,
  },
} as const satisfies Record<string, Team & { league: "ahl" }>;
