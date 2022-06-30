import { Levels, Categories } from '../../src/utils/config';

export default [
  {
    category: Categories.FIELD,
    question: 'En outdoor, comment est positionné le point de Brick ?',
    image: undefined,
    answerChoices: {
      a: 'À 10 mètres de la ligne de endzone',
      b: 'À 18 mètres de la ligne de endzone',
      c: 'À 10 mètres du milieu du terrain',
      d: 'À 18 mètres du milieu du terrain',
    },
    correctAnswers: ['b'],
    explanation:
      "La marque de brique est positionnée par rapprt à la ligne d'en-but, d'une distance égale à la profondeur de la zone d'en-but, soit 18 mètres.",
    rules: ['2.5.'],
    source: 'Martin',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      "Je suis en défense, un attaquant vient se placer à moins de 3 mètres du porteur de disque. J'ai le droit de venir gêner le lanceur dans cette zone de 3 mètres.",
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: "Faux, c'est un double team",
    },
    correctAnswers: ['b'],
    explanation:
      "Si je viens pour gêner le lanceur, c'est un double team. Je peux venir dans cette zone seulement si je suis au marquage d'un autre attaquant, c'est à dire si je suis à moins de 3 mètres de lui et que je réagis à cet autre attaquant (Règle 18.1.1.5 et Annotation 18.4)",
    rules: ['18.1.1.5.'],
    source: 'Martin',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TEAMS,
    question:
      'En outdoor, combien de joueurs, au maximum, une équipe peut-elle aligner sur le terrain pour pouvoir jouer le point ?',
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
