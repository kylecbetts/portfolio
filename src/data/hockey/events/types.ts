import type { HockeyRinkId } from "../rinks";
import type { HockeyTeamId } from "../teams";

type EventKind = "roadGame" | "neutral";

type EventBase = {
  kind: EventKind;
  team: HockeyTeamId;
  seasons: string[];
};

export type Event = EventBase &
  (
    | { kind: "roadGame"; opponent: HockeyTeamId }
    | {
        kind: "neutral";
        name?: string;
        rink: HockeyRinkId;
        opponents: [HockeyTeamId, ...HockeyTeamId[]];
      }
  );
