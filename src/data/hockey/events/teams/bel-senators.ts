import type { Event } from "../types";

export const belSenatorsEvents = [
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "bri-islanders",
    seasons: ["2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "cle-monsters",
    seasons: ["2022-2023", "2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "gr-griffins",
    seasons: ["2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "hfd-wolf-pack",
    seasons: ["2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "lav-rocket",
    seasons: ["2022-2023", "2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "lv-phantoms",
    seasons: ["2022-2023"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "mb-moose",
    seasons: ["2022-2023", "2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "mil-admirals",
    seasons: ["2022-2023"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "roc-americans",
    seasons: ["2022-2023", "2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "rfd-icehogs",
    seasons: ["2022-2023"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "spr-thunderbirds",
    seasons: ["2022-2023"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "syr-crunch",
    seasons: ["2022-2023", "2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "tor-marlies",
    seasons: ["2022-2023", "2023-2024"],
  },
  {
    kind: "roadGame",
    team: "bel-senators",
    opponent: "utc-comets",
    seasons: ["2022-2023", "2023-2024"],
  },
] as const satisfies Array<Event & { team: "bel-senators" }>;
