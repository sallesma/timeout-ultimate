import accepted from '../../assets/handSignals/accepted.png';
import contest from '../../assets/handSignals/contest.png';
import disc_down from '../../assets/handSignals/disc_down.png';
import disc_up from '../../assets/handSignals/disc_up.png';
import foul from '../../assets/handSignals/foul.png';
import gender_ratio_men from '../../assets/handSignals/gender_ratio_men.png';
import gender_ratio_women from '../../assets/handSignals/gender_ratio_women.png';
import goal from '../../assets/handSignals/goal.png';
import in_out from '../../assets/handSignals/in_out.png';
import marking_infraction from '../../assets/handSignals/marking_infraction.png';
import match_point from '../../assets/handSignals/match_point.png';
import offside from '../../assets/handSignals/offside.png';
import pick from '../../assets/handSignals/pick.png';
import play_has_stopped from '../../assets/handSignals/play_has_stopped.png';
import retracted from '../../assets/handSignals/retracted.png';
import spirit_stoppage from '../../assets/handSignals/spirit_stoppage.png';
import stoppage from '../../assets/handSignals/stoppage.png';
import timeOut from '../../assets/handSignals/time-out.png';
import timing_violation from '../../assets/handSignals/timing_violation.png';
import travel from '../../assets/handSignals/travel.png';
import turnover from '../../assets/handSignals/turnover.png';
import violation from '../../assets/handSignals/violation.png';
import who_made_the_call from '../../assets/handSignals/who_made_the_call.png';

import { Levels, Categories } from '../../src/utils/config';

export default [
  {
    image: foul,
    name: 'Faute',
    hint: "Un bras tendu, l'avant-bras de l'autre vient s'appuyer en travers",
  },
  {
    image: violation,
    name: 'Violation',
    hint: 'Les deux bras tendus forment un V. Les poings sont fermés.',
  },
  {
    image: goal,
    name: 'Point',
    hint: 'Les deux bras tendus vers le haut, paumes ouvertes',
  },
  {
    image: contest,
    name: 'Contesté',
    hint: "Les deux poings l'un contre l'autre devant la poitrine, paumes vers la poitrine",
  },
  {
    image: accepted,
    name: 'Accepté',
    hint: 'Les avant-bras étendus devant la poitrine, coudes contre le corps et paumes vers le haut',
  },
  {
    image: retracted,
    name: 'Rétracté',
    hint: "Les bras font un mouvement d'essuie-glace devant le corps, paumes vers le bas",
  },
  {
    image: in_out,
    name: 'In ou Out (Dedans ou Dehors)',
    hint: "Un bras tendu, paume ouverte, pouce parallèle aux doigts, vers la zone de jeu (in) ou l'extérieur (out)",
  },
  {
    image: disc_down,
    name: 'Disque Down (Disque au sol)',
    hint: "L'index pointé vers le sol à 45 degrés",
  },
  {
    image: disc_up,
    name: "Disque Up (Disque en l'air)",
    hint: "L'index pointé vers le ciel, coude contre la poitrine",
  },
  {
    image: pick,
    name: 'Pick (Obstruction)',
    hint: 'Les bras levés à angle droit, poings fermés, paumes du côté de la tête',
  },
  {
    image: travel,
    name: 'Travel (Marcher)',
    hint: "Poings fermés en rotation verticale l'un autour de l'autre",
  },
  {
    image: marking_infraction,
    name: 'Infraction de marque',
    hint: "Les bras étendus sur les côtés, paumes ouvertes vers l'avant",
  },
  {
    image: turnover,
    name: 'Turnover (Changement de possession)',
    hint: 'Le bras droit tendu devant le corps, la paume vers le ciel puis retournée vers le sol',
  },
  {
    image: timing_violation,
    name: 'Stall-Out (Fin du compte)',
    hint: 'La main, paume ouverte, vient taper sur la tête',
  },
  {
    image: offside,
    name: 'Hors-jeu',
    hint: 'Les bras croisés au dessus de la tête, poings fermés',
  },
  {
    image: timeOut,
    name: 'Time-out (Temps mort)',
    hint: 'Les 2 mains forment un T, ou 1 main et le disque',
  },
  {
    image: spirit_stoppage,
    name: 'Spirit stoppage',
    hint: 'Les mains forment un T inversé',
  },
  {
    image: stoppage,
    name: 'Stoppage (Interruption)',
    hint: 'Les mains se saisissent au dessus de la tête, bras pliés',
  },
  {
    image: gender_ratio_men,
    name: 'Ratio : hommes',
    hint: 'Les mains derrière la tête, coudes sur les côtés',
  },
  {
    image: gender_ratio_women,
    name: 'Ratio : femmes',
    hint: 'Les bras tendus sur les côtés, poings fermés',
  },
  {
    image: play_has_stopped,
    name: 'Le jeu est arrêté',
    hint: "Les bras tendus au dessus de la tête dans un mouvement d'essuie-glace",
  },
  {
    image: match_point,
    name: 'Match point (Universe)',
    hint: 'Les deux bras pointent en haut à gauche, paumes ouvertes',
  },
  {
    image: who_made_the_call,
    name: 'Qui a fait le call',
    hint: "Les deux bras tendus vers la end-zone défendue par l'équipe qui a fait le call",
  },
];
