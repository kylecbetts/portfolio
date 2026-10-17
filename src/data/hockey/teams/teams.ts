import { ahlTeams } from "./leagues/ahl";
import { bchlTeams } from "./leagues/bchl";
import { cjhlTeams } from "./leagues/cjhl";
import { echlTeams } from "./leagues/echl";
import { gojhlTeams } from "./leagues/gojhl";
import { ncaaTeams } from "./leagues/ncaa";
import { nhlTeams } from "./leagues/nhl";
import { wjacTeams } from "./leagues/wjac";
import { Team } from "./types";

export const teamsByLeague = {
  ...ahlTeams,
  ...bchlTeams,
  ...cjhlTeams,
  ...echlTeams,
  ...gojhlTeams,
  ...ncaaTeams,
  ...nhlTeams,
  ...wjacTeams,
};

export type TeamId = keyof typeof teamsByLeague;
export const teams: Record<TeamId, Team> = teamsByLeague;
