import type { Team } from "../types";

import avLogo from "@/assets/hockey/teams/bchl/av.png";
import chwLogo from "@/assets/hockey/teams/bchl/chw.png";
import coqLogo from "@/assets/hockey/teams/bchl/coq.png";
import cvLogo from "@/assets/hockey/teams/bchl/cv.png";
import lanLogo from "@/assets/hockey/teams/bchl/lan.png";
import merLogo from "@/assets/hockey/teams/bchl/mer.png";
import nanLogo from "@/assets/hockey/teams/bchl/nan.png";
import penLogo from "@/assets/hockey/teams/bchl/pen.png";
import prLogo from "@/assets/hockey/teams/bchl/pr.png";
import pgLogo from "@/assets/hockey/teams/bchl/pg.png";
import saLogo from "@/assets/hockey/teams/bchl/sa.png";
import surLogo from "@/assets/hockey/teams/bchl/sur.png";
import traLogo from "@/assets/hockey/teams/bchl/tra.png";
import verLogo from "@/assets/hockey/teams/bchl/ver.png";
import vicLogo from "@/assets/hockey/teams/bchl/vic.png";
import wenLogo from "@/assets/hockey/teams/bchl/wen.png";
import wkLogo from "@/assets/hockey/teams/bchl/wk.png";

export const bchlTeams = {
  "av-bulldogs": {
    place: "Alberni Valley",
    nickname: "Bulldogs",
    abbreviation: "AV",
    league: "bchl",
    homeRink: "weyerhaeuser-arena",
    logo: avLogo,
  },
  "chw-chiefs": {
    place: "Chilliwack",
    nickname: "Chiefs",
    abbreviation: "CHW",
    league: "bchl",
    homeRink: "prospera-centre",
    logo: chwLogo,
  },
  "coq-express": {
    place: "Coquitlam",
    nickname: "Express",
    abbreviation: "COQ",
    league: "bchl",
    homeRink: "poirier-sport-complex",
    logo: coqLogo,
  },
  "cv-capitals": {
    place: "Cowichan Valley",
    nickname: "Capitals",
    abbreviation: "CV",
    league: "bchl",
    homeRink: "island-savings-centre",
    logo: cvLogo,
  },
  "lan-rivermen": {
    place: "Langley",
    nickname: "Rivermen",
    abbreviation: "LAN",
    league: "bchl",
    homeRink: "george-preston-recreation-centre",
    logo: lanLogo,
  },
  "mer-centennials": {
    place: "Merritt",
    nickname: "Centennials",
    abbreviation: "MER",
    league: "bchl",
    homeRink: "nicola-valley-memorial-arena",
    logo: merLogo,
  },
  "nan-clippers": {
    place: "Nanaimo",
    nickname: "Clippers",
    abbreviation: "NAN",
    league: "bchl",
    homeRink: "frank-crane-arena",
    logo: nanLogo,
  },
  "pen-vees": {
    place: "Penticton",
    nickname: "Vees",
    abbreviation: "PEN",
    league: "bchl",
    homeRink: "south-okanagan-events-centre",
    logo: penLogo,
  },
  "pr-kings": {
    place: "Powell River",
    nickname: "Kings",
    abbreviation: "PR",
    league: "bchl",
    homeRink: "hap-parker-arena",
    logo: prLogo,
  },
  "pg-spruce-kings": {
    place: "Prince George",
    nickname: "Spruce Kings",
    abbreviation: "PG",
    league: "bchl",
    homeRink: "prince-george-coliseum",
    logo: pgLogo,
  },
  "sa-silverbacks": {
    place: "Salmon Arm",
    nickname: "Silverbacks",
    abbreviation: "SA",
    league: "bchl",
    homeRink: "shaw-centre",
    logo: saLogo,
  },
  "sur-eagles": {
    place: "Surrey",
    nickname: "Eagles",
    abbreviation: "SUR",
    league: "bchl",
    homeRink: "south-surrey-arena",
    logo: surLogo,
  },
  "tra-smoke-eaters": {
    place: "Trail",
    nickname: "Smoke Eaters",
    abbreviation: "TRA",
    league: "bchl",
    homeRink: "cominco-arena",
    logo: traLogo,
  },
  "ver-vipers": {
    place: "Vernon",
    nickname: "Vipers",
    abbreviation: "VER",
    league: "bchl",
    homeRink: "kal-tire-place",
    logo: verLogo,
  },
  "vic-grizzlies": {
    place: "Victoria",
    nickname: "Grizzlies",
    abbreviation: "VIC",
    league: "bchl",
    homeRink: "the-q-centre",
    logo: vicLogo,
  },
  "wen-wild": {
    place: "Wenatchee",
    nickname: "Wild",
    abbreviation: "WEN",
    league: "bchl",
    homeRink: "town-toyota-center",
    logo: wenLogo,
  },
  "wk-warriors": {
    place: "West Kelowna",
    nickname: "Warriors",
    abbreviation: "WK",
    league: "bchl",
    homeRink: "royal-lepage-place-arena",
    logo: wkLogo,
  },
} as const satisfies Record<string, Team & { league: "bchl" }>;
