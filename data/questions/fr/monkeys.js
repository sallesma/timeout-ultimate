/*
  Questions taken from an online quiz by the Monkeys (Grenoble Ultimate)
  https://www.ultimate-grenoble.com/quizz-regles-dultimate/

  Email from Pierre:
  > Aucun problème, tu prends les questions que tu veux dans le Quizz, c'est libre de tout droits d'auteur 😉
*/

import { Levels, Categories } from '../../../src/utils/config';

export default [
  {
    category: Categories.PULL,
    question: 'Après avoir touché le sol, un pull roule sur le sol. J’ai le droit de l’arrêter…',
    image: undefined,
    answerChoices: {
      a: 'seulement si je suis en défense',
      b: 'seulement si je suis en attaque',
      c: 'si je suis en attaque ou en défense',
      d: "je n'ai pas le droit de l'arrêter",
    },
    correctAnswers: ['c'],
    explanation: "Une fois que le disque a touché le sol, tout le monde peut essaye de l'arrêter.",
    rules: ['7.7.', '8.4.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'Une passe sort des limites du terrain et est attrapée par un défenseur avant que le disque ne touche le sol. Où ce joueur doit-il établir son pied de pivot ?',
    image: undefined,
    answerChoices: {
      a: "À l'endroit où le disque est sorti",
      b: "À l'endroit le plus proche du catch (zones comprises)",
      c: "À l'endroit de la zone centrale le plus proche du catch (zones non comprises)",
    },
    correctAnswers: ['c'],
    explanation:
      "Un défenseur est toujours considéré comme en-jeu, même lorsqu'il est à l'extérieur des limites du terrain. Le disque est donc considéré avoir quitté l'aire de jeu lorsque le défenseur l'a touché. On doit donc reprendre au plus proche de ce point. Ce fait de jeu est appprofondit dans WFDF Rules of Ultimate 2013 – Interpretations, paragraphe 11.3.",
    rules: ['11.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'Je suis attaquant. Si je saute de l’extérieur du terrain, que j’attrape le disque en l’air et que je retombe à l’intérieur du terrain, il y a turnover ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "L'attaquant garde son statut (ici hors-limites) tant qu'il est en l'air. Dès qu'il touche le disque en étant hors-limites, le disque est aussi hors-limites et c'est un turnoer.",
    rules: ['11.3.', '11.6.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'J’ai le droit à 3 pas maximum pour m’arrêter après avoir attrapé le disque',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "L'attaquant doit réduire sa vitesse au plus vite, le règlement ne précise pas de limite de pas. Cependant, le jeu rapide est permis et encadré.",
    rules: ['18.2.2.', '18.2.2.1.', '18.2.2.1.1.', '18.2.2.1.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Le jeu est arrêté et doit reprendre par un check. Le lanceur tente une passe avant le check mais celle-ci n’est pas complétée. Que se passe t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Il y a turnover dans tous les cas.',
      b: "Le disque revient au lanceur et le jeu reprend par un check sauf si tous les joueurs impliqués estiment que l'absence de check n'a pas affecté le résultat de l'action.",
      c: 'Le disque revient au lanceur et le jeu reprend par un check en ajoutant (2) au compte',
      d: "Le disque revient au lanceur sauf s'il s'agit d'un drop",
    },
    correctAnswers: ['b'],
    explanation:
      "Un joueur peut appeler une violation concernant le « check » si un adversaire tente une passe sans un « check » approprié selon 10.6; après cet appel de violation, la passe ne compte pas indépendamment du fait qu’elle soit réceptionnée ou non et la possession retourne au lanceur (sauf si les joueurs impliqués des deux équipes s'accordent sur le fait que l’incident n'a pas affecté le résultat de l'action, ce résultat est maintenu).",
    rules: ['10.7.', '10.7.1.', '16.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question: 'Que dois-je appeler si je suis blessé ?',
    image: undefined,
    answerChoices: {
      a: 'Injury',
      b: 'Technical',
      c: 'Aïe',
      d: 'Freeze',
    },
    correctAnswers: ['a'],
    explanation: "L'appel « injury » sert à interrompre le jeu en cas de blessure.",
    rules: ['19.1.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Lorsqu’un « travel » est appelé, le temps que la lanceuse se replace, la marqueuse peut continuer le compte.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "La marqueuse doit indiquer à la lanceuse l'endroit où elle doit établir son point de pivot et attendre qu'elle soit correctement placée pour reprendre le compte.",
    rules: ['18.2.6.', '18.2.6.2.', '18.6.2.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question: 'En attendant le pull de l’équipe adverse, un(e) attaquant(e) doit :',
    image: undefined,
    answerChoices: {
      a: "être dans sa zone d'en-but sans changer de position avec un autre joueur",
      b: "avoir un pied sur sa ligne d'en-but sans changer de position avec un autre joueur",
      c: "être dans sa zone d'en-but et bouger s'il le souhaite",
      d: "avoir un pied sur sa ligne d'en-but et bouger s'il le souhaite",
    },
    correctAnswers: ['b'],
    explanation: 'Cela permet notamment aux défenseurs de bien voir qui est en face !',
    rules: ['7.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question:
      "Je m’appuie sur un coéquipier pour gagner un duel en attaque. Je catch le disque et retombe dans la endzone. Mon adversaire se plaint du coup de pouce dont j'ai bénéficié. Que se passe-t-il ?",
    image: undefined,
    answerChoices: {
      a: 'Il y a point',
      b: 'Le disque revient au lanceur et le compte reprend où il en était avec un maximum de (6)',
      c: 'Il y a turnover',
      d: 'Le disque revient au lanceur et le compte reprend à (1)',
    },
    correctAnswers: ['c'],
    explanation: "C'est un turnover à l'endroit où le disque a été attrapé.",
    rules: ['12.10.', '13.2.', '13.2.6.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Je suis en défense sur le porteur du disque. Je commets une infraction (straddle) appelée par le porteur du disque.',
    image: undefined,
    answerChoices: {
      a: 'Je continue de compter sans que le jeu s’arrête en reprenant par le dernier nombre entièrement prononcé moins (1)',
      b: 'Je recommence à compter à partir de (1) sans que le jeu s’arrête',
      c: 'Le jeu s’arrête et reprend par le dernier nombre entièrement prononcé moins (1)',
      d: 'Le jeu s’arrête et reprend par un check avec un compte à (1)',
    },
    correctAnswers: ['a'],
    explanation:
      "Le jeu ne s'arrête pas pour une infraction de marque. Avant de reprendre le compte, je dois corriger ma position.",
    rules: ['18.1.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question:
      'Je suis marqueur sur le porteur du disque. Un « pick » est appelé alors que je viens de compter « 8 ». Par quoi dois-je reprendre le compte ?',
    image: undefined,
    answerChoices: {
      a: 'Stalling 6',
      b: 'Stalling 7',
      c: 'Stalling 8',
      d: 'Stalling 9',
    },
    correctAnswers: ['a'],
    explanation: 'Après un « pick », le compte reprend au maximum à 6.',
    rules: ['9.5.4.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'Le jeu est arrêté. Avant que le « check » ne soit effectué, un joueur peut demander quelques secondes pour refaire ses lacets.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: "C'est possible uniquement si le jeu est déjà arrêté.",
    rules: ['10.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'Je suis en attaque et je cours après une longue. Mon défenseur me fait un croche-pied et je tombe. J’appelle « Faute » et mon défenseur accepte. Je garde la possession du disque et le jeu reprend à (1) par un check à l’endroit où j’aurais dû attraper le disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: "Le jeu reprend à l'endroit de la faute et non à l'endroit où le disque aurait été attrapé.",
    rules: ['17.2.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question: 'Un pick est appelé par l’équipe en défense. Il n’est pas contesté. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Si le dernier nombre entièrement prononcé est (4), je reprend le compte par stalling 4',
      b: 'Si le dernier nombre entièrement prononcé est (6), je reprend le compte par stalling 7',
      c: 'Si le dernier nombre entièrement prononcé est (8), je reprend le compte par stalling 7',
      d: 'Si le dernier nombre entièrement prononcé est (5), je reprend le compte par stalling 6',
    },
    correctAnswers: ['d'],
    explanation:
      'Après une violation (dont pick) le compte reprend là où il en était, avec un maximum de 6. La réponse A est fausse car reprendre à 4 signifie dire « stalling 5 »',
    rules: ['9.5.4.', '9.6.', '9.6.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'Si un joueur en défense touche le disque puis le bras (et uniquement le bras) de l’attaquant sur une réception, il y a quand même faute du défenseur.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Un contact sur les bras après la défense doit être évité mais ne constitue pas une faute (à l'exclusion du strip et du jeu dangereux)",
    rules: ['17.2.1.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'Je suis un cutter en attaque. Avant d’attraper le disque, je commets une faute sur mon défenseur (faute offensive). Je ne conteste pas la faute.',
    image: undefined,
    answerChoices: {
      a: 'Le disque revient au lanceur et le compte reprend où il en était avec un maximum de 8',
      b: 'Il y a turnover',
      c: 'Je garde le disque mais le compte commence à 3',
      d: 'Le disque revient au lanceur avec un compte à 1',
    },
    correctAnswers: ['b'],
    explanation: 'Une faute offensive acceptée sur une réception provoque un « turnover ».',
    rules: ['13.2.', '13.2.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'Une joueuse A court après le disque et est suivie par une joueuse B. La joueuse A ralentit volontairement sa course pour s’assurer d’avoir le disque sans que la joueuse B puisse le défendre. La joueuse B rentre en collision avec la joueuse A.',
    image: undefined,
    answerChoices: {
      a: 'Il y a faute de la joueuse B',
      b: 'Il y a faute des deux joueuses',
      c: 'Il y a faute de la joueuse A',
      d: "Il n'y a pas faute",
    },
    correctAnswers: ['a'],
    explanation:
      "Ici la joueuse A laisse la possibilité à B d'ajuster sa course pour éviter la collision en ralentissant donc c'est bien la joueuse B qui commet une faute.",
    rules: ['12.7.', '12.7.1.', '12.7.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.SPIRIT,
    question:
      'Je suis sur la sideline. Sur une action de jeu amenant un call, j’ai le droit de donner mon avis si les joueurs impliqués me le demandent.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "En revanche, je dois me taire si on ne me demande pas mon avis, sauf pour signaler à un coéquipier qu'il a fait un appel injustifié.",
    rules: ['1.10.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'Sur une faute défensive non-contestée dans la endzone attaquée, les 2 joueurs doivent revenir à la ligne d’entrée de endzone avant de checker.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Ils doivent faire le check à l'endroit de la faute, puis l'attaquant doit revenir à la ligne d'entrée de zone pour établir son pied de pivot.",
    rules: ['17.2.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'Je suis marqueur sur le porteur du disque. Un « pick » est appelé alors que je viens de compter « 4 ». Par quoi dois-je reprendre le compte?',
    image: undefined,
    answerChoices: {
      a: 'Stalling 2',
      b: 'Stalling 3',
      c: 'Stalling 4',
      d: 'Stalling 5',
    },
    correctAnswers: ['d'],
    explanation:
      'Le compte reprend là où il en était, avec un maximum de 6 suite à un pick. Je viens de dire 4, donc je dois maintenant dire 5.',
    rules: ['9.5.4.', '9.6.', '9.6.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'Je suis en attaque. J’appelle « faute » au moment du lancer. Elle n’est pas contestée, néanmoins ma passe est réceptionnée. Que se passe t-il?',
    image: undefined,
    answerChoices: {
      a: 'Le jeu continue si le lanceur appelle « play on »',
      b: "Le jeu continue même si le lanceur n'appelle pas « play on » et que la défense s'est arrêtée",
      c: "Le jeu s'arrête, la possession du disque revient au lanceur et le jeu reprend à (1) par un check",
      d: "Le jeu s'arrête, la possession reste au receveur et le jeu reprend à (1) par un check",
    },
    correctAnswers: ['a'],
    explanation: `La réponse se trouve dans:
-rules of Ultimate, paragraphe 16.2.4
-official annotations 16.6`,
    rules: ['16.2.4.', '16.2.4.1.', '16.2.4.2.', '16.2.4.2.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Je suis en défense sur le porteur du disque. Je commets une infraction (straddle) appelée par le porteur du disque.',
    image: undefined,
    answerChoices: {
      a: 'Je continue de compter sans que le jeu s’arrête en reprenant par le dernier nombre entièrement prononcé moins (1)',
      b: 'Le jeu s’arrête et reprend par un check avec un compte à (1)',
      c: 'Le jeu s’arrête et reprend par le dernier nombre entièrement prononcé moins (1)',
      d: 'Je recommence à compter à partir de (1) sans que le jeu s’arrête',
    },
    correctAnswers: ['a'],
    explanation: "Le jeu ne s'arrête que si l'infraction de marquage est contestée.",
    rules: ['18.1.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question: 'J’ai le droit de rattraper ma propre passe si un coéquipier l’a touchée entre-temps.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['13.2.', '13.2.5.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question: 'Après un stall-out non contesté, le jeu doit reprendre par un check',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "Le jeu est arrêté par le stall-out, et le jeu doit toujours reprendre par un check lorsqu'il est arrêté pendant un point.",
    rules: ['13.2.', '13.2.2.', '10.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.SPIRIT,
    question: 'Les non-joueurs sur la sideline n’ont jamais le droit de donner leur avis sur une action de jeu.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Les non-joueurs sur la sideline peuvent donner leur avis si et seulement s'ils ont été sollicités par une personne impliquée dans l'appel.",
    rules: ['1.10.', '1.10.1.', '1.10.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Je suis en attaque et lors d’une réception, je jongle volontairement avec le disque pour gagner du terrain. Que doit appeler la défense ?',
    image: undefined,
    answerChoices: {
      a: 'Travel',
      b: 'Faute',
      c: 'Violation',
      d: "Rien, c'est autorisé",
    },
    correctAnswers: ['a'],
    explanation: 'La réponse se trouve dans rules of Ultimate, paragraphe 18.2.5.6',
    rules: ['18.2.5.', '18.2.5.5.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      "Je suis en attaque. Lors d’une réception, je dévie volontairement le disque (sans l’attraper) pour une coéquipière en zone d'en-but. Que doit appeler la défense ?",
    image: undefined,
    answerChoices: {
      a: 'Travel',
      b: 'Faute',
      c: 'Violation',
      d: "Rien, c'est autorisé. Il y a point",
    },
    correctAnswers: ['d'],
    explanation: 'La réponse se trouve dans official annotations, paragraphe 18.12',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question: 'Je suis porteur du disque. J’appelle « contact ». Le marqueur ne conteste pas. Que se passe t-il ?',
    image: undefined,
    answerChoices: {
      a: "Le marqueur reprend le compte par le dernier nombre entièrement prononcé moins (1) sans que le jeu s'arrête",
      b: "Le jeu s'arrête et le compte reprend à (1)",
      c: "Le marqueur reprend le compte à (1) sans que le jeu s'arrête",
      d: "Le jeu s'arrête et le compte reprend où il en était avec un maximum de (6)",
    },
    correctAnswers: ['c'],
    explanation:
      "L'infraction « contact » permet de faire redescendre le compte à 1 suite à une faute du marqueur, sans arrêter le jeu.",
    rules: ['17.6.1.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.PULL,
    question: 'Je suis en attaque. Sur un pull de l’équipe adverse, mon équipe appelle un offside. Que se passe t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Mon équipe prend possession au point de brick de mon équipe et le jeu reprend par un check.',
      b: 'Mon équipe choisit entre prendre possession du disque où il est ou au point de brick et le jeu reprend sans check.',
      c: 'Mon équipe attend que le disque touche le sol, prend possession au point de brick de mon équipe et le jeu reprend sans check.',
      d: "Ce premier appel fait effet d'un premier avertissement et le jeu continue. ",
    },
    correctAnswers: ['c'],
    explanation: 'La bonne réponse se trouve dans Rules of Ultimate, Appendix V4.0 paragraphe 7.5.',
    rules: ['7.5.', '7.5.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'Un pick peut-il être appelé par une attaquante ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'La réponse se trouve dans official annotations, paragraphe 18.15',
    rules: ['18.3.', '18.3.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'Je suis en attaque et je cours pour réceptionner une longue passe. Mon défenseur me fait un croche-pied et je tombe. Même si je pense que je ne pouvais en aucun cas attraper le disque (passe trop longue), je dois quand même appeler « faute » et maintenir mon call.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'La bonne réponse se trouve dans Interpretations – Rules of Ultimate, paragraphe 17.4.',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question:
      'J’appelle un temps mort alors que le compte est à (8). Mon équipe n’a plus de temps mort. Que se passe t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Il y a turnover',
      b: 'Le jeu reprend par un check et Stalling 6',
      c: 'Le jeu reprend par un check et Stalling 9',
      d: 'Le jeu reprend par un check et Stalling 8',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['20.4.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'Je suis en attaque sans le disque. J’ai le droit de sortir du terrain et d’y rentrer à un endroit différent',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: 'La réponse se trouve dans rules of Ultimate, official annotations, paragraphe 11.5',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question: 'Par quoi recommence le compte après un stall-out contesté ?',
    image: undefined,
    answerChoices: {
      a: 'Stalling 6',
      b: 'Stalling 7',
      c: 'Stalling 9',
      d: 'Stalling 8',
    },
    correctAnswers: ['d'],
    explanation: '',
    rules: ['9.5.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'Je me tords la cheville tout seul pendant un point. J’appelle « Injury » et le jeu s’arrête. Mon équipe a encore un temps mort. Quelles sont les options?',
    image: undefined,
    answerChoices: {
      a: "Je suis remplacé et l'équipe adverse peut changer un joueur si elle le souhaite",
      b: "On enlève un temps mort à mon équipe mais aucun temps mort n'a lieu et je reste sur le terrain",
      c: "Je suis remplacé mais l'équipe adverse ne peut pas changer un joueur si elle le souhaite",
      d: 'Je reste sur le terrain sans que mon équipe ne prenne de temps mort',
    },
    correctAnswers: ['a', 'b'],
    explanation: 'La règle est complétée par les annotations, paragraphe 19.1.',
    rules: ['19.1.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question: 'Après un pick non contesté, le compte reprend :',
    image: undefined,
    answerChoices: {
      a: 'où il en était au moment du pick MOINS 2 avec un maximum de (6)',
      b: 'où il en était au moment du pick avec un maximum de (6)',
      c: 'où il en était au moment du pick avec un maximum de (8)',
      d: 'où il en était au moment du pick avec un maximum de (9)',
    },
    correctAnswers: ['b'],
    explanation: '',
    rules: ['9.5.4.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question:
      'Il y a un turnover en dehors du terrain. Je dois attendre d’avoir établi mon pied de pivot pour appeler un temps mort.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'La réponse se trouve dans official annotations, paragraphe 20.1',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question: 'Au cours d’un point une joueuse a son lacet défait. Le jeu peut-il être arrêté pour cette raison ?',
    image: undefined,
    answerChoices: {
      a: "Non, ce n'est pas une raison valable",
      b: 'Oui, peu importe si cette joueuse est une attaquante ou une défenseuse',
      c: "Oui, mais seulement si l'adversaire est d'accord",
      d: 'Oui, mais seulement si cette joueuse est une attaquante',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['10.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Un turnover intervient dans la endzone défendue, la lanceuse revient à la ligne. Pour pouvoir jouer, elle doit attendre que sa marque « check » le disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Si le turnover s'est produit sans appel ayant arrêté le jeu, pas besoin de check. La bonne réponse se trouve dans les annotations, paragraphe 10.1.",
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TEAMS,
    question:
      'En outdoor, combien de joueurs, au minimum, une équipe doit-elle aligner sur le terrain pour pouvoir jouer le point ?',
    image: undefined,
    answerChoices: {
      a: '4',
      b: '5',
      c: '6',
      d: '7',
    },
    correctAnswers: ['b'],
    explanation: "En dessous de 5 joueurs, l'équipe ne peut pas jouer le point.",
    rules: ['5.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question: 'Les lignes extérieures du terrain sont considérées comme hors-jeu (out) ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['11.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.EASY,
  },
  {
    category: Categories.COUNT,
    question: 'Pour pouvoir compter, un défenseur doit être à…',
    image: undefined,
    answerChoices: {
      a: 'moins de 5 mètres du point pivot du lanceur',
      b: 'moins de 3 mètres du point pivot du lanceur',
      c: 'moins de 1 mètre du point pivot du lanceur',
      d: "la distance qu'il souhaite tant que le porteur du disque peut entendre le compte",
    },
    correctAnswers: ['b'],
    explanation: '',
    rules: ['9.3.', '9.3.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.EASY,
  },
];
