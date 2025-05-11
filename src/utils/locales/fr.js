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
      [Categories.SPIRIT]: "L'Esprit du jeu",
      [Categories.FIELD]: 'Aire de jeu',
      [Categories.TEAMS]: 'Équipes',
      [Categories.PULL]: "L'Engagement",
      [Categories.STATUS]: 'Etat du Jeu',
      [Categories.COUNT]: 'Le Compte',
      [Categories.CHECK]: 'Le Check',
      [Categories.OUT]: 'Hors-limites',
      [Categories.RECEIVER]: 'Réceptionneur et Positionnement',
      [Categories.TURNOVERS]: 'Turnovers',
      [Categories.GOAL]: 'Marquer un point',
      [Categories.FOULS_INFRACTIONS_VIOLATIONS]: 'Fautes, Infractions, Violations',
      [Categories.CONTINUATION]: 'Continuité après un Appel',
      [Categories.FOULS]: 'Fautes',
      [Categories.INFRACTIONS_VIOLATIONS]: 'Infractions et Violations',
      [Categories.STOPPAGE]: 'Interruptions de sécurité',
      [Categories.TIMEOUT]: 'Temps-mMorts',
      [Categories.APPENDIX]: 'Appendice',
      [Categories.HAND_SIGNALS]: 'Gestes',
      [Categories.INDOOR]: 'Indoor',
    },
  },
  navigation: {
    back: 'Retour',
    homeScreen: 'Timeout Ultimate',
    optionsScreen: 'Démarrer mon quizz',
    historyScreen: 'Historique',
    aboutScreen: 'À propos',
    rulesScreen: 'Règlement',
  },
  homeScreen: {
    appName: 'Timeout Ultimate',
    subtitle: " questions t'attendent pour apprendre les règles de l'Ultimate !",
    menu: {
      play: 'Jouer',
      history: 'Historique',
      rules: 'Règlement',
    },
  },
  aboutScreen: {
    mailSubject: 'À propos de Timeout Ultimate',
    aboutHeader: 'À propos',
    aboutText:
      "Bonjour ! Je suis Martin Salles, le développeur derrière Timeout Ultimate. C'est une application conçue par des joueurs d'Ultimate pour aider d'autres joueurs à apprendre les règles de l'Ultimate. Elle est et restera gratuite.",
    thanksHeader: 'Remerciements',
    thanksText:
      "Je souhaite remercier tous ceux qui ont contribué au développement de Timeout Ultimate. Une grande partie des questions viennent du jeu Disque Tu Sais de Pablo. Certaines questions ont été rédigées par Pierre Gruau pour les Monkeys. L'application utilise aussi les Hand Signals dessinés par Raphaël Candelier pour le PUC Ultimate et la WFDF.\n\nLe déploiement de Timeout Ultimate sur les stores est financé par le PUC Ultimate.",
    rulesDisclaimer:
      'Les règles de l\'Ultimate sont tirés du document "WFDF Rules of Ultimate 2025-2028" produit par la World Flying Disc Federation, puis traduit par la FFDF et des contributeurs.',
    contributeHeader: 'Contribuer',
    contributeText:
      "Que ce soit pour ajouter, corriger des questions ou maintenir l'application, toute aide est la bienvenue !",
    feedbackHeader: 'Feedback',
    feedbackText:
      "L'application est en cours de création. J'ai plein d'idées pour la suite mais je serais ravi de connaître ton avis.",
    feedbackCta: 'Envoyer un message',
    information: 'Informations techniques',
  },
  historyScreen: {
    questions: 'Questions : {{count}}',
    rightAnwsers: 'Bonnes réponses : {{count}}',
    percentage: 'Pourcentage : {{count}} %',
    empty: "Il n'y a pas encore de résultats parce que tu n'as pas encore fait de quiz !",
    result: {
      one: '{{count}} bonne réponse sur {{total}} ({{percentage}} %)',
      other: '{{count}} bonnes réponses sur {{total}} ({{percentage}} %)',
    },
  },
  optionsScreen: {
    countHeader: 'Nombre de questions',
    timeHeader: 'Temps par question',
    shortTime: '30 sec',
    longTime: '2 min',
    noTime: 'Aucun',
    levelHeader: 'Niveau',
    playCta: 'JOUER',
    moreOptionsCta: "+ d'options",
    lessOptionsCta: "- d'options",
    chapterHeader: 'Chapitre des règles',
  },
  quizzScreen: {
    headerRight: {
      one: '{{count}} bonne réponse',
      other: '{{count}} bonnes réponses',
    },
    noQuestions: 'Aucune question ne correspond aux critères choisis.',
    nextQuestion: 'Question suivante',
  },
  rulesScreen: {
    rules: 'Règles',
    handSignals: 'Gestes',
    appendix: 'Appendice',
    searchPlaceholder: 'Rechercher un mot…',
  },
  question: {
    cta: 'Valider',
    rightAnswer: 'Bonne réponse !',
    wrongAnswer: 'Mauvaise réponse…',
  },
  report: {
    header: 'Bilan',
    result: {
      one: '{{count}} bonne réponse pour {{total}} questions',
      other: '{{count}} bonnes réponses pour {{total}} questions',
    },
    commentHeader: 'Notre commentaire',
    perfect: 'Bravo !',
    good: 'Pas si mal, encore un effort !',
    average: 'Il y a encore du boulot',
    bad: "C'est pas top…",
    shareCta: 'Partager mon résultat',
    homeCta: "Retourner à l'accueil",
    errorsHeader: 'Détail des erreurs',
    shareTitle: "Règles de l'Ultimate",
    shareMessage: "J'ai obtenu {{right}} / {{total}} sur un quizz sur les règles de l'Ultimate sur Timeout Ultimate",
  },
  questions: {
    displayedRule: {
      seeRule: 'Voir la règle',
      ruleHeader: 'Règle {{number}',
    },
    feedback: {
      incentiveHeader: 'Signalement',
      incentiveText:
        "Si une question n'est pas claire ou non conforme aux règles, merci de nous le signaler  pour améliorer la qualité de l'application.",
      incentiveCancel: 'Annuler',
      incentiveCta: 'Message',
      mailSubject: "Une question n'est pas claire sur Timeout Ultimate",
      mailBody: `

> Question concernée : {{question}}


      `,
    },
    reportError: {
      rule: 'Règlement :',
    },
  },
  rule: {
    ruleCopied: 'La règle {{number}} a été copiée.',
    annotationCopied: "L'annotation a été copiée.",
    annotationContent: {
      Note: 'Note',
      Example: 'Exemple',
      What: 'Situation',
      Result: 'Résultat',
      Why: 'Pourquoi',
      Extra: 'Extra',
    },
  },
};
