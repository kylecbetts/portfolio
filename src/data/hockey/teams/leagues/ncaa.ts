import type { Team } from "../types";

import armyLogo from "@/assets/hockey/teams/ncaa/army.png";
import asuLogo from "@/assets/hockey/teams/ncaa/asu.png";
import buLogo from "@/assets/hockey/teams/ncaa/bu.png";
import brwnLogo from "@/assets/hockey/teams/ncaa/brwn.png";
import clarLogo from "@/assets/hockey/teams/ncaa/clar.png";
import colgLogo from "@/assets/hockey/teams/ncaa/colg.png";
import corLogo from "@/assets/hockey/teams/ncaa/cor.png";
import dartLogo from "@/assets/hockey/teams/ncaa/dart.png";
import harvLogo from "@/assets/hockey/teams/ncaa/harv.png";
import mOhLogo from "@/assets/hockey/teams/ncaa/m-oh.png";
import michLogo from "@/assets/hockey/teams/ncaa/mich.png";
import mnstLogo from "@/assets/hockey/teams/ncaa/mnst.png";
import msuLogo from "@/assets/hockey/teams/ncaa/msu.png";
import undLogo from "@/assets/hockey/teams/ncaa/und.png";
import neLogo from "@/assets/hockey/teams/ncaa/ne.png";
import nmiLogo from "@/assets/hockey/teams/ncaa/nmi.png";
import osuLogo from "@/assets/hockey/teams/ncaa/osu.png";
import prinLogo from "@/assets/hockey/teams/ncaa/prin.png";
import provLogo from "@/assets/hockey/teams/ncaa/prov.png";
import quinLogo from "@/assets/hockey/teams/ncaa/quin.png";
import rpiLogo from "@/assets/hockey/teams/ncaa/rpi.png";
import sluLogo from "@/assets/hockey/teams/ncaa/slu.png";
import unnyLogo from "@/assets/hockey/teams/ncaa/unny.png";
import yaleLogo from "@/assets/hockey/teams/ncaa/yale.png";

export const ncaaTeams = {
  "army-black-knights": {
    place: "Army West Point",
    nickname: "Black Knights",
    abbreviation: "ARMY",
    league: "ncaa",
    logo: armyLogo,
  },
  "asu-sun-devils": {
    place: "Arizona State",
    nickname: "Sun Devils",
    abbreviation: "ASU",
    league: "ncaa",
    homeRink: "oceanside-ice-arena",
    logo: asuLogo,
  },
  "bu-terriers": {
    place: "Boston University",
    nickname: "Terriers",
    abbreviation: "BU",
    league: "ncaa",
    logo: buLogo,
  },
  "brwn-bears": {
    place: "Brown",
    nickname: "Bears",
    abbreviation: "BRWN",
    league: "ncaa",
    homeRink: "meehan-auditorium",
    logo: brwnLogo,
  },
  "clar-golden-knights": {
    place: "Clarkson",
    nickname: "Golden Knights",
    abbreviation: "CLAR",
    league: "ncaa",
    homeRink: "cheel-arena",
    logo: clarLogo,
  },
  "colg-raiders": {
    place: "Colgate",
    nickname: "Raiders",
    abbreviation: "COLG",
    league: "ncaa",
    homeRink: "class-of-1965-arena",
    logo: colgLogo,
  },
  "cor-big-red": {
    place: "Cornell",
    nickname: "Big Red",
    abbreviation: "COR",
    league: "ncaa",
    homeRink: "lynah-rink",
    logo: corLogo,
  },
  "dart-big-green": {
    place: "Dartmouth",
    nickname: "Big Green",
    abbreviation: "DART",
    league: "ncaa",
    homeRink: "thompson-arena",
    logo: dartLogo,
  },
  "harv-crimson": {
    place: "Harvard",
    nickname: "Crimson",
    abbreviation: "HARV",
    league: "ncaa",
    homeRink: "bright-landry-hockey-center",
    logo: harvLogo,
  },
  "m-oh-redhawks": {
    place: "Miami Ohio",
    nickname: "RedHawks",
    abbreviation: "M-OH",
    league: "ncaa",
    homeRink: "goggin-ice-center",
    logo: mOhLogo,
  },
  "mich-wolverines": {
    place: "Michigan",
    nickname: "Wolverines",
    abbreviation: "MICH",
    league: "ncaa",
    logo: michLogo,
  },
  "mnst-mavericks": {
    place: "Minnesota State",
    nickname: "Mavericks",
    abbreviation: "MNST",
    league: "ncaa",
    logo: mnstLogo,
  },
  "msu-spartans": {
    place: "Michigan State",
    nickname: "Spartans",
    abbreviation: "MSU",
    league: "ncaa",
    homeRink: "munn-ice-arena",
    logo: msuLogo,
  },
  "und-fighting-hawks": {
    place: "North Dakota",
    nickname: "Fighting Hawks",
    abbreviation: "UND",
    league: "ncaa",
    homeRink: "ralph-engelstad-arena",
    logo: undLogo,
  },
  "ne-huskies": {
    place: "Northeastern",
    nickname: "Huskies",
    abbreviation: "NE",
    league: "ncaa",
    logo: neLogo,
  },
  "nmi-wildcats": {
    place: "Northern Michigan",
    nickname: "Wildcats",
    abbreviation: "NMI",
    league: "ncaa",
    homeRink: "berry-events-center",
    logo: nmiLogo,
  },
  "osu-buckeyes": {
    place: "Ohio State",
    nickname: "Buckeyes",
    abbreviation: "OSU",
    league: "ncaa",
    logo: osuLogo,
  },
  "prin-tigers": {
    place: "Princeton",
    nickname: "Tigers",
    abbreviation: "PRIN",
    league: "ncaa",
    homeRink: "hobey-baker-memorial-ice-rink",
    logo: prinLogo,
  },
  "prov-friars": {
    place: "Providence",
    nickname: "Friars",
    abbreviation: "PROV",
    league: "ncaa",
    logo: provLogo,
  },
  "quin-bobcats": {
    place: "Quinnipiac",
    nickname: "Bobcats",
    abbreviation: "QUIN",
    league: "ncaa",
    homeRink: "m-and-t-bank-arena",
    logo: quinLogo,
  },
  "rpi-engineers": {
    place: "RPI",
    nickname: "Engineers",
    abbreviation: "RPI",
    league: "ncaa",
    homeRink: "houston-field-house",
    logo: rpiLogo,
  },
  "slu-saints": {
    place: "St. Lawrence",
    nickname: "Saints",
    abbreviation: "SLU",
    league: "ncaa",
    homeRink: "appleton-arena",
    logo: sluLogo,
  },
  "unny-dutchmen": {
    place: "Union",
    nickname: "Dutchmen",
    abbreviation: "UNNY",
    league: "ncaa",
    homeRink: "frank-l-messa-rink",
    logo: unnyLogo,
  },
  "yale-bulldogs": {
    place: "Yale",
    nickname: "Bulldogs",
    abbreviation: "YALE",
    league: "ncaa",
    homeRink: "ingalls-ice-rink",
    logo: yaleLogo,
  },
} as const satisfies Record<string, Team & { league: "ncaa" }>;
