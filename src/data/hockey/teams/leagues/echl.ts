import type { Team } from "../types";

import alnLogo from "@/assets/hockey/teams/echl/aln.png";
import atlLogo from "@/assets/hockey/teams/echl/atl.png";
import flaLogo from "@/assets/hockey/teams/echl/fla.png";
import fwLogo from "@/assets/hockey/teams/echl/fw.png";
import gvlLogo from "@/assets/hockey/teams/echl/gvl.png";
import idhLogo from "@/assets/hockey/teams/echl/idh.png";
import indLogo from "@/assets/hockey/teams/echl/ind.png";
import jaxLogo from "@/assets/hockey/teams/echl/jax.png";
import kcLogo from "@/assets/hockey/teams/echl/kc.png";
import norLogo from "@/assets/hockey/teams/echl/nor.png";
import orlLogo from "@/assets/hockey/teams/echl/orl.png";
import rcLogo from "@/assets/hockey/teams/echl/rc.png";
import savLogo from "@/assets/hockey/teams/echl/sav.png";
import scLogo from "@/assets/hockey/teams/echl/sc.png";
import tolLogo from "@/assets/hockey/teams/echl/tol.png";
import trLogo from "@/assets/hockey/teams/echl/tr.png";
import tulLogo from "@/assets/hockey/teams/echl/tul.png";
import utaLogo from "@/assets/hockey/teams/echl/uta.png";
import whlLogo from "@/assets/hockey/teams/echl/whl.png";
import wicLogo from "@/assets/hockey/teams/echl/wic.png";
import worLogo from "@/assets/hockey/teams/echl/wor.png";

export const echlTeams = {
  "aln-americans": {
    place: "Allen",
    nickname: "Americans",
    abbreviation: "ALN",
    league: "echl",
    logo: alnLogo,
  },
  "atl-gladiators": {
    place: "Atlanta",
    nickname: "Gladiators",
    abbreviation: "ATL",
    league: "echl",
    homeRink: "gas-south-arena",
    logo: atlLogo,
  },
  "fla-everblades": {
    place: "Florida",
    nickname: "Everblades",
    abbreviation: "FLA",
    league: "echl",
    homeRink: "hertz-arena",
    logo: flaLogo,
  },
  "fw-komets": {
    place: "Fort Wayne",
    nickname: "Komets",
    abbreviation: "FW",
    league: "echl",
    homeRink: "allen-county-war-memorial-coliseum",
    logo: fwLogo,
  },
  "gvl-swamp-rabbits": {
    place: "Greenville",
    nickname: "Swamp Rabbits",
    abbreviation: "GVL",
    league: "echl",
    homeRink: "bon-secours-wellness-arena",
    logo: gvlLogo,
  },
  "idh-steelheads": {
    place: "Idaho",
    nickname: "Steelheads",
    abbreviation: "IDH",
    league: "echl",
    homeRink: "idaho-central-arena",
    logo: idhLogo,
  },
  "ind-fuel": {
    place: "Indy",
    nickname: "Fuel",
    abbreviation: "IND",
    league: "echl",
    homeRink: "fishers-event-center",
    logo: indLogo,
  },
  "jax-icemen": {
    place: "Jacksonville",
    nickname: "Icemen",
    abbreviation: "JAX",
    league: "echl",
    homeRink: "vystar-veterans-memorial-arena",
    logo: jaxLogo,
  },
  "kc-mavericks": {
    place: "Kansas City",
    nickname: "Mavericks",
    abbreviation: "KC",
    league: "echl",
    homeRink: "cable-dahmer-arena",
    logo: kcLogo,
  },
  "nor-admirals": {
    place: "Norfolk",
    nickname: "Admirals",
    abbreviation: "NOR",
    league: "echl",
    homeRink: "norfolk-scope-arena",
    logo: norLogo,
  },
  "orl-solar-bears": {
    place: "Orlando",
    nickname: "Solar Bears",
    abbreviation: "ORL",
    league: "echl",
    homeRink: "kia-center",
    logo: orlLogo,
  },
  "rc-rush": {
    place: "Rapid City",
    nickname: "Rush",
    abbreviation: "RC",
    league: "echl",
    homeRink: "the-monument-ice-arena",
    logo: rcLogo,
  },
  "sav-ghost-pirates": {
    place: "Savannah",
    nickname: "Ghost Pirates",
    abbreviation: "SAV",
    league: "echl",
    homeRink: "enmarket-arena",
    logo: savLogo,
  },
  "sc-stingrays": {
    place: "South Carolina",
    nickname: "Stingrays",
    abbreviation: "SC",
    league: "echl",
    homeRink: "north-charleston-coliseum",
    logo: scLogo,
  },
  "tol-walleye": {
    place: "Toledo",
    nickname: "Walleye",
    abbreviation: "TOL",
    league: "echl",
    homeRink: "huntington-center",
    logo: tolLogo,
  },
  "tr-lions": {
    place: "Trois-Rivières",
    nickname: "Lions",
    abbreviation: "TR",
    league: "echl",
    homeRink: "colisee-videotron",
    logo: trLogo,
  },
  "tul-oilers": {
    place: "Tulsa",
    nickname: "Oilers",
    abbreviation: "TUL",
    league: "echl",
    homeRink: "bok-center",
    logo: tulLogo,
  },
  "uta-grizzlies": {
    place: "Utah",
    nickname: "Grizzlies",
    abbreviation: "UTA",
    league: "echl",
    homeRink: "maverik-center",
    logo: utaLogo,
  },
  "whl-nailers": {
    place: "Wheeling",
    nickname: "Nailers",
    abbreviation: "WHL",
    league: "echl",
    homeRink: "wesbanco-arena",
    logo: whlLogo,
  },
  "wic-thunder": {
    place: "Wichita",
    nickname: "Thunder",
    abbreviation: "WIC",
    league: "echl",
    homeRink: "intrust-bank-arena",
    logo: wicLogo,
  },
  "wor-railers": {
    place: "Worcester",
    nickname: "Railers",
    abbreviation: "WOR",
    league: "echl",
    homeRink: "dcu-center",
    logo: worLogo,
  },
} as const satisfies Record<string, Team & { league: "echl" }>;
