import type { Event } from "../types";

export const utaGrizzliesEvents = [
  {
    kind: "roadGame",
    team: "uta-grizzlies",
    opponent: "idh-steelheads",
    seasons: ["2022-2023"],
  },
  {
    kind: "neutral",
    name: "2023 Preseason Game",
    team: "uta-grizzlies",
    opponents: ["idh-steelheads"],
    rink: "mountain-american-center",
    seasons: ["2023-2024"],
  },
  {
    kind: "neutral",
    name: "2022 Preseason Game",
    team: "uta-grizzlies",
    opponents: ["idh-steelheads"],
    rink: "ogden-ice-sheet",
    seasons: ["2022-2023"],
  },
  {
    kind: "roadGame",
    team: "uta-grizzlies",
    opponent: "rc-rush",
    seasons: ["2021-2022"],
  },
  {
    kind: "roadGame",
    team: "uta-grizzlies",
    opponent: "tol-walleye",
    seasons: ["2021-2022"],
  },
  {
    kind: "roadGame",
    team: "uta-grizzlies",
    opponent: "tul-oilers",
    seasons: ["2021-2022"],
  },
] as const satisfies Array<Event & { team: "uta-grizzlies" }>;
