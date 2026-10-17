import { Event } from "./types";

import { belSenatorsEvents } from "./teams/bel-senators";
import { canWU19Events } from "./teams/can-w-u19";
import { cjhlWProspectsEvents } from "./teams/cjhl-w-prospects";
import { colEaglesEvents } from "./teams/col-eagles";
import { corBigRedEvents } from "./teams/cor-big-red";
import { flaEverbladesEvents } from "./teams/fla-everblades";
import { prKingsEvents } from "./teams/pr-kings";
import { sprThunderbirdsEvents } from "./teams/spr-thunderbirds";
import { utaGrizzliesEvents } from "./teams/uta-grizzlies";
import { watSiskinsEvents } from "./teams/wat-siskins";

export const eventsByTeam = [
  ...belSenatorsEvents,
  ...canWU19Events,
  ...cjhlWProspectsEvents,
  ...colEaglesEvents,
  ...corBigRedEvents,
  ...flaEverbladesEvents,
  ...prKingsEvents,
  ...sprThunderbirdsEvents,
  ...utaGrizzliesEvents,
  ...watSiskinsEvents,
];

export const events: Array<Event> = eventsByTeam;
