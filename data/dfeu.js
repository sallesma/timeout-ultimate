import { Levels } from '../src/utils/config';

export default [
  {
    question: "Les dimensions d'un terrain outdoor sont de :",
    answerChoices: {
      a: '90m x 30m',
      b: '97m x 35m',
      c: '100m x 37m',
    },
    correctAnswers: ['c'],
    source: "DFEU - Pablo",
    level: Levels.EASY,
  },
  {
    question: "À la réception d'un pull, un attaquant touche involontairement le disque avec sa jambe, avant qu'il n'ait touché le sol",
    answerChoices: {
      a: "Le geste était involontaire, les attaquants gardent la possession du disque à l'endroit où il l'a touché",
      b: "Turnover car il ne l'a pas attrapé",
      c: "Ne l'ayant pas touché avec la main, les attaquants récupèrent le disque à l'endroit où il s'arrête ou sort",
    },
    correctAnswers: ['b'],
    source: "DFEU - Pablo",
    level: Levels.EASY,
  },
  {
    question: "Sur le pull, le disque atterrit et s'immobilise dans la zone d'en-but adverse",
    answerChoices: {
      a: "Les attaquants peuvent le jouer à l'endroit où il a touché le sol ou à l'endroit où il s'est immobilisé",
      b: "Les attaquants ont le choix de le jouer à l'endroit où il s'est arrêté ou à l'entré de la zone",
      c: "Les attaquants doivent le jouer de l'endroit où il s'est immobilisé",
    },
    correctAnswers: ['c'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
  {
    question: "La ligne qui délimite l'aire de jeu",
    answerChoices: {
      a: "est considérée comme faisant partie de l'aire de jeu",
      b: "est considérée comme ne faisant pas partie de l'aire de jeu",
    },
    correctAnswers: ['b'],
    source: "DFEU - Pablo",
    level: Levels.EASY,
  },
  {
    question: "Le pull sort du terrain par un côté. Le lanceur peut mettre son pied de pivot",
    answerChoices: {
      a: "à la marque du brick, ou au milieu du terrain, ou à la ligne de touche où le disque est sorti",
      b: "à la marque du brick, ou au milieu de la ligne d'en-but",
      c: "à la marque du brick, ou au point de la ligne de touche où le disque est sorti",
      d: "à la marque du brick, ou au point de la ligne de touche le plus près de là où le disque à atterri",
    },
    correctAnswers: ['c'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
  {
    question: "Un joueur vient de plonger pour attraper le disque. Dès l'instant où il atterrit sur la poitrine, le défenseur dit « stalling » et commence à compter",
    answerChoices: {
      a: "Le défenseur doit attendre que le joueur se relève avant de commencer à compter",
      b: "Le défenseur n'est pas obligé d'attendre que le joueur se relève avant de commencer à compter",
    },
    correctAnswers: ['b'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
  {
    question: "Un attaquant attrape le disque en l'air et atterrit avec un pied dans l'aire de jeu et un pied sur la ligne de touche. Les deux pieds touchent le sol en même temps.",
    answerChoices: {
      a: "Turnover",
      b: "Pas turnover",
    },
    correctAnswers: ['a'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
  {
    question: "Un attaquant et un défenseur attrapent le disque exactement au même moment.",
    answerChoices: {
      a: "Le défenseur prend la possession du disque",
      b: "L'attaquant prend la possession du disque",
      c: "Le disque retourne au lanceur",
    },
    correctAnswers: ['b'],
    source: "DFEU - Pablo",
    level: Levels.EASY,
  },
  {
    question: "Pour un stall-out, le lanceur doit être encore en possession du disque quand",
    answerChoices: {
      a: "le marqueur commence à dire « Stall », après avoir atteint dix",
      b: "le marqueur finit de dire « Stall », après avoir atteint dix",
      c: "le marqueur commence à dire « dix »",
      d: "le marqueur finit de dire « dix »",
    },
    correctAnswers: ['c'],
    source: "DFEU - Pablo",
    level: Levels.EASY,
  },
  {
    question: "Un attaquant attrape le disque dans la zone d'en-but qu'il attaque. Puis il lance une passe non complétée",
    answerChoices: {
      a: "C'est un turnover",
      b: "Pas de turnover, c'est un point",
    },
    correctAnswers: ['b'],
    source: "DFEU - Pablo",
    level: Levels.DIFFICULT,
  },
  {
    question: "Le lanceur subitt une faute pendant qu'il pivote. Il appelle la faute puis tente la passe",
    answerChoices: {
      a: "Si la passe est complétée, le jeu continue",
      b: "Si la passe n'est pas complétée, le jeu continue",
      c: "Le disque revient au lanceur quelle que soit l'issue de la passe",
      d: "Le lanceur ne peut appeler que « Contact » quand le contact a lieu hors du mouvement de lancer",
    },
    correctAnswers: ['c'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
  {
    question: "Un attaquant touche le disque en l'air en essayant de l'attraper, mais ne réussit pas. Le défense commet alors une faute sur l'attaquant et l'empêche de faire une deuxième tentative pour attrapper le disque",
    answerChoices: {
      a: "C'est une faute « Strip »",
      b: "Ce n'est pas une faute car l'attaquant avait déjà raté son catch",
      c: "C'est une faute car l'attaquant a été empêché d'attrapper le disque sur sa seconde tentative",
    },
    correctAnswers: ['c'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
  {
    question: "Le lanceur appelle « Disc space » et le marqueur conteste",
    answerChoices: {
      a: "Le jeu s'arrête",
      b: "Le jeu ne s'arrête pas",
      c: "Le marqueur ne peut pas contester une infraction de marque",
    },
    correctAnswers: ['a'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
  {
    question: "Un travel est appelé contre le lanceur avant qu'il ne fasse sa passe. Le lanceur tente la passe, mais elle n'est pas complétée.",
    answerChoices: {
      a: "Turnover. Le jeu continue sans check",
      b: "Turnover. Le jeu continue après un check",
      c: "Turnover seulement si le travel n'est pas contesté",
      c: "Le disque revient au lanceur",
    },
    correctAnswers: ['a'],
    source: "DFEU - Pablo",
    level: Levels.DIFFICULT,
  },
  {
    question: "Un défenseur essaie de suivre le joueur sur lequel il défend, mais il rentre dans l'un de ses coéquipiers. Le lanceur a toujours le disque",
    answerChoices: {
      a: "Ce n'est pas un pick car ils sont dans la même équipe",
      b: "C'est un pick, mais le jeu ne s'arrrête pas si l'attaquant ne reçoit pas le disque",
      c: "C'est un pick. Le jeu s'arrête et le défenseur peut rattraper son retard",
    },
    correctAnswers: ['c'],
    source: "DFEU - Pablo",
    level: Levels.EASY,
  },
  {
    question: "Après avoir établi son pied de pivot dans le terrain, un joueur réussit sa passe en mettant l'autre dehors",
    answerChoices: {
      a: "Il y a turnover car il avait un pied en dehors du terrain",
      b: "Il n'y a pas turnover",
    },
    correctAnswers: ['b'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
  {
    question: "Sur un « Stall out » non contesté",
    answerChoices: {
      a: "Turnover, c'est le marqueur qui reprend la possession du disque",
      b: "Turnover et n'importe quel attaquant peut reprendre le disque, après un check",
    },
    correctAnswers: ['b'],
    source: "DFEU - Pablo",
    level: Levels.MIDDLE,
  },
];
