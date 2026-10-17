import { rinks } from "./rinks";

export type { Rink as HockeyRink } from "./types";
export { rinks as hockeyRinks };
export type HockeyRinkId = keyof typeof rinks;
