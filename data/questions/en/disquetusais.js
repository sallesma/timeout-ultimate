import { Levels, Categories } from '../../../src/utils/config';
// TODO finish the translation of all of these to english that makes sense
// TODO use the id to not repeat questions previously gotten correct
export default [
  {
    id: 18,
    category: Categories.SPIRIT,
    question:
      'To the extent that I find that my opponents make too many contentious calls (walkers, for example), I do the same to be on an even playing field. I am in the spirit of ultimate.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« Players must be mindful that they have a refereeing role in all inter-team officiating situations. Players must:
 - know the rules;
 - be impartial and objective;
 - tell the truth;
 - make calls in a consistent manner throughout a game,
 - and make a foul call only if an infraction is significant enough to change the outcome of an action.'
   »
    `,
    rules: ['1.3.', '1.3.1.', '1.3.2.', '1.3.3.', '1.3.9.', '1.3.10.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 19,
    category: Categories.SPIRIT,
    question: 'I can celebrate a point in any way I want.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: "I don't have to be disrespectful at this point.",
    rules: ['1.6.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 20,
    category: Categories.SPIRIT,
    question: "I can be smart and call a pass to an opponent. It's up to him to be careful who he gives the disc to.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: "It's against the spirit of the game.",
    rules: ['1.6.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 21,
    category: Categories.SPIRIT,
    question:
      "Annoyed by an opponent's successive fouls against me, I refuse to talk to him and check him at the end of the match. Is this the right attitude?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« Players need to:
- give opponents the opportunity to speak
- resolve disputes as quickly as possible using respectful language
- react calmly to disagreements and provocations

'High competition is encouraged but never at the expense of mutual respect between players, adherence to the rules of the game or simple enjoyment of the game.»
    `,
    rules: ['1.4.', '1.3.5.', '1.3.8.', '1.5.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 22,
    category: Categories.SPIRIT,
    question:
      "I am on the field, close to the action. Although I saw that my teammate's call was wrong or unnecessary, I must not say anything until I am asked what I saw.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'The spirit of the game is to tell your partners if they are wrong, if they have caused a foul or a violation when I am on the field and close to the action.',
    rules: ['1.10.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 23,
    category: Categories.SPIRIT,
    question: 'If I know the rules better than a beginner, am I required to explain and enforce them?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: `
« In the event that a novice player transgresses the rules through ignorance of the rules, experienced players are required to explain the transgression.

'An experienced player, who offers advice on the rules and guides the refereeing on the field, may supervise matches with beginners or young players.»
    `,
    rules: ['1.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 24,
    category: Categories.SPIRIT,
    question: 'Although I am not on the field (on the side line), I can call a foul and/or intervene on a call.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "'Rules must be interpreted by the players directly involved in the game action or by players who have had the best perspective on the action. False-players, regardless of the captain, should refrain from intervening. However, players may take the advice of non-players to clarify the rules and assist players in making the appropriate call.",
    rules: ['1.10.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 25,
    category: Categories.FIELD,
    question: 'An attacker catches the disc with one foot on the sideline.',
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: 'Not a turnover',
    },
    correctAnswers: ['a'],
    explanation: 'The line is not part of the field. The player is therefore outside the boundaries of the field.',
    rules: ['2.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 26,
    category: Categories.FIELD,
    question:
      'An attacker catches the disc in the air. Upon landing, her feet touch the ground at the same time with one foot on the end line and the other in the attacked area.',
    image: undefined,
    answerChoices: {
      a: 'There is a point',
      b: 'There is no point',
    },
    correctAnswers: ['b'],
    explanation: 'For the point to be validated, the first press(es) must be in the zone only.',
    rules: ['14.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 27,
    category: Categories.FIELD,
    question:
      "A player catches the disc in the air. Upon landing, his feet touch the ground at the same time with one foot in the playing area and the other outside. 'Turnover or not?",
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: 'Not a turnover',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['11.4.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 28,
    category: Categories.FIELD,
    question:
      'An attacker catches the disc in the air. Upon landing, his right foot lands first in the center field. His momentum carries him out of the field.',
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: 'Not a turnover',
    },
    correctAnswers: ['b'],
    explanation: 'At the moment of his landing his first point of contact is in the field.',
    rules: ['11.3.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 29,
    category: Categories.FIELD,
    question:
      'An attacker catches the disc in the air. Upon landing, his right foot lands first on the end line and then his left foot in the attacked area.',
    image: undefined,
    answerChoices: {
      a: 'It is a point',
      b: 'It is not a point',
    },
    correctAnswers: ['b'],
    explanation: 'The first contact was not in the end zone so it is not a point.',
    rules: ['11.4.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 30,
    category: Categories.FIELD,
    question:
      'My teammate has the disc along the sideline. People 2 meters away from the field are preventing her from passing.',
    image: undefined,
    answerChoices: {
      a: 'Too bad, we have to deal with the situation',
      b: 'The player may call a violation',
      c: 'I can call a violation',
    },
    correctAnswers: ['b'],
    explanation:
      "Any player who is impeded may call a 'violation' because no obstacle may be located within 3 meters of the playing area.",
    rules: ['2.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 31,
    category: Categories.FIELD,
    question:
      "I'm handed a pass near the sideline. As I was about to catch the disc, I was obstructed by a non-player standing 50 cm from the field.",
    image: undefined,
    answerChoices: {
      a: 'Too bad, we have to deal with the situation',
      b: 'I can call a violation',
    },
    correctAnswers: ['b'],
    explanation:
      "Any player who is impeded may call a 'violation' because no obstacle may be located within 3 meters of the playing area.",
    rules: ['2.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 32,
    category: Categories.FIELD,
    question:
      'A defender catches the disc in the air. On the catch, his right foot lands first on the sideline. His momentum carries him off the field.',
    image: undefined,
    answerChoices: {
      a: 'The defender recovers the disc and his team goes on offense',
      b: 'The defender is out of the field so he must give the disc back to the attacker',
      c: 'The disc returns to the thrower',
    },
    correctAnswers: ['a'],
    explanation:
      "As long as he has made the attackers' pass fail, the defender gets the disc back (even if he is out of the field).",
    rules: ['11.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 33,
    category: Categories.PULL,
    question: 'After a point is scored, how long do teams have to set up?',
    image: undefined,
    answerChoices: {
      a: '45 secondes',
      b: '60 seconds',
      c: '45 seconds for attack, 60 seconds for defense',
    },
    correctAnswers: ['c'],
    explanation:
      'These durations are mentioned in the appendix of rules A5.4.1 (https://rules.wfdf.org/documents/wfdf-rules-of-ultimate-2021-2024-appendix-v2-0/download)',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    id: 34,
    category: Categories.PULL,
    question:
      'If a defender not carrying the disc and an attacker raise their arms, can the player with the disc make the snap?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: "It must be the player who launches the 'pull' and at least one attacker",
    rules: ['7.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 35,
    category: Categories.PULL,
    question:
      'After the puller has raised his arm, at least two attackers must raise their arms in order to make the engagement?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'One offensive player is enough.',
    rules: ['7.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 36,
    category: Categories.PULL,
    question:
      'Attackers may place themselves anywhere in their zone before the defender makes the commitment, as long as they are stationary?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'They must all have one foot on the line and be stationary.',
    rules: ['7.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 37,
    category: Categories.PULL,
    question: 'When the puller releases the disc, where should his partners be?',
    image: undefined,
    answerChoices: {
      a: 'Behind him',
      b: 'In their end zone',
    },
    correctAnswers: ['b'],
    explanation: 'Players may not leave their end zone until the disc is released.',
    rules: ['7.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 38,
    category: Categories.PULL,
    question: 'An offside is :',
    image: undefined,
    answerChoices: {
      a: 'A violation',
      b: 'A foul',
      c: 'A violation',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['7.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    id: 39,
    category: Categories.PULL,
    question: 'I can call an offside even if the disc has touched the ground',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'An offside must be called before the offense touches the disc',
    rules: ['7.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 40,
    category: Categories.PULL,
    question:
      'During the engagement, the force of the wind blows the disc back to the puller. Before the disc hits the ground, and before the attackers can touch it, it catches the disc. Is this allowed?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "No player on the defensive team may touch the disc after the 'pull' until a member of the attacking team touches the disc or the disc touches the ground.",
    rules: ['7.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 41,
    category: Categories.PULL,
    question:
      'On the snap, the force of the wind blows the disc back to my end zone. Before the disc hits the ground, and before the attackers can touch it, I drop the disc so that the attackers do not gain too much ground. Is this allowed?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'No player of the defensive team may touch the disc after the pull until a member of the attacking team touches the disc or the disc touches the ground.',
    rules: ['7.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 42,
    category: Categories.PULL,
    question:
      'My opponent engages. The disc hits the field and rolls into my zone. I can stop the disc, but only with my hand, to prevent it from getting too close to my zone.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'I can do it with any part of my body.',
    rules: ['8.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 43,
    category: Categories.PULL,
    question:
      'After the pull, the disc stops in the field. I can wait for my classmates to position themselves correctly before picking up the disc.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'I have 20 seconds to play the disc. This time limit and special cases are mentioned in the appendix of the rules A5.8.2 (https://rules.wfdf.org/documents/wfdf-rules-of-ultimate-2021-2024-appendix-v2-0/download)',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  //   {
  //     category: Categories.PULL,
  //     question: "Un attaquant prend son temps pour récupérer le disque. Que puis-je appeler ?",
  //     answerChoices: {
  //         a: "Vrai",
  //         b: "Faux",
  //     },
  //     correctAnswers: [''],
  //     explanation: "",
  //     rules: undefined,
  //     source: "Disque Tu Sais - Pablo",
  //   },
  {
    id: 45,
    category: Categories.PULL,
    question: 'On the snap, an attacker deliberately drops the disc to the ground to gain ground.',
    image: undefined,
    answerChoices: {
      a: 'It is a turnover',
      b: 'The game continues',
      c: 'The commitment must be restarted',
    },
    correctAnswers: ['a'],
    explanation:
      "Even if the defenders realize that she did not intend to stop it, from the moment she touches it, she must catch it. This is a change of possession ('turnover').",
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 46,
    category: Categories.PULL,
    question:
      'On the snap, an attacker tries to catch the disc in the field before it hits the ground. He touches the disc but misses his catch. What happens?',
    image: undefined,
    answerChoices: {
      a: 'It is a turnover',
      b: 'The game continues',
      c: 'The commitment must be restarted',
    },
    correctAnswers: ['a'],
    explanation: 'If an attacker touches the disc before it hits the ground, it is a turnover',
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 47,
    category: Categories.PULL,
    question:
      'On the snap, an attacker tries to catch the disc in the field before it hits the ground. He misses his catch without touching the disc. What happens?',
    image: undefined,
    answerChoices: {
      a: 'It is a turnover',
      b: 'The game continues',
      c: 'The commitment must be restarted',
    },
    correctAnswers: ['b'],
    explanation: `
During the pull, the disc can touch the ground without causing turnover.
For this, no attacker must have touched it.
`,
    rules: ['7.11.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 48,
    category: Categories.PULL,
    question:
      'On the snap, the force of the wind blows the disc back to my end zone. After the disc hits the ground, and before the attackers touch it, I stop the disc as it rolls toward my end zone so that the attackers do not gain too much ground. Is this allowed?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['8.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 49,
    category: Categories.PULL,
    question:
      'On the snap, an attacker tries to catch the disc out of bounds before it hits the ground. She touches the disc but misses her catch. What happens?',
    image: undefined,
    answerChoices: {
      a: 'This is a turnover and play resumes where the disc left the field',
      b: 'This is a turnover and play resumes in the field at the point closest to the dropped disc',
      c: 'This is not a turnover, the player can pick up the disc and resume play where the disc left the field',
      d: 'We need to redo the commitment',
    },
    correctAnswers: ['b'],
    explanation: 'Play resumes at the point closest to where the disc was touched, in the center zone.',
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    id: 50,
    category: Categories.PULL,
    question: "Who can call the 'brick'?",
    image: undefined,
    answerChoices: {
      a: 'All offensive players',
      b: 'The attacker who recovers the disc on the snap',
      c: 'Le puller',
      d: 'All advocates',
    },
    correctAnswers: ['a'],
    explanation:
      "'The engaging option of 'brick' must be signaled by any attacker by raising an arm above their head and calling 'brick' before the disc is picked up.'",
    rules: ['7.12.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 51,
    category: Categories.PULL,
    question:
      "So that my opponents understand that I will start again at the 'brick', I only have to raise an arm above my head?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: "I also have to call 'brick' (before picking up the disc)",
    rules: ['7.12.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 52,
    category: Categories.PULL,
    question: "Can I call the 'brick' only when I have the disk in hand?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'I have to do it before I pick it up.',
    rules: ['7.12.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 53,
    category: Categories.STATUS,
    question: "When is the record said to be 'dead'? (several answers possible)",
    image: undefined,
    answerChoices: {
      a: 'After the start of a point, until the pull is completed',
      b: 'After the pull or after a turnover when the disc must be brought to the point where the pivot point is to be established, until a pivot is established',
      c: 'After a call that stops play or any other stop until the disc is checked',
      d: 'After the disc touches the ground until possession is established by the appropriate team.',
    },
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: '',
    rules: ['8.1.', '8.1.1.', '8.1.2.', '8.1.3.', '8.1.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 54,
    category: Categories.COUNT,
    question: "The marker starts the count by saying '1' and then '2', etc.",
    image: undefined,
    answerChoices: {
      a: 'No problem',
      b: 'He is wrong about the account',
    },
    correctAnswers: ['b'],
    explanation: "He should always start by saying 'Counted' or 'Stalling'",
    rules: ['9.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 55,
    category: Categories.COUNT,
    question: "The time interval between 'counted' and '1' must be one second.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'This interval can be smaller. It is the interval between the numbers in the count that must be at least one second.',
    rules: ['9.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 56,
    category: Categories.COUNT,
    question: 'When counting, the time interval between each number is at least one second ?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['9.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    id: 57,
    category: Categories.COUNT,
    question: " I don't have to say 'ten' at the end of the count. Can I replace it with 'stall-out'?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
«  have to say '10' and then 'end of count' or 'stall-out' (some people say 'time' out of habit).
If at the D of 'ten' (or T of 'ten'), the thrower had the disc in hand and even if he attempts the pass, it is a 'stall-out.
   »
    `,
    rules: ['13.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  // {
  // id: 58,
  //   category: Categories.COUNT,
  //   question: " A quel moment puis je appeler un « stall-out » (« fin du compte ») ?",
  //   answerChoices: {
  //       a: "Vrai",
  //       b: "Faux",
  //   },
  //   correctAnswers: [''],
  //   explanation: "",
  //   source: "Disque Tu Sais - Pablo",
  // },
  {
    id: 59,
    category: Categories.COUNT,
    question: "Can I dispute a stall-out if I haven't heard the count?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'The defender must count out loud so that he/she can be heard by the thrower.',
    rules: ['9.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  //   {
  // id: 60,
  //     category: Categories.COUNT,
  //     question: "Quand suis-je autorisé à commencer le compte ?",
  //     answerChoices: {
  //         a: "Vrai",
  //         b: "Faux",
  //     },
  //     correctAnswers: [''],
  //     explanation: "",
  // rules: undefined,
  // source: "Disque Tu Sais - Pablo",
  //   },
  {
    id: 61,
    category: Categories.COUNT,
    question:
      "I am the defender at the mark. I'm at 5 on the count and get more than 10 feet away from the thrower. What should I do if I come back within 3 meters and am still on the mark?",
    image: undefined,
    answerChoices: {
      a: 'I take back the count at 1',
      b: 'I take back the count to 5',
      c: 'I take the count back to 6',
    },
    correctAnswers: ['a'],
    explanation: "It's a new mark, I have to take the count back to 1. Same if someone else replaces me at the mark.",
    rules: ['9.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 62,
    category: Categories.COUNT,
    question: ' After the offense calls a foul, the defense does not contest. How much does the count start again?',
    image: undefined,
    answerChoices: {
      a: "At 'count 1",
      b: 'Where it was',
      c: 'Where it was + 1',
      d: 'Where he was - 2',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['9.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    id: 63,
    category: Categories.COUNT,
    question: 'After a defense appeal, the offense does not contest. The count resumes at the maximum?',
    image: undefined,
    answerChoices: {
      a: "At 'count 8",
      b: "At 'count 7",
      c: "At 'count 9",
      d: 'Where it was',
    },
    correctAnswers: ['c'],
    explanation:
      "The count cannot resume at more than 9 on a transgression called by the defense and accepted by the offense. Attention, this does not concern the 'pick' (resumption at 6 maximum).",
    rules: ['9.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 64,
    category: Categories.COUNT,
    question: "'Stall-out' is called by the scorekeeper. The thrower contests. At what point does the count resume?",
    image: undefined,
    answerChoices: {
      a: "At 'count 6",
      b: "At 'count 7",
      c: "At 'count 8",
      d: "At 'count 9",
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['9.5.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 65,
    category: Categories.COUNT,
    question: "A contested foul (defensive or offensive) or 'pick' is called at 4. The count resumes at 'count 5'.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: `
« hen the count (x) is less than 5, we take the count (x) from where it was by adding 1. So 'counted' x 'plus 1'
If the count was equal to or greater than 5, we start again at 'counted 6' (this is the maximu»
    `,
    rules: ['9.6.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    id: 66,
    category: Categories.COUNT,
    question: "A 'pick' is called at 7. What is the count?",
    image: undefined,
    answerChoices: {
      a: "At 'count 5",
      b: "At 'count 6",
      c: "At 'count 7",
    },
    correctAnswers: ['b'],
    explanation: `
« Then the count (x) is less than 5, we take the count (x) from where it was by adding 1. So 'counted' x 'plus 1'
If the count was equal to or greater than 5, we start again at 'counted 6' (this is the maximum)»
    `,
    rules: ['9.6.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'There is a call before a pass is thrown. Some players did not hear the call and continued to play until they were warned. With the game dead, where do they stand?',
    image: undefined,
    answerChoices: {
      a: 'Where they were at the time of the call',
      b: 'Where they left off',
      c: 'The call is cancelled because the players did not hear it',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['10.2.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question: 'Play stops after a pass is completed. The disc is returned to the thrower. Where do the players go?',
    image: undefined,
    answerChoices: {
      a: 'Where they were at the time of the call',
      b: 'Where they were at the time of the pass',
      c: 'On the first of the two events (the pass or the call)',
      d: 'At the last of the two events (the pass or the call)',
    },
    correctAnswers: ['c'],
    explanation:
      'They must return to where they were when the disc was released or at the time of the call, cin boundsring which event came first',
    rules: ['10.2.2.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CHECK,
    question:
      'Play stops after a pass has been made. The result of the action is maintained. Where do the players stand?',
    image: undefined,
    answerChoices: {
      a: 'Where they were when the game stopped',
      b: 'Where they were when the pass was thrown',
      c: 'Where they were when the pass arrived',
    },
    correctAnswers: ['c'],
    explanation: 'They must return to where they were when the disc was caught or when the disc hit the ground',
    rules: ['10.2.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CHECK,
    question:
      "The game died on a call. I moved back to the right spot, unlike other players who are still walking or not where they should be. Regardless, the marker 'checks' the disc.",
    image: undefined,
    answerChoices: {
      a: 'Too bad, the check took place so the game must resume',
      b: 'I can call a violation if I am an attacker',
      c: 'I can call a violation if I am a defender',
    },
    correctAnswers: ['b', 'c'],
    explanation:
      "All players can call 'violation'. Then everyone stands correctly, stops and waits for the check to move.",
    rules: ['10.7.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      "The game died on a call. I put myself back in the right place. I can 'check' the disc as soon as I get back to my seat.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "I 'check' the disc after checking with the nearest opponent to make sure all players have moved properly and are stationary.",
    rules: ['10.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  //   {
  //     category: Categories.CHECK,
  //     question: "Mon adversaire prend trop de temps pour checker le disque. Que puis-je faire ?",
  //     answerChoices: {
  //       a: "Vrai",
  //       b: "Faux",
  //     },
  //     correctAnswers: [''],
  //     explanation: "",
  // rules: undefined,
  // source: "Disque Tu Sais - Pablo",
  //   },
  {
    category: Categories.CHECK,
    question:
      "The game is dead and all players are placed correctly. I have the disc and my marker is 1 meter away from me. Can I 'check' the disc on the ground and call 'disc in' to restart the game?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: "If the disc is within reach of a defender, the defender must 'check' the disc to resume play.",
    rules: ['10.6.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      "The game is dead and all players are positioned correctly. I have the disc and my closest opponent is 5 meters away from me. To restart the game the nearest opponent must touch the ground and call 'disc in' to restart the game?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "If the disc is not within reach of a defender, it is up to the disc holder to check the ground and call 'disc in' to resume play.",
    rules: ['10.6.1.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'The play is dead and all players are correctly positioned. The disc is on the ground and within reach of any player. How do you restart the game?',
    image: undefined,
    answerChoices: {
      a: 'The closest player goes to the disc to make the check',
      b: "Closest defender calls 'disc in",
      c: 'The nearest defender makes a check on the ground',
      d: 'The nearest attacker checks the ground',
    },
    correctAnswers: ['b'],
    explanation: 'Sometimes players check the floor at the same time (not notified in the rules).',
    rules: ['10.6.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      "I attempt a pass before the 'check' or after a placement violation has been called. It is not caught. What happens?",
    image: undefined,
    answerChoices: {
      a: 'The result of the pass is kept',
      b: 'The result of the pass holds if it is missed',
      c: 'The disc returns to the thrower regardless of the outcome of the pass',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['10.7.', '10.7.1.', '10.7.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question: ' I pick up the disc after a turnover. Before I pass I have to check the disc?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'Play is not stopped on a turnover. Therefore, there is no check on the ground, nor is there a check from the opponent.',
    rules: ['10.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question: 'I stand on the brick point. Before making a pass I have to wait for my opponent to check the disc',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'The brick is not a situation that requires a check. As soon as my pivot foot is established on the brig, I can throw. Rule 7.5.2 also confirms this.',
    rules: ['10.1.', '7.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Turnover in my end zone. I pick up the disc and move out of my zone. I must check the disc on the ground before my pass.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'I can make my pass, without a check, either from where I picked up the disc or at the entrance to my zone (pivot foot outside the zone). The rules (10.1) also specify this case.',
    rules: ['10.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      "Turnover for my team in the opponent's end zone. I pick up the disc, and walk out of their zone. I must check the disc on the ground before my pass.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'I can make my pass, without checking. Once out of the zone, I can make my pass without checking. The rules (10.1) also specify this case.',
    rules: ['10.1.', '13.10.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      "I am in the opponent's zone, about to catch my partner's pass. Making contact, I call a foul. My opponent does not contest. I have to pick up the disc, stand in front of their zone and wait for the check to play.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "the play is dead at the time of the call. The defender must check the disc in the zone and call 'disc in' so that all players can move. Then I can go to the front of the zone and play.",
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.OUT,
    question: 'Perimeter lines are part of the field.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'They are outside the game.',
    rules: ['2.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      'A defender goes out of bounds to catch the disc or prevent it from coming back into the playing area. What happens?',
    image: undefined,
    answerChoices: {
      a: 'There is no turnover because the defender is not in the field',
      b: 'There is a turnover and play resumes where the disc left the field',
      c: 'There is a turnover and play resumes at the point closest to where the disc stopped',
      d: 'There is a turnover and play resumes at the point closest to where the disc was touched by the defender',
    },
    correctAnswers: ['d'],
    explanation:
      "There is a 'turnover' and play resumes in the middle zone at the point closest to where the defender touched/intercepted the disc. Only defenders are cin boundsred 'in the play area' when they are outside.",
    rules: ['11.2.', '11.8.', '11.8.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question:
      "An attacker takes her call outside the field, catches the disc with her feet off the ground and lands in the opponent's end zone. Is the point validated?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'By taking her call outside the field, the player is out of bounds at the time of the catch.',
    rules: ['11.3.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      "In completing the pass, the thrower puts one foot out of bounds. Even if the pass is successful, the disc returns to the marker who had called 'out of bounds'.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'As long as his pivot foot is in the field, the thrower is cin boundsred to be in the playing area.',
    rules: ['18.2.1.', '11.3.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      'After catching the disc in the field, the attacker leaves the field. The opposing team recovers the disc.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'She keeps the disc and establishes her pivot in the playing area at the point closest to where she exited',
    rules: ['11.3.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      'An attacker fetches the disc outside the playing area. He establishes his pivot on the sideline and makes a decisive pass. Is his pivot point valid?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: `
« The pivot foot must be placed in the field of play and the lines are not part of it.
However, the rules (13.11) state that since the lines are very narrow and the effect on play negligible, it is acceptable to place the pivot foot on the line.»
    `,
    rules: ['13.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question:
      'The disc rolls out of play and back into the field. The attacker plays it from where it stopped. What can I call?',
    image: undefined,
    answerChoices: {
      a: 'A violation',
      b: 'A violation',
      c: 'A foul',
      d: 'Nothing, the game has already resumed',
    },
    correctAnswers: ['b'],
    explanation:
      'The attacker must establish her pivot in the playing area at the point closest to where the disc went out. This is a travel infraction',
    rules: ['13.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question: 'Two attackers catch the disc simultaneously. One of them is out of bounds. What happens?',
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: 'The attacker in play recovers possession',
      c: 'The disc is returned to the thrower',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['11.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question:
      'The disc comes out 5 meters from the field. A non-player picks it up and passes to me while I am in the field. I place my pivot foot in the right place and make a decisive pass. The point is valid.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'The thrower must carry the disc the last three meters to the playing area. This is a violation.',
    rules: ['11.9.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question:
      'At the commitment, I notice that an attacker has moved out of his zone before the throw. Can I call something?',
    image: undefined,
    answerChoices: {
      a: 'False',
      b: 'True, travel',
      c: 'True, offside',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['7.3.', '7.5.', '7.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      'At the snap, a partner on the side line warns me that the thrower had one foot on the line and another attacker had one foot out of their zone at the time of the throw. Can I call something?',
    image: undefined,
    answerChoices: {
      a: 'No, there is no violation of the rules',
      b: 'No, because it was a player off the field who warned me',
      c: 'Yes, it is an offside',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['7.4.', '7.5.', '7.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.RECEIVER,
    question:
      'I catch the disc while diving. The contact with the ground makes me lose the disc. Since I had mastered the disc before I lost it, I keep it.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'Loss of the disc due to contact with the ground or with a teammate or a legitimately placed opponent results in a change of possession (turnover)',
    rules: ['12.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question:
      "I'm on offense and I jump to catch the disc. I'm over the field of play when I catch it and land off the field. It's a turnover.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: '11.4.2.',
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.RECEIVER,
    question:
      'By the time I catch the disc, I have one foot in the field and one foot out (simultaneously). A defender calls out. Is he right?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: "Even if one foot is in the field, I'm cin boundsred off-limits. It's a turnover.",
    rules: ['11.4.', '11.4.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.RECEIVER,
    question:
      "When I catch the disc, I have one foot on the opponent's end line and the other in the attacked zone. Is the point valid?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'Since the end line is not part of the zone, the attacker is still cin boundsred to be in the central playing area, despite his other support.',
    rules: ['14.1.', '14.1.1.', '2.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question: 'An attacker and a defender catch the disc simultaneously. How is this situation resolved?',
    image: undefined,
    answerChoices: {
      a: 'The attacker keeps the disc',
      b: 'Defender keeps the disc',
      c: 'The disc is returned to the thrower',
    },
    correctAnswers: ['a'],
    explanation:
      'Priority to the attacker who retains the disc. Without a call from either player, there is no stoppage of play.',
    rules: ['12.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.RECEIVER,
    question:
      "The disc hovers. My opponent keeps getting between me and the disc only to prevent me from catching it. He has the right as long as he doesn't touch me. He protects his disc.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "When the disc is in the air, a player may not move in such a way as to only prevent an opponent from taking an unoccupied path to the disc. He is obstructing the opponent's movement. This is a violation.",
    rules: ['12.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question:
      'I catch the disc and hit my opponent. There is no foul because I caught the disc before I hit my opponent.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'Making a play on the disc is not a valid excuse for making contact with other players.',
    rules: ['12.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question:
      'When I was replacing my arm in the stack, my opponent touched me with his arm. I call a foul and my opponent contests. He is wrong.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'My opponent causes minor contact, having no impact on the game. So he was right to contest because I should not have called the foul.',
    rules: ['12.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.RECEIVER,
    question:
      'When I get back into the stack, my opponent trips me. I call a foul and my opponent contests. He is wrong.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'A trip that knocks me down is not minor contact, so I can call an indirect foul.',
    rules: ['17.8.1.', '17.8.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.RECEIVER,
    question: "To catch a discus, I lean on a partner's shoulder. Is this allowed?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'No player may physically assist the movement of another player, or use equipment to facilitate contact with the disc.',
    rules: ['12.10.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "My teammate passes to me. The disc touches some grass, but is caught before touching dirt. A defender calls down. I contest because the disc didn't really hit the ground. Who is right?",
    image: undefined,
    answerChoices: {
      a: 'Me, the disc is up',
      b: 'The defender, the disc is down. Grass is part of the ground',
    },
    correctAnswers: ['b'],
    explanation:
      '"Ground: The ground consists of all substantial solid objects, including grass, marker cones, equipment, water, trees, fences, walls and non-players, but excluding all players and their worn clothing, airborne particles and precipitation." If the disc touches the grass or a flower before it is caught, it is down. There is a change of possession (turnover). See in the rules the lexicon and the definition of ground',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'While attempting to intercept the opposing pass, the defender drops the disc (which falls to the ground). He does not regain possession of the disc.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'As soon as a pass has failed (within the rules) the opposing team regains possession of the disc.',
    rules: ['13.1.', '13.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "I am on defense. I intentionally move the disc out of play to defeat my opponent's pass. My team regains possession of the disc.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'Since the opponents have not completed their pass, there is a turnover.',
    rules: ['13.1.', '13.1.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "On the landing of the pull, I unintentionally hit the disc before it hits the ground. The disc falls to the ground. There is no turnover because I didn't want to catch it.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "It's a dropped pull, so there is turnover. If I hit the disc I have to catch it, otherwise there is a turnover at the point where the disc stops.",
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'I attempt to catch the pull outside the playing area. I drop the disc. A defender calls a turnover. I disagree because I was out of bounds and just wanted to buy time to play the disc at the brig point. Who is right?',
    image: undefined,
    answerChoices: {
      a: 'Me, there is no turnover',
      b: 'The defender is a turnover',
    },
    correctAnswers: ['b'],
    explanation:
      "The disc is still alive even if it's flying off the field. If I catch it, I play it into the field at the point closest to where I caught it.",
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.TURNOVERS,
    question: "While trying to catch my partner's pass, I foul my defender. I do not contest. What happens?",
    image: undefined,
    answerChoices: {
      a: 'The disc is returned to the thrower',
      b: "It's a turnover and my defender gets the disc",
      c: "It's a turnover and any defender can take the disc",
    },
    correctAnswers: ['b'],
    explanation:
      'My defender retrieves the disc. When a foul is called, play stops. On an uncalled offensive foul, the defender who incurred the foul must recover the disc.',
    rules: ['13.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'An attacker catches the disc by colliding with his defender. The defender calls a foul which is not contested. Since the disc was caught, there is no turnover and the disc returns to the thrower.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'On an uncontested offensive foul, the defender who incurred the foul recovers the disc regardless of whether the attacker caught it or not.',
    rules: ['13.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'I throw a pass into the wind. The disc comes back to me and I catch it without anyone else touching it. Since I had no intention of making a self-pass, I can keep the disc.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "It's a double touch, whether the intention is there or not. I can't get my throw back if no one has touched it.",
    rules: ['13.2.', '13.2.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question: 'The defense calls a turnover. The offense contests. What happens?',
    image: undefined,
    answerChoices: {
      a: 'The disc is returned to the thrower',
      b: "The turnover is maintained, you can't contest a turnover",
    },
    correctAnswers: ['a'],
    explanation: 'The disc is returned to the last uncontested thrower.',
    rules: ['13.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "I throw the disc as 10 is uttered. My pass is not caught. My defender calls end of count (or stall-out) when the disc flies. I don't contest. What happens?",
    image: undefined,
    answerChoices: {
      a: 'The defense recovers the disc no matter what happens to my pass',
      b: 'The defense recovers the disc only if my pass was successful',
      c: 'The defense recovers the disc only if my pass was missed',
    },
    correctAnswers: ['a'],
    explanation: `
« Play resumes where I am (whether the pass is successful or not) and all players return to where they were when the call was made.

If my defender takes the disc in hand, he becomes the thrower and I check the disc to restart the play.
If my defender does not want to throw, he does not take the disc (leaves it on the ground) and I must check the disc on the ground to restart the game.»
    `,
    rules: ['13.7.3.', '13. 2.', '13.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question: 'My marker calls end of count (or stall-out) as I throw and contest. My pass misses. What happens?',
    image: undefined,
    answerChoices: {
      a: 'The game resumes where I am and I get the disc back after the disputed stall-out',
      b: 'The play resumes where I am and the defense recovers the disc after the stall-out',
      c: 'The disputed stall-out is ignored since there was a turnover and play resumes where the disc left off',
    },
    correctAnswers: ['c'],
    explanation: 'Play stops and then resumes with a check at the point where the disc stopped or was intercepted.',
    rules: ['13.4.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "I throw the disc and my pass is successful. My opponent calls stall-out, which I contest because he was counting too fast and I didn't have time to call fast count. What happens?",
    image: undefined,
    answerChoices: {
      a: "The stall-out can't be contested, I should have called Fast Count earlier",
      b: 'The stall-out is contested, the game resumes at count 8',
    },
    correctAnswers: ['b'],
    explanation: 'The disc is returned to the thrower and play resumes with a check and count of 8',
    rules: ['13.4.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "I throw the disc and my pass is missed (or intercepted). My opponent calls stall-out. I contest because he was counting too fast and I didn't have time to call fast count. What happens?",
    image: undefined,
    answerChoices: {
      a: "The stall-out can't be contested, I should have called Fast Count earlier",
      b: 'The stall-out is contested the game resumes at count 8',
      c: 'The contested stall-out is ignored and the turnover is maintained',
    },
    correctAnswers: ['c'],
    explanation: 'Having missed my pass, the turnover is upheld and play resumes with a check at the disc location.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "I'm on defense. I catch the disc out of bounds. Having caught the disc out of bounds, I can leave it on the ground for a partner to throw in.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'No matter where I intercept it, I have to keep it and make the pass.',
    rules: ['13.5.', '13.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'I intercepted the disc. Realizing that my lace is undone I put the disc on the ground to redo it. What happens?',
    image: undefined,
    answerChoices: {
      a: 'I can tie my shoe again before resuming the game',
      b: 'I have to call Technical to be allowed to stop the game for a technical problem like my shoelace',
      c: 'I am not allowed to stop the game and I have to play with my shoelace untied',
      d: "It's a double-turnover because I put the disc on the floor",
    },
    correctAnswers: ['c'],
    explanation:
      'It is a violation on my part, without a turnover, if I stop play to retie my shoe. I have to wait for a stoppage in play.',
    rules: ['13.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'My opponent misses a pass. The disc rolls into the field. I stop it. I can establish my pivot either where the disc stopped or where it touched the ground.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'I have no choice. The pivot is made at the point where the disc stopped (or came out).',
    rules: ['13.7.', '13.7.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'My opponent misses the pass. The disc rolls down the field, out of bounds and back into the playing area. I set up my pivot at the point where it stopped in the field.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'The pivot is established in the central area, at the point closest to where the disc first came out.',
    rules: ['13.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'My opponent misses a pass. The disc rolls into my end zone and out to the side of it. Where do I restart the game?',
    image: undefined,
    answerChoices: {
      a: 'Where the disc fell',
      b: 'Where the disc left the field',
      c: 'In the central area, at the point closest to where the disc came out',
    },
    correctAnswers: ['c'],
    explanation: 'In this case, it will be at the stud at the entrance of my area.',
    rules: ['13.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'My opponent misses a pass. The disc rolls into his end zone and stops there after a curve. Where will I set up my pivot?',
    image: undefined,
    answerChoices: {
      a: 'Where the record stopped',
      b: 'In the central area, in front of where he stopped',
    },
    correctAnswers: ['b'],
    explanation: 'I pick up the disc and move back to the goal line at the point closest to where it stopped.',
    rules: ['13.10.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'A turnover occurs in our defending end zone.  I pick up the disc. Where should I set my pivot? (Choose all correct options)',
    image: undefined,
    answerChoices: {
      a: 'At the point where the disc stopped',
      b: 'On my end line at the closest point to where the disc stopped',
    },
    correctAnswers: ['a', 'b'],
    explanation: 'Both options are valid. Before picking up the disc, I can tell my marker my decision.',
    rules: ['13.11.', '13.11.1.', '13.11.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'I call "Stall" and my opponent has not thrown the disc. The play is stopped. He hands me the disc. Do I have to take it?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      "If I take it, I have to throw it (after the check). If I don't want it, I let him have it. He must then place it on the ground and check it so that all players can move and one of my partners picks up the disc for me.",
    rules: ['13.5.', '13.5.1.', '13.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.GOAL,
    question: 'I catch the disc with one foot in the end zone and the other on the goal line. Is the point scored?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'When the disc is received, both feet must be in the attacking zone. Since the goal line is not part of the zone, the player in contact with it is not cin boundsred to be in it.',
    rules: ['14.1.', '14.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.GOAL,
    question:
      "By the time I catch the disc, I am on one foot in the opponent's zone. My foot is in the zone but my momentum takes me out of the field. The point is scored despite my exit from the field.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['14.1.', '14.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  // {
  //   category: Categories.GOAL,
  //   question:
  //     "I jump with support in the attacked area. I catch the disc in the air but with my momentum I fall back out of the playing area. The point is scored because my last feet before the catch were in the opponent's zone.",
  //   image: undefined,
  //   answerChoices: {
  //     a: 'True',
  //     b: 'False',
  //   },
  //   correctAnswers: ['b'],
  //   explanation: 'The point is not valid. It should have landed in the zone.',
  //   rules: ['14.1.', '14.1.1.'],
  //   source: 'Disque Tu Sais - Pablo',
  //   level: Levels.EASY,
  // },
  // {
  //   category: Categories.GOAL,
  //   question:
  //     "I jump and take a call in the middle zone. I catch the disc in the air and land in the opponent's end zone. Is the point scored?",
  //   image: undefined,
  //   answerChoices: {
  //     a: 'True',
  //     b: 'False',
  //   },
  //   correctAnswers: ['a'],
  //   explanation: '',
  //   rules: ['14.1.', '14.1.1.'],
  //   source: 'Disque Tu Sais - Pablo',
  //   level: Levels.EASY,
  // },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'A breach of the rules related to the marking on the carrier or a walk (travel) is :',
    image: undefined,
    answerChoices: {
      a: 'A violation',
      b: 'A violation',
      c: 'A foul',
    },
    correctAnswers: ['a'],
    explanation: 'They do not stop the game',
    rules: ['15.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'A rule violation due to non-minor contact between two or more opponents is :',
    image: undefined,
    answerChoices: {
      a: 'A violation',
      b: 'A violation',
      c: 'A foul',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['15.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question:
      'I am a player. I can clearly see that my partner has been fouled. I can call it because I have no doubt and am close to the action.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'Only the player who suffered the foul can call it. If the players involved ask me, I can say what I saw.',
    rules: ['15.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question:
      "I don't have the disc but I'm on offense. Our opponents set up a zone defense. Seeing that there are two defenders within 3 meters of the thrower, can I call a double team?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'Any attacking player can call a double team, unlike other scoring offenses which can only be called by the thrower',
    rules: ['15.5.', '15.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Who is authorized to call a walk?',
    image: undefined,
    answerChoices: {
      a: 'Only the defender to the mark',
      b: 'All defenders on the field',
      c: 'All team members on defense, even off the field',
    },
    correctAnswers: ['b'],
    explanation: '',
    rules: ['15.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Who is authorized to call a violation?',
    image: undefined,
    answerChoices: {
      a: 'All players',
      b: 'All team members, even off the field',
    },
    correctAnswers: ['a'],
    explanation: 'Either by giving its specific name, or by saying violation.',
    rules: ['15.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'The game stops as soon as a foul or violation is called?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['15.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question:
      'At the end of her throw, the offensive player puts her hand in my face. I call a foul. The pass is successful. What happens?',
    image: undefined,
    answerChoices: {
      a: 'Turnover because the thrower fouled during her throwing motion',
      b: 'No turnover the disc is returned to the thrower',
      c: 'No turnover and play resumes at the point where the disc was received',
    },
    correctAnswers: ['c'],
    explanation:
      'The rule states that incidental contact occurring in the continuity of the throw is not sufficient reason to call a foul, but must be avoided. Play resumes at the point of the catch.',
    rules: ['17.7.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Can I change my mind if I find that my call is not correct?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'I can call retracted and I play again with a check.',
    rules: ['15.11.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question:
      'I mark the thrower and call a foul. His pass is caught by one of his partners. Realizing that I made a mistake in my call, I retract the call. Where does the game resume?',
    image: undefined,
    answerChoices: {
      a: 'The player who caught the disc resumes play',
      b: 'The disc is returned to the thrower',
    },
    correctAnswers: ['a'],
    explanation: 'With the attacking team retaining the disc, play resumes with a check to the receiver.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question:
      'At the moment of the throw, an attacker calls a foul. The pass is missed. The attacker retracts. The defense recovers the disc from where it is and play resumes with a check.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'After an incorrect call is retracted, if the opposing team wins or maintains possession, the actions that followed are upheld.',
    rules: ['15.9.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  //   {
  //     category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
  //     question: "Je défends sur le porteur du disque. Dans la continuité de son lancer, il me met la main au visage. J’appelle faute. Sa passe est ratée. Je me rétracte mais nous récupérons tout  de même le disque là où il est, car sa passe a échoué.",
  //     answerChoices: {
  //       a: "Vrai",
  //       b: "Faux",
  //     },
  //     correctAnswers: [''],
  //     explanation: "",
  // rules: undefined,
  // source: "Disque Tu Sais - Pablo",
  //   },
  {
    category: Categories.CONTINUATION,
    question:
      'I call a violation at the time of the throw because the carrier had not put a foot in the center field after going for the disc in touch. The pass is missed. Any violation stops the play, so his failure is not counted. The disc is returned to him and play resumes with a check.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« f the foul or violation is called:
  against the thrower and the thrower still attempts a pass,
  or while the thrower is making a throwing motion,
    or occurs while the disc is in the air,
      then play continues until possession has been established.

Once possession is established if the team that called the foul or violation wins or maintains possession after the pass, play continues without stoppage.Players recognizing this may call play on to indicate that this rule has been called»
`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'I throw the disc and at that moment my defender makes contact. I call a foul. My pass misses. What happens?',
    image: undefined,
    answerChoices: {
      a: 'I get the disk',
      b: 'It is a turnover',
    },
    correctAnswers: ['a'],
    explanation:
      'If the team that called the foul or violation believes that possession was affected by the foul or violation, the disc will be returned to the thrower for a check',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'I throw the disc and at this point am contacted by the defender. I call a foul. My pass came in as I wanted it to but my partner makes a hand error and drops the pass. What happens?',
    image: undefined,
    answerChoices: {
      a: 'I get the disk',
      b: 'It is a turnover',
    },
    correctAnswers: ['b'],
    explanation:
      'If the team that called the foul or violation believes that possession was not affected by the foul or violation, there is a turnover at the location of the disc and play resumes with a check. In this game situation, the drop is not due to the called foul.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'I am on offense and do not have the disc. The disc is in the air when my defender unintentionally knocks me down on a run that does not affect the play. The pass is not caught by my partner involved in the pass. The foul is accepted and the thrower recovers the disc.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« There is a turnover at the location of the disc and play resumes with a check.
Regardless of when a foul or violation is called, if play has not come to a complete stop and the players involved from both teams agree that the foul or violation did not affect the outcome of the action, the outcome stands.This rule may not be superseded by any other rule.

If the result was a point scored, the point stands.
If the result was not a scored point, the affected players may readjust their disadvantageous placements caused by the foul, violation or call, and play resumes with a check.»
    `,
    rules: ['16.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question: 'Does the dangerous game call exist?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'Disregarding the integrity of the players regardless of when and if contact occurs is cin boundsred dangerous play and must be treated as a foul. This rule cannot be superseded by any other rule. If the call is accepted it must be treated as the most appropriate foul',
    rules: ['17.1.', '17.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS,
    question:
      "I am a defender. I intercept the disc and hit a offensive player right after. She calls a foul. I don't contest. What happens?",
    image: undefined,
    answerChoices: {
      a: 'The turnover is maintained',
      b: 'The disc is returned to the thrower',
      c: 'The disc is recovered by the attacker who was fouled',
    },
    correctAnswers: ['c'],
    explanation:
      'After an uncontested defensive receiving foul (contact with a receiver before, during, or directly after either player takes action on the disc), the receiver gains possession at the location of the foul. The count resumes at 1.',
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      "I jump and catch the disc in the air in the opponent's end zone. My defender bumps me and lands me out of bounds. I call a foul, which he does not contest. What happens?",
    image: undefined,
    answerChoices: {
      a: 'This is a point',
      b: "It's a turnover because I'm off the field",
      c: 'I keep the disc and resume play in the central zone, at the point closest to where I came out',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['17.5.', '17.5.1.', '17.5.1.1.', '17.5.2.', '17.5.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'I catch the disc in the air. My defender bumps me and lands me outside his end zone. I call a foul which he contests. The disc goes back to the thrower.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'I keep the disc where I landed and the point is therefore not scored.',
    rules: ['17.5.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'I am the thrower. When I pivot to make my pass, the marker makes contact with me. I did not throw the disc. I call contact and he does not contest. What happens?',
    image: undefined,
    answerChoices: {
      a: 'The game stops and the count will resume at 1',
      b: 'The game does not stop and the count resumes at 1',
      c: 'contact is not a valid call',
    },
    correctAnswers: ['b'],
    explanation:
      'If he does not contest, the play does not stop and the count resumes at 1. By calling a contact violation rather than a foul (he has a choice), the thrower does not want to stop the play.',
    rules: ['17.6.1.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question:
      "I catch the disc in the opponent's zone and my opponent's contact causes me to lose the disc. I call a foul. He does not contest. What happens?",
    image: undefined,
    answerChoices: {
      a: 'This is a point because it does not dispute',
      b: 'I recover the disc and play resumes at the point of the foul',
      c: 'I recover the disc and play resumes in the central zone as close to the foul as possible',
    },
    correctAnswers: ['b'],
    explanation:
      'In this situation, if I call a foul that is accepted, play resumes with a check at the spot of the foul (in the zone) and I must move back to the nearest point on the goal line to make my pass. The point is not validated. If I had called strip, the point would have been validated.',
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      "I catch the disc in the opponent's zone and my opponent's contact causes me to lose the disc. I call a strip (not a foul). He does not contest. What happens?",
    image: undefined,
    answerChoices: {
      a: 'This is a point because it does not dispute',
      b: 'I recover the disc and play resumes at the point of the foul',
      c: 'I recover the disc and play resumes in the central zone as close to the foul as possible',
    },
    correctAnswers: ['a'],
    explanation:
      'A strip occurs when a defensive foul causes the receiver or thrower to drop the disc after gaining possession.',
    rules: ['17.3.', '17.3.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'The attacker I mark shoves me after catching the disc. I call a foul. He does not contest the contact. He keeps the disc because he had caught the disc before he touched me.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« An offensive receiving foul occurs when a receiver makes contact with a defender before, during, or directly after each player takes action on the disc.
If the foul is not contested, it is a turnover and the defender wins the possession where the foul occurred.
If the pass is complete and the foul is contested, the disc returns to the thrower.»
  `,
    rules: ['17.2.1.', '17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question:
      "The attacker I'm marking shoves me before catching the disc. I call a foul. He does not contest the contact. It's a turnover. I do not have to pick up the disc. I can check the disc without taking it and call disc in to restart the play. Is the resolution correct?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'If the foul is not contested, it is a turnover and the defender wins the possession where the foul occurred.',
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question:
      'In a legitimate position, I am counting to 8. While making his pivot, the thrower hits me. I call a foul which he does not contest. What happens?',
    image: undefined,
    answerChoices: {
      a: 'He keeps the disc and I go back to counting 9 after a check.',
      b: 'We add 2 to the count and it reaches 10 so it is a turnover',
      c: 'The foul is not disputed so it is a turnover',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question:
      'In a legitimate position, I just counted to 8 the thrower. While making his pivot, he collides with me. I call a foul which he disputes. He keeps the disc and I go back to count 8 after a check.',
    image: undefined,
    answerChoices: {
      a: 'It is a turnover',
      b: 'The game resumes at count 6',
      c: 'The game resumes at count 8',
      d: 'The game resumes at count 9',
    },
    correctAnswers: ['b'],
    explanation: 'As the foul is contested and the count is greater than 5, I resume at count 6.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question: 'My opponent trips me. My fall does not influence the game. It is an indirect foul.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: `
« An indirect foul occurs when there is contact between a receiver and a defender that does not directly affect an attempted action on the disc.
If the foul is called, the player who was fouled may reposition himself if he was disadvantaged by the foul»
    `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'I have the disc. The marker is too close to me, so I push him away with the disc to make him understand and not stop the play. He calls a foul. Is he right?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: `
« If I push him, he can call a foul, in which case the game stops and the count resumes at the last number announced + 1(maximum 9).
If he is too close, I must call distance or disc space so that he moves back and resumes the count having subtracted 1 from the last number called.»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS,
    question:
      'On my run, my defender unintentionally knocks me down as I was about to receive the disc. My fall prevents me from catching it. What happens?',
    image: undefined,
    answerChoices: {
      a: 'It is a turnover',
      b: 'The disc is returned to the thrower',
      c: 'I get the disk',
    },
    correctAnswers: ['c'],
    explanation:
      'As long as the foul had an influence on the play (being sensed as the receiver), it is non-accidental contact.',
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'How many violations are there?',
    image: undefined,
    answerChoices: {
      a: '5',
      b: '6',
      c: '7',
    },
    correctAnswers: ['c'],
    explanation: `
« (fast count)
  (straddle)
  Distance(disc space)
  (wrapping)
  (double team)
  Vision
  (Travel)»
    `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'My marker takes over the game and starts the count without checking the disc. What do I do?',
    image: undefined,
    answerChoices: {
      a: 'I call a violation',
      b: 'I call fast count',
      c: "Never mind, let's play",
    },
    correctAnswers: ['b'],
    explanation:
      'A scoring infraction may be contested by the defense, in which case play stops. After any uncontested scoring infraction, the scorer shall restart the count at the last number fully called before the call minus one (1).',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'My scorer starts the count without saying count or stalling. Can I call a foul?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'Fouls are related to contact. This is a scoring infraction. It should be called a fast count.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: "If my marker doesn't subtract correctly or restart the count when needed, what do I do?",
    image: undefined,
    answerChoices: {
      a: 'I call a mistake',
      b: 'I call fast count',
      c: "Never mind, I'll explain the point afterwards",
    },
    correctAnswers: ['b'],
    explanation: 'This is a marking infraction.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'If the marker does not start the count at the correct number, the disc holder may call a violation?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'Generally, the marker calls a scoring infraction (fast count), but in some cases the marker may call a violation directly.',
    rules: ['18.1.5.', '18.1.5.1.', '18.1.5.2.', '18.1.5.3.', '18.1.5.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'The marker must be at least one disc diameter (27.5cm) from all parts of my body including the pivot foot?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'If the marker is not at the correct distance, the thrower can call a marker infraction based on which body part is too close: disc space (torso), straddle (line between the feet), wrapping (line between the hands)',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'The first zone curtain is legitimately placed. A pass breaks through and an attacker behind these defenders catches the disc. Being a defender and 1 meter away from this player, I start counting. When the first curtain gets back in front of the thrower, I stop my count and quickly back up to get out of the 3 meters. A non-disc-carrying attacker calls double team because there is more than one player within 3 meters at that moment. I contest. Am I right?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: `
« A marking infraction can be contested by the defense, in which case play stops.
The cross - chase between the replacement of the first curtain and the defender of the second curtain is frequent.
The rules specify that a simple run in this 3 - meter zone is not a double team.Therefore, my running out of this zone cannot be cin boundsred an infraction.»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'The thrower calls a straddle against me. What should I do?',
    image: undefined,
    answerChoices: {
      a: 'I have to move my supports back to a legitimate position',
      b: 'The game stops',
      c: 'I have to take the count back to the last fully pronounced number before the call minus 1',
    },
    correctAnswers: ['a', 'c'],
    explanation:
      'For all scoring offenses (i.e., not the walk), the defender must resume a legitimate position THEN resume the count at the last fully pronounced number before the call minus 1.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'I am the scorekeeper. I call a 4-way walk. The thrower still has the disc. What happens?',
    image: undefined,
    answerChoices: {
      a: 'The game stops',
      b: "The game doesn't stop",
      c: 'The thrower can throw',
      d: 'I can continue to count while the thrower puts his pivot foot back correctly',
    },
    correctAnswers: ['b'],
    explanation:
      'The game is not dead. Therefore, other players can be mobile. The thrower must establish his pivot in the right place before he can throw the disc. During this time, I do not count. Once correctly placed, I pick up the count where it stopped. In this situation, count 5.',
    rules: ['18.2.6.', '18.2.6.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'Instead of calling a scoring infraction, the thrower can call a scoring violation?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: `
« My calling a violation he stops the game, unlike if he had called an infraction.
He can do this if:
    - the count is not corrected as a result of calling a violation,
      - there is no count,
        - there is a huge marking infraction,
          - there is a repetition of violations»
    `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'I call a double team and attempt the pass anyway. It is intercepted. Having called an uncontested infraction, I recover the disc.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'If the thrower calls a scoring infraction or a scoring violation and attempts a forward pass during or after the call, the call has no consequence and if the pass is not caught the turnover stands.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'Once I catch the disc, I have to stop in 3 strides maximum.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'After catching the disc and landing in the playing area, the thrower must reduce speed as quickly as possible, without changing direction, until a pivot point is established.',
    rules: ['18.2.2.1.', '18.2.2.1.1.', '18.2.2.1.2'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'I just caught the disc and made a pass on my first deceleration support. A defender calls a walk (travel). Is he right?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'I may make a pass before I have established my pivot point as long as I do not change direction, do not increase my speed, and have no more than two points of contact with the ground before releasing the disc (rule 18.2.2.1)',
    rules: ['18.2.2.1.', '18.2.2.1.1.', '18.2.2.1.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'I catch the disc and decelerate by changing the direction of my run (curve). An opponent calls a walk. He is wrong because I was decelerating.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'The call is correct because after catching the disc and falling back into the playing area, I must reduce my speed as quickly as possible, without changing direction, until I have established my pivot point.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'I caught the disc while diving. I make a pass while kneeling. The defense can call a walk (Travel)',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« A thrower who is lying or kneeling does not need to establish a pivot.So I can make my pass in that position.
If he stands up it is not a travel, as long as he establishes his pivot in the same place.»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'What happens after a contested walk infraction if the thrower did not throw the disc?',
    image: undefined,
    answerChoices: {
      a: 'The game is stopped',
      b: 'The game continues without stopping',
    },
    correctAnswers: ['a'],
    explanation: 'If the walk is disputed, the game stops to resolve the disagreement.',
    rules: ['18.2.9.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'I am on offense. I make a call and am obstructed in my run by a defender. Can I call an obstruction(pick)?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'Only defenders can appeal this violation.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'I am a defender. I am obstructed and I decide to wait 2 seconds before calling obstruction (pick). I am not allowed to do so because any call must be made instantly.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'Before making a pick call, the defender may delay the call for up to two seconds to see if the obstruction will affect the play.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: "I called a pick and the game stopped. What's going on?",
    image: undefined,
    answerChoices: {
      a: 'Players move back to where they were at the time of the call',
      b: 'I reposition myself to the position I would have had if there had been no filibuster',
    },
    correctAnswers: ['a', 'b'],
    explanation:
      'All players move back to where they were at the time of the call and I move back to the position I would have been in had there been no obstruction.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'When a foul is called, play is stopped. I realize that my positioning and that of my opponent may result in an obstruction (pick). Can we change our position slightly to avoid the violation?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'During any stoppage of play, opponents can agree to slightly alter their position to avoid potential picks.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'The play is dead after a foul is called. The thrower checks the disc before everyone has properly repositioned themselves. What can I do?',
    image: undefined,
    answerChoices: {
      a: 'Do nothing',
      b: 'I call a Injury',
      c: 'I call a Violation',
    },
    correctAnswers: ['b'],
    explanation: '',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'The play is dead on a foul call. An attacker moves before the marker checks the disc. I can call a violation even if it is not my direct opponent.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'The game is frozen until the check. To make sure everyone moves at the same time, the scorekeeper may count down 3-2-1 aloud with a finger count, arm raised for all to see. Before the count, it is good practice to tell the players how much the count will be.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question: 'I see that an opponent needs to get out. What can I do to help?',
    image: undefined,
    answerChoices: {
      a: 'Rien',
      b: 'Appeler blessure ( injury )',
      c: 'Calling a violation',
    },
    correctAnswers: ['a'],
    explanation:
      "An injury stoppage can be called by the injured player or any other player on the injured player's team. Common sense dictates that you call it if you are the only one who has noticed it.",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'On a counter-call, I twist my ankle. A partner calls injury. As I am not the one who called it, I have the option of staying on the field or going out.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'Whether it is the player involved or one of his partners who called the injury, if the injury was not caused by an opponent, the player must choose to be replaced or have his own team take a time-out.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question: 'An opponent hurts me. I call injury. Do I have to leave the field?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'If the injury was caused by an opponent, I can choose to stay on the field or be replaced.',
    rules: ['19.1.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question: "Right after my partner's throw, I hurt myself and call injury. The pass is not caught. What happens?",
    image: undefined,
    answerChoices: {
      a: 'It is a turnover',
      b: 'The disc is returned to the thrower',
      c: 'The disc is recovered by the player who replaces me',
    },
    correctAnswers: ['a'],
    explanation: `
« If the disc was in the air when the interruption was called, play continues until the pass is caught or the disc touches the ground.
If the injury is not the result of a foul, the completion or turnover is upheld and play resumes at that point after the interruption.»
    `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'I defend a long pass and get injured on my run. I call injury before my opponent catches the disc. Having called injury when the disc was in the air and not being able to fully defend the pass, the result of the action is disregarded and the disc is returned to the thrower.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« The attacker keeps the disc.

If the disc was in the air when the interruption was called, play continues until the pass is caught or the disc touches the ground.
If the injury is not the result of a foul, the completion or turnover is upheld and play resumes at that spot after the interruption»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question: 'During a point, I notice that a dangerous object is on the ground. What can I do about it?',
    image: undefined,
    answerChoices: {
      a: 'Rien',
      b: 'Appeler technical',
      c: 'Appeler freeze',
    },
    correctAnswers: ['b'],
    explanation: `
« I can call a technical stop by saying technical.
Any player who identifies a condition that endangers players may call technical to stop play.Play must stop immediately.
The freeze call does not exist.»
    `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question: 'I notice that the disk is bent or broken. I can stop the game by calling freeze.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« This call does not exist.However, it is possible to call a technical interruption by saying technical.

The thrower may call a technical break during the game to replace a severely damaged disc.

After a Technical Break call:
- if the call or technical problem did not affect the play, the completed pass or turnover is upheld and play resumes at that point,
- if the call or technical problem affected the play, the disc is returned to the thrower»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'The opposing team replaces an injured player. Out of breath, I want to be replaced at this time. Am I allowed to do this?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'My team can also replace a player',
    rules: ['19.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question:
      "We just lost the point. Even though we don't have possession of the disc, my team has the right to call a timeout (if they have any left).",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'After the start of a point and before both teams have reported being ready, a player from either team may call a time-out. The time-out extends the time between the start of the point and the next pull by seventy-five seconds.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TIMEOUT,
    question:
      "I am spirit captain and on offense. My status allows me to call a timeout, even if I don't have the disc in hand.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'After the pull, only a player with possession of the disc may call a time-out.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TIMEOUT,
    question: 'After a timeout, the same players play the point.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'On a time-out, substitutions are not allowed, except for injury.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TIMEOUT,
    question: 'After a timeout called in the game, where should we place ourselves if we are on offense?',
    image: undefined,
    answerChoices: {
      a: 'Play resumes at the pivot point',
      b: 'The thrower remains the same',
      c: 'Any offensive player can become a thrower',
      d: 'Attackers reposition themselves where they were',
      e: 'Les attaquants se positionnent où ils le souhaitent',
    },
    correctAnswers: ['a', 'b', 'e'],
    explanation: '',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question: 'After a timeout, the defenders can place themselves wherever they want.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'Once the attackers have chosen their position, the defenders can place themselves anywhere in the playing area.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question: 'After calling a timeout at 5, the new marker resumes the count at count 6. I can call a quick count.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'The defenders may change markers, in which case the count must restart at 1. If the count does not restart at the correct number I may call a fast count.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.TIMEOUT,
    question: 'The opposing team calls a timeout when they are out of time. What happens?',
    image: undefined,
    answerChoices: {
      a: 'The game is stopped',
      b: 'The game is not stopped',
      c: 'The call has no impact',
      d: 'The marker adds 2 seconds to the count',
    },
    correctAnswers: ['a', 'd'],
    explanation: `
« If the thrower calls a time - out when his team is out of time, play is stopped.
The scorer must add two(2) seconds to the count he would have called before resuming play with a check.
If this results in a count of ten(10) or more, it is a stall - out change of possession»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question: 'I have one minute to resolve a contest.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'If after 30 seconds of discussion the contest is not resolved, the disc returns to the last uncontested thrower who then has 15 seconds to restart the game.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.APPENDIX,
    question:
      'After a point has been scored, how much time does the attacking team have to stand on the goal line (one foot) and stay still?',
    image: undefined,
    answerChoices: {
      a: '45 secondes',
      b: '60 seconds',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question:
      'As soon as all the attackers have placed their foot on the goal line, at least one of them must instantly raise their hand to signal that they are ready.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'They have 15 seconds to raise their hand.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question:
      'After a point is scored, does the defending team have more time than the offense to get into their end zone?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: `
« The defense has 60 seconds(compared to 45 for the offense) after the point has been scored to move.After this time the attack can call a time - out violation.
If it is the first time or if there is a contest, no penalty is applied.
If it is not the first time, then the attack imposes a time - out on the defense.If there was no time - out, the offense restarts in the center of the field and the game starts with a check.»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question: 'Captains are allowed to intervene whenever they wish in a discussion between players',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'They may intervene 15 seconds after the discussion begins. After 30 seconds, if there is no agreement, the disc is returned to the last non-contested thrower. Play must restart after 45 seconds (after the call)',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.APPENDIX,
    question: 'After a turnover in the center zone, the offense has 10 seconds to play.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'The defense may call out 10 seconds, then 5 seconds. 10 seconds after this first warning and if within 3 meters of the disc, the defender may call disc in and begin the count. (Rule 8.5)',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question:
      'After a pull or if the turnover occurs somewhere other than the center zone (end zone and sideline), the offense has 15 seconds to play.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: `
« It has 20 seconds.
If after calling 20 seconds, 10 seconds, 5 seconds, the offense has not played the disc again within the time limit, and if they are within 3 meters of the disc(if the disc is in the zone) or the pivot point(if the disc was out of bounds), then the defender may call disc in and begin the count.»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question: 'Who can call a spirit time-out?',
    image: undefined,
    answerChoices: {
      a: 'Any player in the game',
      b: 'Any player on the field',
      c: 'Only captains and spirit captains',
      d: 'Only spirit captains',
    },
    correctAnswers: ['c'],
    explanation: `
« This time - out can only be called by the captains(team or spirit) or a game advisor.The call can be made after a call that stopped the game or after the start of a point and before the start.
During this time out, no tactical points may be discussed by the teams.
After the captains have met to find solutions to improve the spirit of the game, both teams will meet in a circle in the middle of the field for the captains to state the solutions found.»
  `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question: 'The toss can be done with one or two discs.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'It must be done with two discs and in the field. The same or different call must be made by one of the two captains when the discs are in the air.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INDOOR,
    question: 'At the indoor engagement, I can throw the disc the way I want.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'The initial trajectory of the disc must not be directed towards the ground. In which case the attack may cause the pull to be redone.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INDOOR,
    question:
      "I play indoors. The opposing team's throw goes out of bounds about 13 meters from my zone, without the disc touching the field or a player. I can resume play in the middle of the central zone at the point closest to where the disc went out.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      "A player signaling 'Middle' puts the disc into play at the Brick mark, or at a point in the middle of the playing area closest to where the disc last crossed the perimeter line, depending on which location is closest to the End Zone being attacked. To signal this option, the designated thrower extends an arm over his/her head and/or calls 'Brick' or 'Middle', before touching the disc.",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  //   {
  //     category: Categories.INDOOR,
  //     question: " L'endroit où le disque est sorti de l'aire de jeu est le point où, avant d'entrer en contact avec l'extérieur de l'aire de jeu ou un joueur hors-jeu, le disque était le plus récemment :",
  //     answerChoices: {
  //       a: "Vrai",
  //       b: "Faux",
  //     },
  //     correctAnswers: [''],
  //     explanation: "",
  // rules: undefined,
  // source: "Disque Tu Sais - Pablo",
  //   },
  {
    category: Categories.INDOOR,
    question:
      'In the gym, on a contested defensive foul, a walk or an obstruction (pick), the count resumes at what maximum?',
    image: undefined,
    answerChoices: {
      a: 'counted 4',
      b: 'counted 5',
      c: 'counted 6',
      d: 'counted 7',
    },
    correctAnswers: ['b'],
    explanation:
      'If the count was greater than or equal to 4 at the time of the call, we start again at count 5. If it was lower, we start again at the number + 1.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INDOOR,
    question: 'On a contested stall-out, the count resumes at how much?',
    image: undefined,
    answerChoices: {
      a: 'counted 5',
      b: 'counted 6',
      c: 'counted 7',
      d: 'counted 8',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
];
