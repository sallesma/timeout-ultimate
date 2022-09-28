import { Levels, Categories } from '../config';

export default {
  config: {
    levels: {
      [Levels.EASY]: 'Facile',
      [Levels.MIDDLE]: 'Moyen',
      [Levels.DIFFICULT]: 'Difficile',
      [Levels.ANY]: 'Tous',
    },
    categories: {
      [Categories.SPIRIT]: 'Esprit du jeu',
      [Categories.FIELD]: 'Aire de jeu',
      [Categories.TEAMS]: 'Les Équipes',
      [Categories.PULL]: "L'Engagement",
      [Categories.STATUS]: 'Le statut du disque',
      [Categories.COUNT]: 'Le Compte',
      [Categories.CHECK]: 'Le Check',
      [Categories.OUT]: 'Hors des limites',
      [Categories.RECEIVER]: 'Réceptionneur et positionnement',
      [Categories.TURNOVERS]: 'Turnovers',
      [Categories.GOAL]: 'Marquer un point',
      [Categories.FOULS_INFRACTIONS_VIOLATIONS]: 'Fautes, infractions, violations',
      [Categories.CONTINUATION]: 'Continuité après un appel de faute ou violation',
      [Categories.FOULS]: 'Fautes',
      [Categories.INFRACTIONS_VIOLATIONS]: 'Infractions et violations',
      [Categories.STOPPAGE]: 'Stoppage',
      [Categories.TIMEOUT]: 'Temps-morts',
      [Categories.APPENDIX]: 'Appendice',
      [Categories.HAND_SIGNALS]: 'Gestes',
      [Categories.INDOOR]: 'Indoor',
    },
  },
  navigation: {
    back: 'Back',
    homeScreen: 'Timeout Ultimate',
    optionsScreen: 'Start my quizz',
    historyScreen: 'History',
    aboutScreen: 'About',
    rulesScreen: 'Rules',
  },
  homeScreen: {
    appName: 'Timeout Ultimate',
    subtitle: ' questions are waiting for you to start learning the rules of Ultimate !',
    menu: {
      play: 'Play',
      history: 'History',
      rules: 'Rules',
    },
  },
  aboutScreen: {
    mailSubject: 'About Timeout Ultimate',
    aboutHeader: 'About',
    aboutText:
      "Hello ! I'm Martin Salles, the developer behind Timeout Ultimate. It's an application designed by ultimate players to help other players learn the rules of ultimate. It is and will remain free.",
    thanksHeader: 'Acknowledgements',
    thanksText:
      "I would like to thank everyone who contributed to the development of Timeout Ultimate. Many of the questions come from Pablo's Disque Tu Sais game. Some questions were written by Pierre Gruau for the Monkeys. The application also uses the Hand Signals designed by Raphaël Candelier for the PUC and the WFDF.",
    rulesDisclaimer:
      'The rules of Ultimate are taken from the "WFDF Rules of Ultimate 2021-2024" produced by the World Flying Disc Federation and translated by the FFDF.',
    contributeHeader: 'Contribute',
    contributeText: "Whether it's adding, correcting questions or maintaining the application, all help is welcome!",
    feedbackHeader: 'Feedback',
    feedbackText:
      "The application is in the process of being created. I have a lot of ideas for the next step but I'd love to hear your opinion",
    feedbackCta: 'Send a message',
    discInHeader: 'Other projets',
    discInText:
      'In addition to this application, I am also working on the Disc In application, which allows you to prepare Ultimate workouts',
    discInCta: 'Disc In',
    information: 'Technical information',
  },
  historyScreen: {
    questions: 'Questions: {{count}}',
    rightAnwsers: 'Correct answers: {{count}}',
    percentage: 'Percentage: {{count}} %',
    empty: "There are no results because you haven't taken the quiz yet!",
    result: {
      one: '{{count}} correct answer out of {{total}} ({{percentage}} %)',
      other: '{{count}} correct answers out of {{total}} ({{percentage}} %)',
    },
  },
  optionsScreen: {
    countHeader: 'Number of questions',
    timeHeader: 'Time per question',
    shortTime: '30 sec',
    longTime: '2 min',
    noTime: 'None',
    levelHeader: 'Level',
    playCta: 'PLAY',
    moreOptionsCta: '+ options',
    lessOptionsCta: '- options',
    chapterHeader: 'Rules Section',
  },
  quizzScreen: {
    headerRight: {
      one: '{{count}} correct answer',
      other: '{{count}} correct answers',
    },
    nextQuestion: 'Next question',
  },
  rulesScreen: {
    rules: 'Rules',
    handSignals: 'Gestures',
    searchPlaceholder: 'Search for a word…',
  },
  question: {
    cta: 'Check the answer',
    rightAnswer: 'Correct answer !',
    wrongAnswer: 'Wrong answer…',
  },
  report: {
    header: 'Review',
    result: {
      one: '{{count}} correct answer out of {{total}} questions',
      other: '{{count}} correct answers out of {{total}} questions',
    },
    commentHeader: 'Our comment',
    perfect: 'Good job !',
    good: 'Not so bad, one more effort !',
    average: 'There is still work to do',
    bad: "It's not great…",
    shareCta: 'Share my result',
    homeCta: 'Back to the home screen',
    errorsHeader: 'Detail of the errors',
    shareTitle: 'Rules of Ultimate',
    shareMessage: 'I got {{right}} / {{total}} at a quiz on the rules of Ultimate in Timeout Ultimate',
  },
  questions: {
    displayedRule: {
      seeRule: 'See the rule',
      ruleHeader: 'Rule {{number}',
    },
    feedback: {
      incentiveHeader: 'Report',
      incentiveText: 'If a question is not clear or does not comply with the rules, please let us know',
      incentiveCancel: 'Cancel',
      incentiveCta: 'Message',
      mailSubject: 'One question is unclear on Timeout Ultimate',
      mailBody: `

> Concerned question : {{question}}


      `,
    },
  },
};
