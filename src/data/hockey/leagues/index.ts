import { leagues } from "./leagues";

export type { Level as HockeyLevel } from "./types";
export { leagues as hockeyLeagues };
export type HockeyLeagueId = keyof typeof leagues;
