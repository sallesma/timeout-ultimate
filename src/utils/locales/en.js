import { Levels, Categories } from '../config';

export default {
  config: {
    levels: {
      [Levels.EASY]: 'Easy',
      [Levels.MIDDLE]: 'Medium',
      [Levels.DIFFICULT]: 'Hard',
      [Levels.ANY]: 'All',
    },
    categories: {
      [Categories.SPIRIT]: 'Spirit of the Game',
      [Categories.FIELD]: 'Playing Field',
      [Categories.TEAMS]: 'Teams',
      [Categories.PULL]: 'The Pull',
      [Categories.STATUS]: 'State of Play',
      [Categories.COUNT]: 'Stall Count',
      [Categories.CHECK]: 'The Check',
      [Categories.OUT]: 'Out-of-Bounds',
      [Categories.RECEIVER]: 'Receivers and Positioning',
      [Categories.TURNOVERS]: 'Turnovers',
      [Categories.GOAL]: 'Scoring',
      [Categories.FOULS_INFRACTIONS_VIOLATIONS]: 'Calling Fouls, Infractions and Violations',
      [Categories.CONTINUATION]: 'Continuation after a Call',
      [Categories.FOULS]: 'Fouls',
      [Categories.INFRACTIONS_VIOLATIONS]: 'Infractions and Violations',
      [Categories.STOPPAGE]: 'Safety Stoppages',
      [Categories.TIMEOUT]: 'Time-Outs',
      [Categories.APPENDIX]: 'Appendix',
      [Categories.HAND_SIGNALS]: 'Gestures',
      [Categories.INDOOR]: 'Indoors',
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
    subtitle: ' questions are waiting for you to start learning the rules of Ultimate!',
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
      "Hello! I'm Martin Salles, the developer behind Timeout Ultimate. It's an application designed by ultimate players to help other players learn the rules of ultimate. It is and will remain free.",
    thanksHeader: 'Acknowledgements',
    thanksText:
      "I would like to thank everyone who contributed to the development of Timeout Ultimate. Many of the questions come from Pablo's Disque Tu Sais game. Some questions were written by Pierre Gruau for the Monkeys. The application also uses the Hand Signals designed by Raphaël Candelier for the PUC and the WFDF. Finally, the English version was set up by Brandon Sneider justhuckitstudios+wfdfrulesquiz@gmail.com creator of UltiApp and https://GotSpirit.games .",
    rulesDisclaimer:
      'The rules of Ultimate are taken from the "WFDF Rules of Ultimate 2021-2024" produced by the World Flying Disc Federation.',
    contributeHeader: 'Contribute',
    contributeText:
      "Whether it's adding, correcting questions or maintaining the application, any kind of help is welcome!",
    feedbackHeader: 'Feedback',
    feedbackText:
      "The application is in the process of being created. I have a lot of ideas for the next step but I'd love to hear your opinion.",
    feedbackCta: 'Send a message',
    discInHeader: 'Other projets',
    discInText:
      'In addition to this application, I am also working on the Disc In application, which allows you to prepare Ultimate practices.',
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
    appendix: 'Appendice',
    searchPlaceholder: 'Search for a word…',
  },
  question: {
    cta: 'Check the answer',
    rightAnswer: 'Correct answer!',
    wrongAnswer: 'Wrong answer…',
  },
  report: {
    header: 'Review',
    result: {
      one: '{{count}} correct answer out of {{total}} questions',
      other: '{{count}} correct answers out of {{total}} questions',
    },
    commentHeader: 'Our comment',
    perfect: 'Good job!',
    good: 'Not so bad, one more effort!',
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
    reportError: {
      rule: 'Rule:',
    },
  },
  rule: {
    ruleCopied: 'The rule {{number}} has been copied.',
    annotationCopied: 'The annotation has been copied.',
    annotationContent: {
      Note: 'Note',
      Example: 'Example',
      What: 'What',
      Result: 'Result',
      Why: 'Why',
      Extra: 'Extra',
    },
  },
};
