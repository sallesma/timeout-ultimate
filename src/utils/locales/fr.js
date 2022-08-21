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
  homeScreen: {
    appName: 'Timeout Ultimate',
    subtitle: " questions t'attendent pour apprendre les règles de l'ultimate !",
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
      "Bonjour ! Je suis Martin Salles, le développeur derrière Timeout Ultimate. C'est une application conçue par des joueurs d'ultimate pour aider d'autres joueurs à apprendre les règles de l'ultimate. Elle est et restera gratuite.",
    thanksHeader: 'Remerciements',
    thanksText:
      "Je souhaite remercier tous ceux qui ont contribué au développement de Timeout Ultimate. Une grande partie des questions viennent du jeu Disque Tu Sais de Pablo. Certaines questions ont été rédigées par Pierre Gruau pour les Monkeys. L'application utilise aussi les Hand Signals dessinés par Raphaël Candelier pour le PUC et la WFDF.",
    rulesDisclaimer:
      'Les règles de l\'ultimate sont tirés du document "WFDF Rules of Ultimate 2021-2024" produit par la World Flying Disc Federation, puis traduit par la FFDF.',
    contributeHeader: 'Contribuer',
    contributeText:
      "Que ce soit pour ajouter, corriger des questions ou maintenir l'application, toute aide est la bienvenue !",
    feedbackHeader: 'Feedback',
    feedbackText:
      "L'application est en cours de création. J'ai plein d'idées pour la suite mais je serais ravi de connaître ton avis",
    feedbackCta: 'Envoyer un message',
    discInHeader: 'Autres projets',
    discInText:
      "En plus de cette application, je travaille aussi sur l'application Disc In, qui permet de préparer des entraînements d'ultimate",
    discInCta: 'Disc In',
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
    nextQuestion: 'Question suivante',
  },
  rulesScreen: {
    rules: 'Règles',
    handSignals: 'Gestes',
    searchPlaceholder: 'Rechercher un mot…',
  },
};
