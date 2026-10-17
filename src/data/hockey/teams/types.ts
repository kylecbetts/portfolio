import type { StaticImageData } from "next/image";
import type { HockeyLeagueId } from "../leagues";
import { HockeyRinkId } from "../rinks";

export type Team = {
  place: string;
  nickname: string;
  abbreviation: string;
  league: HockeyLeagueId;
  homeRink?: HockeyRinkId;
  logo: StaticImageData;
};
