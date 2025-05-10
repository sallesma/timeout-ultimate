import accepted from '../../../assets/handSignals/accepted.png';
import contest from '../../../assets/handSignals/contest.png';
import disc_down from '../../../assets/handSignals/disc_down.png';
import disc_up from '../../../assets/handSignals/disc_up.png';
import foul from '../../../assets/handSignals/foul.png';
import gender_ratio_men from '../../../assets/handSignals/gender_ratio_men.png';
import gender_ratio_women from '../../../assets/handSignals/gender_ratio_women.png';
import goal from '../../../assets/handSignals/goal.png';
import in_out from '../../../assets/handSignals/in_out.png';
import marking_infraction from '../../../assets/handSignals/marking_infraction.png';
import match_point from '../../../assets/handSignals/match_point.png';
import offside from '../../../assets/handSignals/offside.png';
import pick from '../../../assets/handSignals/pick.png';
import play_has_stopped from '../../../assets/handSignals/play_has_stopped.png';
import retracted from '../../../assets/handSignals/retracted.png';
import spirit_stoppage from '../../../assets/handSignals/spirit_stoppage.png';
import stoppage from '../../../assets/handSignals/stoppage.png';
import timeOut from '../../../assets/handSignals/time-out.png';
import timing_violation from '../../../assets/handSignals/timing_violation.png';
import travel from '../../../assets/handSignals/travel.png';
import turnover from '../../../assets/handSignals/turnover.png';
import violation from '../../../assets/handSignals/violation.png';
import who_made_the_call from '../../../assets/handSignals/who_made_the_call.png';
import did_not_affect from '../../../assets/handSignals/did_not_affect.png';

import { Levels, Categories } from '../../../src/utils/config';

export default [
  {
    image: foul,
    name: 'Foul',
    hint: 'Hold one arm straight out and chop the other forearm across the straight arm',
  },
  {
    image: violation,
    name: 'Violation',
    hint: 'Hands above head forming a V, closed fists',
  },
  {
    image: goal,
    name: 'Point',
    hint: 'Raise both arms, fully extended, straight up, palms facing inwards',
  },
  {
    image: contest,
    name: 'Contested',
    hint: 'Two fists bumped together in front of chest, back of hands facing outward',
  },
  {
    image: accepted,
    name: 'Accepted',
    hint: 'Forearms extended in front of body, elbows tight against torso with palms facing upwards',
  },
  {
    image: retracted,
    name: 'Rétracted',
    hint: 'Sweeping crossover motion with both arms extended down in front of body',
  },
  {
    image: in_out,
    name: 'In or Out',
    hint: 'Point with one arm extended, flat palm, thumb parallel to fingers, towards playing field (in) or away from playing field (out)',
  },
  {
    image: disc_down,
    name: 'Disc down',
    hint: 'Index finger straight arm pointing down at 45 degree',
  },
  {
    image: disc_up,
    name: 'Disc up',
    hint: 'Elbow down forearm vertical index finger pointing upward',
  },
  {
    image: pick,
    name: 'Pick',
    hint: 'Arms raised, elbows bent, fists facing head',
  },
  {
    image: travel,
    name: 'Travel',
    hint: 'Closed fists, rotate wrists around in a vertical circle',
  },
  {
    image: marking_infraction,
    name: 'Marking Infraction',
    hint: 'Arms extended to side, palms facing front',
  },
  {
    image: turnover,
    name: 'Turnover',
    hint: 'Right arm extended in front of body, palm facing up and then rotate to palm facing down',
  },
  {
    image: timing_violation,
    name: 'Stall-Out',
    hint: 'Tap head with open hand',
  },
  {
    image: offside,
    name: 'Offside / False start',
    hint: 'Arms crossed overhead in an X, hands closed in a fist',
  },
  {
    image: timeOut,
    name: 'Time-out',
    hint: 'Form a T with the hands, or a hand and the disc',
  },
  {
    image: spirit_stoppage,
    name: 'Spirit stoppage',
    hint: 'Upside down T formed by the hands',
  },
  {
    image: stoppage,
    name: 'Stoppage',
    hint: 'Hands clasped and raised above head, arms bent',
  },
  {
    image: gender_ratio_men,
    name: 'Ratio : male matching players',
    hint: 'Hands cupped behind head, elbows out to side',
  },
  {
    image: gender_ratio_women,
    name: 'Ratio : female matching players',
    hint: 'Arms extended to side, hands closed in a fist',
  },
  {
    image: play_has_stopped,
    name: 'Play has stopped',
    hint: 'Wave both extended arms crosswise overhead',
  },
  {
    image: who_made_the_call,
    name: 'Who made the call',
    hint: 'Pointing with two arms straight out, towards the end zone being defended by the team',
  },
  {
    image: did_not_affect,
    name: 'Did not affect the play',
    hint: 'Open hand held above head and sweeping forward and back',
  },
  {
    image: match_point,
    name: 'Match point (Universe)',
    hint: 'Both arms pointing straight up to the left, palms facing down',
  },
];
