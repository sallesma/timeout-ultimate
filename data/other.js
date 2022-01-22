import { Levels, Categories } from '../src/utils/config';

export default [
  {
    category: Categories.FIELD,
    question: "En outdoor, à comment est positionné le point de Brick ?",
    image: undefined,
    answerChoices: {
        a: "À 10 mètres de la ligne de endzone",
        b: "À 18 mètres de la ligne de endzone",
        c: "À 10 mètres du milieu du terrain",
        d: "À 18 mètres du milieu du terrain",
    },
    correctAnswers: ['b'],
    explanation: "Voir règle 2.7",
    source: "Disque Tu Sais - Pablo",
    level: Levels.MIDDLE,
  },
];
