import { Levels, Categories } from '../../src/utils/config';

export default [
  {
    category: Categories.FIELD,
    question: 'In outdoor, how is the Brick point positioned?',
    image: undefined,
    answerChoices: {
      a: '10 meters from the endzone line',
      b: '18 meters from the endzone line',
      c: '10 meters from the middle of the field',
      d: '18 meters from midfield',
    },
    correctAnswers: ['b'],
    explanation:
      'The brick mark is positioned at the end line, a distance equal to the depth of the end zone, i.e. 18 meters.',
    rules: ['2.5.'],
    source: 'Martin',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'I am on defense, an attacker comes within 3 meters of the disc carrier. I have the right to interfere with the thrower in this 3 meter zone.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: "Wrong, it's a double team",
    },
    correctAnswers: ['b'],
    explanation:
      'If I come to impede the thrower, it is a double team. I can only come into this zone if I am marking another attacker, i.e. if I am within 3 meters of him and I react to this other attacker (Rule 18.1.1.5 and Annotation 18.4)',
    rules: ['18.1.1.5.'],
    source: 'Martin',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TEAMS,
    question: 'In outdoor play, how many players, at most, can a team field in order to play the point?',
    image: undefined,
    answerChoices: {
      a: '5',
      b: '6',
      c: '7',
      d: '8',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['5.1.'],
    source: 'Martin',
    level: Levels.EASY,
  },
];
