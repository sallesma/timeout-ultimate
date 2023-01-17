import { Levels, Categories } from '../../../src/utils/config';

export default [
  {
    category: Categories.SPIRIT,
    question:
      'Dans la mesure où je trouve que mes adversaires font trop d’appels litigieux (des marchers par exemple), je fais de même pour être sur un pied d’égalité. Je suis dans l’esprit de l’Ultimate.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `
« Les joueurs doivent avoir à l’esprit qu’ils ont un rôle d’arbitre en toutes situations d’arbitrage entre équipes. Les joueurs doivent:
 - connaître les règles;
 - être impartiaux et objectifs;
 - dire la vérité;
 - faire des appels à la faute (« call ») d'une manière cohérente au long d'un match,
 - et faire un appel à une faute uniquement si une infraction est assez significative pour changer le résultat d'une action.»
    `,
    rules: ['1.3.', '1.3.1.', '1.3.2.', '1.3.3.', '1.3.9.', '1.3.10.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.SPIRIT,
    question: 'Je peux célébrer un point de la manière que je veux.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Je ne dois pas être irrespectueux à ce moment.',
    rules: ['1.6.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.SPIRIT,
    question:
      'Je peux être malin et appeler une passe à un adversaire. À lui de faire attention à qui il donne le disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'C’est contre l’esprit du jeu.',
    rules: ['1.6.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.SPIRIT,
    question:
      'Énervé par les fautes successives d’un adversaire à mon encontre, je refuse de lui parler et de le checker à la fin du match. Est-ce la bonne attitude ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation: `
« Les joueurs doivent:
- laisser aux adversaires l’opportunité de parler
- résoudre les disputes aussi vite que possible en utilisant un langage respectueux
- réagir calmement aux désaccords et provocations. »

« La haute compétition est encouragée mais jamais au détriment du respect mutuel entre joueurs, de l’adhérence aux règles du jeu ou du simple plaisir de jouer ».
`,
    rules: ['1.4.', '1.3.5.', '1.3.8.', '1.5.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.SPIRIT,
    question:
      'Je suis sur le terrain, proche de l’action. Bien qu’ayant vu que l’appel de ma coéquipière était faux ou inutile, je ne dois rien dire tant que l’on ne me demande pas ce que j’ai vu.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'L’esprit du jeu veut que l’on dise à ses partenaires s’ils se trompent, s’ils ont causé une faute ou une violation dès lors que je suis sur le terrain et proche de l’action.',
    rules: ['1.10.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.SPIRIT,
    question:
      'Si je connais mieux les règles qu’un débutant, suis-je tenu de les expliquer et de les faire appliquer ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: `
« Dans le cas où un joueur débutant transgresse les règles par ignorance des règles, les joueurs expérimentés sont tenus d'expliquer la transgression ».

« Un joueur expérimenté, qui offre des conseils sur les règles et guide l'arbitrage sur le terrain, peut superviser des matchs avec des débutants ou des jeunes joueurs ».
`,
    rules: ['1.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.SPIRIT,
    question:
      'Bien que je ne sois pas sur le terrain (sur la « side line »), je peux appeler une faute et/ou intervenir sur un appel.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "« Les règles doivent être interprétées par les joueurs directement impliqués dans l’action de jeu ou par des joueurs qui ont eu la meilleure perspective sur l’action. Les non-joueurs, indépendamment du capitaine, doivent s’abstenir d’intervenir. Cependant les joueurs peuvent prendre l’avis de non-joueurs pour clarifier les règles et aider les joueurs à faire l'appel approprié ».",
    rules: ['1.10.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FIELD,
    question: 'Une attaquante attrape le disque en ayant un pied sur la ligne de touche.',
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: 'Pas turnover',
    },
    correctAnswers: ['a'],
    explanation: 'La ligne ne fait pas partie du terrain. La joueuse est donc en dehors des limites du terrain.',
    rules: ['2.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'Une attaquante attrape le disque en l’air. À la réception, ses pieds touchent le sol en même temps avec un pied sur la ligne d’en-but et l’autre dans la zone attaquée.',
    image: undefined,
    answerChoices: {
      a: 'Il y a point',
      b: "Il n'y a pas point",
    },
    correctAnswers: ['b'],
    explanation:
      'Pour que le point soit validé il faut que le(s) premier(s) appui(s) soi(en)t uniquement dans la zone.',
    rules: ['14.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'Un joueur attrape le disque en l’air. À la réception, ses pieds touchent le sol en même temps avec un pied dans l’aire de jeu et l’autre en dehors . « Turnover » ou pas ?',
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: 'Pas turnover',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['11.4.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FIELD,
    question:
      'Un attaquant attrape le disque en l’air. À la réception, son pied droit se pose en premier dans l’aire de jeu centrale. Son élan le fait sortir du terrain .',
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: 'Pas turnover',
    },
    correctAnswers: ['b'],
    explanation: 'Au moment de sa réception son premier appui est dans le terrain.',
    rules: ['11.3.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'Un attaquant attrape le disque en l’air. À la réception, son pied droit se pose en premier sur la ligne d’en-but puis le pied gauche dans la zone attaquée.',
    image: undefined,
    answerChoices: {
      a: 'Il y a point',
      b: "Il n'y a pas point",
    },
    correctAnswers: ['b'],
    explanation: 'Le point n’est pas validé car à la réception son premier appui n’est pas dans la zone d’en-but.',
    rules: ['11.4.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'Ma coéquipière a le disque le long de la ligne de touche. Des personnes situées à 2 mètres du terrain l’empêchent de faire une passe.',
    image: undefined,
    answerChoices: {
      a: "Tant pis, il faut s'arranger avec la situation",
      b: 'La joueuse peut appeler une violation',
      c: 'Je peux appeler une violation',
    },
    correctAnswers: ['b'],
    explanation:
      'Tous les joueurs gênés peuvent appeler une « violation » car aucun obstacle ne doit se situer à moins de 3 mètres de l ‘aire de jeu.',
    rules: ['2.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      "On me fait une passe proche de la ligne de touche. Au moment d'attraper le disque, je suis gêné par un non-joueur placé à 50 cm du terrain.",
    image: undefined,
    answerChoices: {
      a: "Tant pis, il faut s'arranger avec la situation",
      b: 'Je peux appeler une violation',
    },
    correctAnswers: ['b'],
    explanation:
      'Tous les joueurs gênés peuvent appeler une « violation » car aucun obstacle ne doit se situer à moins de 3 mètres de l ‘aire de jeu.',
    rules: ['2.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'Un défenseur attrape le disque en l’air. À la réception, son pied droit se pose en premier sur la ligne de touche. Son élan le fait sortir du terrain.',
    image: undefined,
    answerChoices: {
      a: 'Le défenseur récupère le disque et son équipe passe en attaque',
      b: "Le défenseur est sorti du terrain donc il doit rendre le disque à l'attaquant",
      c: 'Le disque retourne au lanceur',
    },
    correctAnswers: ['a'],
    explanation:
      'Dans la mesure où il a fait échouer la passe des attaquants, le défenseur récupère le disque (même s’il est sorti du terrain).',
    rules: ['11.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question: 'Après un point marqué, combien de temps les équipes ont-elles pour se mettre en place ?',
    image: undefined,
    answerChoices: {
      a: '45 secondes',
      b: '60 secondes',
      c: '45 secondes pour l’attaque, 60 secondes pour la défense',
    },
    correctAnswers: ['c'],
    explanation:
      "Ces durées sont mentionnées dans l'annexe des règles A5.4.1 (https://rules.wfdf.org/documents/wfdf-rules-of-ultimate-2021-2024-appendix-v3/download)",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.PULL,
    question:
      'Si une défenseuse non porteuse du disque et une attaquante lèvent le bras, la joueuse ayant le disque peut-elle faire l’engagement ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Il faut que ce soit la joueuse qui lance le « pull » et au moins une attaquante',
    rules: ['7.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question:
      'Après que le « puller » a levé le bras, il faut que deux attaquants minimum lèvent le bras pour pouvoir faire l’engagement ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Un seul attaquant suffit.',
    rules: ['7.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question:
      'Les attaquants peuvent se placer où ils veulent dans leur zone avant que le défenseur fasse l’engagement, à condition qu’ils soient immobiles ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Ils doivent tous avoir un pied sur la ligne et être immobiles.',
    rules: ['7.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question: 'Lorsque le « puller » lâche le disque, où doivent se trouver ses partenaires ?',
    image: undefined,
    answerChoices: {
      a: 'Derrière lui',
      b: "Dans leur zone d'en-but",
    },
    correctAnswers: ['b'],
    explanation: "Les joueurs ne peuvent pas quitter leur zone d'en-but avant que le disque ne soit laché.",
    rules: ['7.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.PULL,
    question: 'Un hors-jeu (offside) est :',
    image: undefined,
    answerChoices: {
      a: 'Une infraction',
      b: 'Une faute',
      c: 'Une violation',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['7.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.PULL,
    question: 'Je peux appeler un hors-jeu (offside) même si le disque a touché le sol',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: "Un hors-jeu (offside) doit être appelé avant que l'attaque ne touche le disque",
    rules: ['7.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question:
      'Lors de l’engagement, la force du vent renvoie le disque vers le puller. Avant que le disque ne touche le sol, et avant que les attaquants ne puissent le toucher, il rattrape le disque. Est-ce autorisé ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation:
      "Aucun joueur de l'équipe défensive ne peut toucher le disque après le « pull » avant qu'un membre de l'équipe attaquante ne touche le disque ou que le disque ne touche le sol.",
    rules: ['7.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question:
      'Lors de l’engagement, la force du vent renvoie le disque vers ma zone d’en-but. Avant que le disque ne touche le sol, et avant que les attaquants ne puissent le toucher, je fais tomber le disque pour ne pas que les attaquants gagnent trop de terrain. Est-ce autorisé ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation:
      "Aucun joueur de l'équipe défensive ne peut toucher le disque après le « pull » avant qu'un membre de l'équipe attaquante ne touche le disque ou que le disque ne touche le sol.",
    rules: ['7.7.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question:
      "Mon adversaire engage. Le disque touche le terrain et roule vers ma zone. Je peux arrêter le disque mais uniquement avec ma main, pour éviter qu'il se rapproche trop de ma zone.",
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Je peux le faire avec n’importe quelle partie de mon corps.',
    rules: ['8.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.PULL,
    question:
      'Après « le pull », le disque s’arrête dans le terrain. Je peux attendre que mes camarades se placent correctement avant de ramasser le disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "J'ai 20 secondes pour jouer le disque. Ce délais et les cas particuliers sont mentionnées dans l'annexe des règles A5.8.2 (https://rules.wfdf.org/documents/wfdf-rules-of-ultimate-2021-2024-appendix-v3/download)",
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
    category: Categories.PULL,
    question:
      'Sur l’engagement, une attaquante fait volontairement tomber le disque à terre afin de gagner du terrain.',
    image: undefined,
    answerChoices: {
      a: "C'est un turnover",
      b: 'Le jeu continue',
      c: "Il faut recommencer l'engagement",
    },
    correctAnswers: ['a'],
    explanation:
      'Même si les défenseurs s’aperçoivent qu’elle n’avait pas l’intention de l’arrêter, à partir du moment où elle le touche, elle doit l’attraper. Il y a donc un changement de possession (« turnover »).',
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.PULL,
    question:
      'Sur l’engagement, un attaquant tente d’attraper le disque dans le terrain, avant qu’il n’ait touché le sol. Il touche le disque mais rate son catch. Que se passe t-il ?',
    image: undefined,
    answerChoices: {
      a: "C'est un turnover",
      b: 'Le jeu continue',
      c: "Il faut recommencer l'engagement",
    },
    correctAnswers: ['a'],
    explanation: "Si un attaquant touche le disque, avant qu'il ne touche le sol, il y a « turnover »",
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.PULL,
    question:
      'Sur l’engagement, un attaquant tente d’attraper le disque dans le terrain, avant qu’il n’ait touché le sol. Il rate son catch sans toucher le disque. Que se passe t-il ?',
    image: undefined,
    answerChoices: {
      a: "C'est un turnover",
      b: 'Le jeu continue',
      c: "Il faut recommencer l'engagement",
    },
    correctAnswers: ['b'],
    explanation:
      'Lors du pull, le disque peut toucher le sol sans provoquer de turnover. ' +
      "Pour cela il faut qu'aucun attaquant n'y ait touché.",
    rules: ['7.11.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.PULL,
    question:
      'Lors de l’engagement, la force du vent renvoie le disque vers ma zone d’en-but. Après que le disque a touché le sol, et avant que les attaquants ne le touchent, j’arrête le disque qui roule vers ma zone pour ne pas que les attaquants gagnent trop de terrain. Est-ce autorisé ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['8.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question:
      'Sur l’engagement, une attaquante tente d’attraper le disque hors du terrain, avant qu’il n’ait touché le sol. Elle touche le disque mais rate son catch. Que se passe t-il ?',
    image: undefined,
    answerChoices: {
      a: "C'est un turnover et le jeu reprend là où le disque est sorti du terrain",
      b: "C'est un turnover et le jeu reprend dans le terrain au point le plus proche du disque tombé",
      c: "Ce n'est pas un turnover, la joueuse peut ramasser le disque et reprendre le jeu là où le disque est sorti du terrain",
      d: "Il faut refaire l'engagement",
    },
    correctAnswers: ['b'],
    explanation: 'Le jeu reprend au point le plus près de l’endroit où le disque a été touché, dans la zone centrale.',
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.PULL,
    question: 'Qui peut appeler le «brick » ?',
    image: undefined,
    answerChoices: {
      a: 'Tous les attaquants',
      b: "L'attaquant qui récupère le disque sur l'engagement",
      c: 'Le puller',
      d: 'Tous les défenseurs',
    },
    correctAnswers: ['a'],
    explanation:
      "« L'option engageante du « brick » doit être signalée par n'importe quel attaquant en levant un bras au-dessus de sa tête et en appelant « brick » avant que le disque ne soit ramassé ».",
    rules: ['7.12.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question:
      'Pour que mes adversaires comprennent que je vais redémarrer au « brick », je n’ai qu’à lever un bras au dessus de ma tête ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Je dois aussi appeler « brick » (avant de ramasser le disque)',
    rules: ['7.12.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question: 'Je peux appeler le « brick » uniquement quand j’ai le disque en main ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Je dois le faire avant de le ramasser.',
    rules: ['7.12.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STATUS,
    question: 'Quand est-ce que le disque est dit « mort » ? (plusieurs réponses possibles)',
    image: undefined,
    answerChoices: {
      a: 'Après le début d’un point, jusqu’à ce que le « pull » soit effectué',
      b: 'Après le « pull » ou après un « turnover » quand le disque doit être amené à l’endroit où le point pivot doit être établi, jusqu’à ce qu’un pivot soit établi',
      c: 'Après un « call » qui arrête le jeu ou n’importe quel autre arrêt jusqu’à ce que le disque soit « checké »',
      d: 'Après que le disque touche le sol jusqu’à ce que la possession soit établie par l’équipe appropriée.',
    },
    correctAnswers: ['a', 'b', 'c', 'd'],
    explanation: 'Ces 4 situations correspondent à un disque mort.',
    rules: ['8.1.', '8.1.1.', '8.1.2.', '8.1.3.', '8.1.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question: 'Le marqueur débute le compte en disant toute de suite « 1 » puis « 2 », etc.',
    image: undefined,
    answerChoices: {
      a: 'Pas de problème',
      b: 'Il se trompe sur le compte',
    },
    correctAnswers: ['b'],
    explanation: 'Il doit toujours débuter en disant « Compté » ou « Stalling »',
    rules: ['9.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.COUNT,
    question: 'L’intervalle de temps entre  « compté » et « 1 » doit être d’une seconde.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Cet intervalle peut être plus petit. C'est l'intervalle entre les nombres du compte qui doit être au moins d'une seconde.",
    rules: ['9.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question: 'Lors du compte, l’intervalle de temps entre chaque nombre est d’une seconde minimum ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['9.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.COUNT,
    question: ' Je n’ai pas obligation de dire « dix » à la fin du compte. je peux le remplacer par « stall-out » ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `
Je dois dire « 10 » puis « fin du compte » ou « stall-out » (certaines personnes disent « time » par habitude).
Si au D de « dix » (ou T de « ten »), le lanceur avait le disque en main et même s’il tente sa passe, il y a « stall-out ».
    `,
    rules: ['13.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  // {
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
    category: Categories.COUNT,
    question: 'Je peux contester un « stall-out » si je n’ai pas entendu le compte ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: 'Le défenseur doit compter à voix haute afin qu’il soit entendu par le lanceur.',
    rules: ['9.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  //   {
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
    category: Categories.COUNT,
    question:
      'Je suis la défenseuse à la marque. J’en suis à 5 au compte et m’éloigne à plus de 3 mètres de la lanceuse. Que dois-je faire si je reviens à moins de 3 mètres et suis encore à la marque ?',
    image: undefined,
    answerChoices: {
      a: 'Je reprends le compte à 1',
      b: 'Je reprends le compte à 5',
      c: 'Je reprends le compte à 6',
    },
    correctAnswers: ['a'],
    explanation:
      "C'est une nouvelle marque, je dois reprendre le compte à 1. Idem si quelqu'un d'autre me remplace à la marque.",
    rules: ['9.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question: " Après l'appel d'une faute par l’attaque, la défense ne conteste pas. Le compte reprend à combien ?",
    image: undefined,
    answerChoices: {
      a: 'À « compté 1 »',
      b: 'Là où il était',
      c: 'Là où il était + 1',
      d: 'Là où il était - 2',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['9.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.COUNT,
    question: 'Après un appel de la défense, l’attaque ne conteste pas. Le compte reprend à combien au maximum ?',
    image: undefined,
    answerChoices: {
      a: 'À « compté 8 »',
      b: 'À « compté 7 »',
      c: 'À « compté 9 »',
      d: 'Là où il était',
    },
    correctAnswers: ['c'],
    explanation:
      "Le compte ne peut pas reprendre à plus de 9 sur une transgression appelée par la défense et acceptée par l'attaque. Attention, cela ne concerne pas le « pick » (reprise à 6 maximum).",
    rules: ['9.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question:
      '« Fin du compte » (« stall-out ») est appelé par le marqueur. Le lanceur conteste. À combien reprend le compte ?',
    image: undefined,
    answerChoices: {
      a: 'À « compté 6 »',
      b: 'À « compté 7 »',
      c: 'À « compté 8 »',
      d: 'À « compté 9 »',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['9.5.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question:
      'Une faute (défensive ou offensive) contestée ou un « pick » est appelé à 4. Le compte reprend à « compté 5 ».',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: `
Lorsque le compte (x) est inférieur à 5, on reprend le compte (x) là où il en était en rajoutant 1. Soit « compté « x » plus 1 »
Si le compte était égal ou supérieur a 5, on reprend à « compté 6 » (c’est le maximum)`,
    rules: ['9.6.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question: 'Un « pick » est appelé à 7. Le compte reprend à combien ?',
    image: undefined,
    answerChoices: {
      a: 'À « compté 5 »',
      b: 'À « compté 6 »',
      c: 'À « compté 7 »',
    },
    correctAnswers: ['b'],
    explanation: `
Lorsque le compte (x) est inférieur à 5, on reprend le compte (x) là où il en était en rajoutant 1. Soit « compté « x » plus 1 »
Si le compte était égal ou supérieur a 5, on reprend à « compté 6 » (c’est le maximum)`,
    rules: ['9.6.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  //   {
  //     category: Categories.CHECK,
  //     question: "À quel moment doit on faire un check pour redémarrer le jeu?",
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
    category: Categories.CHECK,
    question:
      'Il y a un appel, avant qu’une passe ne soit lancée. Certains joueurs n’ont pas entendu l’appel et continuaient à jouer jusqu’a ce qu’ils soient avertis. Le jeu étant mort, où se placent ils ?',
    image: undefined,
    answerChoices: {
      a: "Là où ils étaient au moment de l'appel",
      b: 'Là où ils se sont arrêtés',
      c: "L'appel est annulé car les joueurs ne l'ont pas entendu",
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['10.2.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Le jeu s’arrête après qu’une passe ait été effectuée. Le disque est retourné au lanceur. Où se replacent les joueurs ?',
    image: undefined,
    answerChoices: {
      a: "Là où ils étaient au moment de l'appel",
      b: 'Là où ils étaient au moment de la passe',
      c: "Au premier des deux événements (la passe ou l'appel)",
      d: "Au dernier des deux événements (la passe ou l'appel)",
    },
    correctAnswers: ['c'],
    explanation:
      'Ils doivent se replacer là où ils étaient au moment où le disque a été lâché ou au moment de l’appel, considérant l’évènement arrivé en premier',
    rules: ['10.2.2.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CHECK,
    question:
      'Le jeu s’arrête après qu’une passe ait été effectuée. Le résultat de l’action est maintenu. Où se replacent les joueurs ?',
    image: undefined,
    answerChoices: {
      a: "Là où ils étaient au moment où le jeu s'est arrêté",
      b: 'Là où ils étaient au moment où la passe est lancée',
      c: 'Là où ils étaient au moment où la passe est arrivée',
    },
    correctAnswers: ['c'],
    explanation:
      'Ils doivent se replacer là où ils étaient au moment où le disque a été attrapé ou quand le disque à touché le sol',
    rules: ['10.2.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CHECK,
    question:
      'Le jeu est mort suite à un appel. Je me suis replacé au bon endroit, contrairement à d’autres joueurs qui marchent encore ou qui ne sont pas là où ils devraient être. Malgré tout, le marqueur « check » le disque.',
    image: undefined,
    answerChoices: {
      a: 'Tant pis, le check a eu lieu donc le jeu doit reprendre',
      b: 'Je peux appeler une violation si je suis attaquant',
      c: 'Je peux appeler une violation si je suis défenseur',
    },
    correctAnswers: ['b', 'c'],
    explanation:
      'Tous les joueurs peuvent appeler « violation ». Alors tout le monde se replace correctement, s’immobilise et attend le check pour bouger.',
    rules: ['10.7.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Le jeu est mort suite à un appel. Je me suis replacé au bon endroit. Je peux « checker » le disque dès que je me suis remis à ma place.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Je « check » le disque après m’être assuré avec l’adversaire le plus proche que tous les joueurs se sont replacés correctement et sont immobiles.',
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
      'Le jeu est mort et tous les joueurs sont placés correctement. J’ai le disque et mon marqueur est à 1 mètre de moi. Je peux « checker » le disc au sol et appeler « disc in » pour relancer le jeu ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Si le disque est à la portée d’un défenseur, le défenseur doit « checker » le disque pour reprendre le jeu.',
    rules: ['10.6.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Le jeu est mort et tous les joueurs sont placés correctement. J’ai le disque et mon adversaire le plus proche est à 5 mètres de moi. Pour reprendre le jeu l’adversaire plus proche doit toucher le sol et appeler « disc in » pour relancer le jeu ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Si le disque n’est pas à la portée d’un défenseur c’est au porteur du disque de checker le sol et d’appeler « disc in » pour reprendre le jeu.',
    rules: ['10.6.1.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Le jeu est mort et toutes les joueuses sont placées correctement. Le disque est au sol et à la portée d’aucune joueuse. Comment relance-t-on le jeu ?',
    image: undefined,
    answerChoices: {
      a: 'La joueuse la plus proche va au disque pour faire le check',
      b: 'La défenseuse la plus proche appelle « disc in »',
      c: 'La défenseuse la plus proche fait un check au sol',
      d: "L'attaquante la plus proche fait un check au sol",
    },
    correctAnswers: ['b'],
    explanation: 'Parfois, les joueurs ont coutume de checker le sol en même temps (pas notifié dans le règlement).',
    rules: ['10.6.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      "Je tente une passe avant le « check » ou après qu'une violation de placement ait été appelée. Elle n’est pas réceptionnée. Que se passe-t-il ?",
    image: undefined,
    answerChoices: {
      a: 'Le résultat de la passe est conservé',
      b: 'Le résultat de la passe tient si elle est ratée',
      c: 'Le disque revient au lanceur quel que soit le résultat de la passe',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: ['10.7.', '10.7.1.', '10.7.5.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      ' Je vais chercher le disque en touche suite à un turnover. Avant ma passe je dois checker le disque au sol',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Le jeu n’est pas arrêté au moment d'un turnover. Il n’y a donc pas de check au sol, ni de check de l’adversaire.",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Je me place sur le point de brick. Avant de faire ma passe je dois attendre que mon adversaire « check » le disque',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Le brick ne fait pas partie des situations requiérant un check. Dès que mon pied de pivot est établi sur le brick, je peux lancer. La règle 7.5.2 le confirme également.',
    rules: ['10.1.', '7.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Turnover dans ma zone d’en-but. Je ramasse le disque et je sors de ma zone. Je dois checker le disque au sol avant ma passe.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Je peux faire ma passe, sans check, soit de là où j’ai ramassé le disque soit à l’entrée de ma zone (pied de pivot hors de la zone). Les annotations (10.1) précisent également ce cas.',
    rules: ['10.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Turnover pour mon équipe dans la zone d’en-but adverse. Je ramasse le disque, et sors de leur zone. Je dois checker le disque au sol avant ma passe.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Je peux faire ma passe, sans check. Une fois sorti de la zone, je peux faire ma passe sans check. Les annotations (10.1) précisent également ce cas.',
    rules: ['10.1.', '13.10.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Je suis dans la zone adverse, sur le point de rattraper la passe de mon partenaire. Subissant un contact, j’appelle une faute. Mon adversaire ne conteste pas. Je dois reprendre le disque, me placer devant leur zone et attendre le check pour pouvoir jouer.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'le jeu est mort au moment de l’appel. Le défenseur doit checker le disque dans la zone et appeler « disc in » pour que tous les joueurs puissent bouger. Dès lors, je peux aller me placer devant la zone et jouer.',
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.OUT,
    question: 'Les lignes de périmètre font partie du terrain.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Elles sont en dehors du jeu.',
    rules: ['2.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      'Un défenseur sort du terrain pour attraper le disque ou empêcher qu’il revienne dans l’aire de jeu. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "Il n'y a pas turnover car le défenseur n'est pas dans le terrain",
      b: 'Il y a turnover et le jeu reprend là où le disque a quitté le terrain',
      c: "Il y a turnover et le jeu reprend au point le plus proche de là où le disque s'est arrêté",
      d: 'Il y a turnover et le jeu reprend au point le plus proche de là où le disque a été touché par le défenseur',
    },
    correctAnswers: ['d'],
    explanation:
      'Il y a un « turnover » et le jeu reprend dans la zone centrale au point le plus proche de là où le défenseur a touché/intercepté le disque. Seuls les défenseurs sont considérés « dans l’aire de jeu » lorsqu’ils sont à l’extérieur.',
    rules: ['11.2.', '11.8.', '11.8.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question:
      'Une attaquante prend son appel à l’extérieur du terrain, attrape le disque avec les pieds décollés du sol et atterrit dans la zone d’en-but adverse. Le point est-il validé ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation: 'En prenant son appel à l’extérieur du terrain, la joueuse est hors-limites au moment du catch.',
    rules: ['11.3.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      'En effectuant sa passe, le lanceur met un pied en dehors du terrain. Même si la passe est réussie le disque revient au marqueur qui avait appelé « hors-limites ».',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Tant que son pied de pivot est dans le terrain, le lanceur est considéré dans l’aire de jeu.',
    rules: ['18.2.1.', '11.3.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      "Après avoir attrapé le disque dans le terrain, l'attaquante sort du terrain. L’équipe adverse récupère le disque.",
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Elle garde le disque et établit son pivot dans l’aire de jeu au point le plus proche de l’endroit où elle est sortie',
    rules: ['11.3.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.OUT,
    question:
      'Un attaquant va chercher le disque en dehors de l’aire de jeu. Il établit son pivot sur la ligne de touche et fait une passe décisive. Le point est-il valide ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['a'],
    explanation: `Le pied de pivot doit être placé dans le terrain et les lignes n'en font pas partie.
Cependant, les annotations (13.11) précisent que les lignes étant très étroites et la conséquence sur le jeu négligeable, il est acceptable de placer son pied de pivot sur la ligne.`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question:
      'Le disque roule en dehors de l’aire de jeu et revient dans le terrain. L’attaquante le joue de là où il s’est arrêté. Que puis-je appeler ?',
    image: undefined,
    answerChoices: {
      a: 'Une violation',
      b: 'Une infraction',
      c: 'Une faute',
      d: 'Rien, le jeu a déjà repris',
    },
    correctAnswers: ['b'],
    explanation:
      "L’attaquante doit établir son pivot dans l’aire de jeu au point le plus proche de l’endroit où le disque est sorti. C'est une infraction (« travel »)",
    rules: ['13.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question:
      'Deux attaquantes attrapent le disque simultanément. L’une des deux est hors du terrain. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Turnover',
      b: "L'attaquante en jeu récupère la possession",
      c: 'Le disque est retourné au lanceur',
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
      'Le disque sort à 5 mètres du terrain. Une personne non joueur va le chercher et me fait une passe alors que je suis dans le terrain. Je place mon pied pivot au bon endroit et fais une passe décisive. Le point est valide.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Le lanceur doit porter le disque sur les trois derniers mètres jusqu’à l'aire de jeu. Il y a donc « violation ».",
    rules: ['11.9.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question:
      'À l’engagement, je m’aperçois qu’un attaquant est sorti de sa zone avant le lancer. Puis-je appeler quelque chose ?',
    image: undefined,
    answerChoices: {
      a: 'Non',
      b: 'Oui, « travel »',
      c: 'Oui, « offside »',
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
      "À l’engagement, un partenaire sur la « side line » (au bord du terrain) m’avertit que lanceur avait un pied sur la ligne et qu'un autre attaquant avait un pied en dehors de leur zone au moment du lancer. Puis-je appeler quelque chose ?",
    image: undefined,
    answerChoices: {
      a: "Non, il n'y a pas d'infraction aux règles",
      b: "Non, car c'est un joueur hors du terrain qui m'a prévenu",
      c: "Oui, c'est un hors-jeu (offside)",
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
      'J’attrape le disque en plongeant. Le contact au sol me fait perdre le disque. Comme j’avais maitrisé le disque avant de le perdre, je le conserve.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'La perte du disque dûe à un contact au sol ou à un coéquipier ou à un adversaire légitimement placé induit un changement de possession (« turnover »)',
    rules: ['12.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question:
      "Je suis en attaque et je saute pour attraper le disque. Je suis au-dessus de l’aire de jeu au moment où je le maitrise et j'atterris hors du terrain. Il y a « turnover ».",
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
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
      'Au moment où j’attrape le disque, j’ai un pied dans le terrain et un en dehors (simultanément). Un défenseur appelle « out ». A-t-il raison ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['a'],
    explanation: 'Même si un des deux pieds est dans le terrain, je suis considéré comme hors-limite. Il y a turnover.',
    rules: ['11.4.', '11.4.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.RECEIVER,
    question:
      'Au moment où j’attrape le disque, j’ai un pied sur la ligne d’en-but adverse et l’autre dans la zone attaquée. Le point est-il valable ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation:
      'La ligne d’en-but ne faisant pas partie de la zone, l’attaquant est toujours considéré dans l’aire de jeu centrale, malgré son autre appui.',
    rules: ['14.1.', '14.1.1.', '2.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question: 'Une attaquante et une défenseuse attrapent simultanément le disque. Comment se règle cette situation ?',
    image: undefined,
    answerChoices: {
      a: "L'attaquante conserve le disque",
      b: 'La défenseuse conserve le disque',
      c: 'Le disque est retourné au lanceur',
    },
    correctAnswers: ['a'],
    explanation:
      'Priorité à l’attaquante qui conserve le disque. Sans appel de l’une ou l’autre, il n’y a pas d’arrêt de jeu.',
    rules: ['12.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.RECEIVER,
    question:
      'Le disque plane. Mon adversaire ne cesse de se placer entre le disque et moi uniquement pour m’empêcher de l’attraper. Il a le droit tant qu’il ne me touche pas. Il protège son disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Quand le disque est en l’air, un joueur ne peut se déplacer de manière à uniquement empêcher un adversaire de prendre une trajectoire inoccupée vers le disque. Il fait obstruction aux déplacements de l’adversaire. Il y a donc une violation.',
    rules: ['12.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question:
      'J’attrape le disque puis percute mon adversaire. Il n’y a pas faute car j’ai attrapé le disque avant de toucher mon adversaire.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      '« Faire action de jeu sur le disque » n’est pas une excuse valide pour créer un contact avec d’autres joueurs.',
    rules: ['12.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question:
      'Lors de mon replacement dans le stack, mon adversaire me touche avec le bras. J’appelle faute et mon adversaire conteste. Il a tort.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Mon adversaire provoque un contact mineur, n'ayant pas d'impact sur le jeu. Il avait donc raison de contester car c’est moi qui n’aurait pas dû appeler la faute.",
    rules: ['12.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.RECEIVER,
    question:
      'Lors de mon replacement dans le stack, mon adversaire me fait un croche-pied. J’appelle faute et mon adversaire conteste. Il a tort.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "Un croche-pied qui me fait chuter n'est pas un contact mineur, je peux donc appeler une faute indirecte.",
    rules: ['17.8.1.', '17.8.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.RECEIVER,
    question: 'Pour catcher un disque, je m’appuie sur l’épaule d’un partenaire. Est-ce autorisé ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation:
      'Aucun joueur ne peut aider physiquement le mouvement d’un autre joueur, ou utiliser un équipement pour faciliter le contact avec le disque.',
    rules: ['12.10.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Mon partenaire me fait une passe. Le disque touche des brins d’herbe mais je l’attrape avant qu’il ne touche le sol. Un défenseur appelle « down » (« à terre »). Je conteste car le disque n’a pas vraiment touché le sol. Qui a raison ?',
    image: undefined,
    answerChoices: {
      a: "Moi, il n'y a pas down",
      b: 'Le défenseur, le disque est down',
    },
    correctAnswers: ['b'],
    explanation:
      'Si le disque touche l’herbe ou une fleur avant d’être catché, il est considéré comme « down ». Il y a donc un changement de possession (« turnover »). Voir dans les règles le lexique et la définition de « sol »',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'En tentant d’intercepter la passe adverse, le défenseur « drope » le disque (qui tombe à terre). Il ne récupère pas la possession du disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Dès qu’une passe a échoué (dans le respect des règles) l’équipe adverse récupère la possession du disque.',
    rules: ['13.1.', '13.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Je suis en défense. Je fais sortir volontairement le disque du terrain pour faire échouer la passe de mon adversaire. Mon équipe récupère la possession du disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: 'Les adversaires n’ayant pas complété leur passe, il y a un turnover.',
    rules: ['13.1.', '13.1.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'À la réception du « pull », je touche le disque involontairement avant qu’il ne touche le sol. Le disque tombe à terre. Il n’y a pas turnover car je n’ai pas voulu l’attraper.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'C’est un « dropped pull » et il y a donc turnover. Si je touche le disque je dois l’attraper sinon il y a turnover à l’endroit où le disque s’arrête.',
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Je tente de réceptionner le « pull » à l’extérieur de l’aire de jeu. Je drope le disque. Un défenseur appelle un « turnover ». Je ne suis pas d’accord car j’étais en-dehors du terrain et je voulais juste gagner du temps pour jouer le disque au point de brick. Qui a raison ?',
    image: undefined,
    answerChoices: {
      a: "Moi, il n'y a pas turnover",
      b: "Le défenseur, c'est un turnover",
    },
    correctAnswers: ['b'],
    explanation:
      'Le disque est toujours « vivant » même s’il vole en dehors du terrain. Si je l’attrape, je le joue dans l’aire de jeu à l’endroit le plus proche de là où je l’ai attrapé.',
    rules: ['7.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'En voulant rattraper la passe de mon partenaire, je commets une faute sur mon défenseur. Je ne conteste pas. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Le disque est retourné au lanceur',
      b: "C'est un turnover et mon défenseur récupère le disque",
      c: "C'est un turnover et n'importe quel défenseur peut prendre le disque",
    },
    correctAnswers: ['b'],
    explanation:
      'Mon défenseur récupère le disque. Une faute ayant été appelée, le jeu s’arrête. Sur une faute offensive non contestée, c’est obligatoirement le défenseur qui l’a subie qui récupère le disque.',
    rules: ['13.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Un attaquant attrape le disque en heurtant son défenseur. Ce dernier appelle une faute qui n’est pas contestée. Comme le disque a été catché, il n’y a pas turnover et le disque revient au lanceur.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Sur une faute offensive non contestée, c’est le défenseur qui l’a subie qui récupère le disque indépendamment du fait que l’attaquant l’ait attrapé ou non.',
    rules: ['13.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Je fais une passe face au vent. Le disque me revient et je l’attrape sans que personne ne l’ait touché. N’ayant pas eu l’intention de me faire une auto-passe, je peux conserver le disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'C’est un « double touch », que l’intention y soit ou pas. Je ne peux pas récupérer mon lancer si personne ne l’a touché.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question: 'La défense appelle un turnover. L’attaque conteste. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Le disque est retourné au lanceur',
      b: 'Le turnover est maintenu, on ne peut pas contester un turnover',
    },
    correctAnswers: ['a'],
    explanation: 'Le disque est retourné au dernier lanceur non-contesté.',
    rules: ['13.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Je lance le disque à « 10 » et ma passe est ratée. Mon défenseur, appelle « fin du compte » (ou « stall-out ») lorsque le disque vole. Je ne conteste pas. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "La défense récupère le disque quoi qu'il arrive de ma passe",
      b: 'La défense récupère le disque seulement si ma passe était réussie',
      c: 'La défense récupère le disque seulement si ma passe était ratée',
    },
    correctAnswers: ['a'],
    explanation: `Le jeu reprend là où je suis (que la passe soit réussie ou ratée) et tous les joueurs se replacent là où ils étaient au moment de l’appel.

Si mon défenseur prend le disque en main, il devient le lanceur et je « check » le disque pour  relancer le jeu.
Si mon défenseur ne veut pas lancer, il ne prend pas le disque (le laisse au sol) et je dois alors « checker » le disque au sol pour relancer le jeu.`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Mon marqueur appelle « fin du compte » (ou « stall-out ») au moment où je lance et je conteste. Ma passe est ratée. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "Le jeu reprend à l'endroit où je suis et je récupère le disque suite au stall-out contesté",
      b: "Le jeu reprend à l'endroit où je suis et la défense récupère le disque suite au stall-out",
      c: "Le stall-out contesté est ignoré puisqu'il y a eu turnover et le jeu reprend là où le disque s'est arrêté",
    },
    correctAnswers: ['c'],
    explanation:
      'Le jeu s’arrête puis reprend par un check à l’endroit où le disque s’est arrêté ou là où il a été intercepté.',
    rules: ['13.4.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Je lance le disque et ma passe est réussie. Mon adversaire appelle « fin du compte » (ou « stall-out ») que je conteste car il comptait trop vite et que je n’ai pas eu le temps d’appeler « compte rapide « (ou « fast count »). Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "Le stall-out ne peut pas être contesté, j'aurais dû appeler Fast Count plus tôt",
      b: 'Le stall-out est contesté, le jeu reprend à « compté 8 »',
    },
    correctAnswers: ['b'],
    explanation: 'Le disque revient au lanceur et le jeu reprend par un check et « compté 8 »',
    rules: ['13.4.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Je lance le disque et ma passe est ratée (ou interceptée). Mon adversaire appelle « fin du compte » (ou « stall-out »). Je conteste car il comptait trop vite et que je n’ai pas eu le temps d’appeler « compte rapide « (ou « fast count »). Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "Le stall-out ne peut pas être contesté, j'aurais du appeler Fast Count plus tôt",
      b: 'Le stall-out est contesté le jeu reprend à « compté 8 »',
      c: 'Le stall-out contesté est ignoré et le turnover est maintenu',
    },
    correctAnswers: ['c'],
    explanation:
      'Ayant raté ma passe, le turnover est maintenu et le jeu reprend par un check à l’endroit où est le disque.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Je suis en défense. J’attrape le disque en dehors du terrain. Ayant « catché » le disque hors du terrain, je peux le laisser à terre pour qu’un partenaire fasse la remise en jeu.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Quelque soit l’endroit où je l’intercepte, je dois le garder et faire la passe.',
    rules: ['13.5.', '13.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'J’ai intercepté le disque. Me rendant compte que mon lacet est défait je pose le disque à terre pour le refaire. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Je peux refaire mon lacet avant de reprendre le jeu',
      b: "Je dois appeler « technical » pour avoir le droit d'arrêter le jeu pour un problème technique comme mon lacet",
      c: "Je n'ai pas le droit d'arrêter le jeu et je dois jouer avec mon lacet défait",
      d: "C'est un double-turnover car j'ai posé le disque par terre",
    },
    correctAnswers: ['c'],
    explanation:
      "Je ne peux pas arrêter le jeu en appelant « technical » pour refaire mon lacet, seulement prolonger un arrêt de jeu déjà existant. Il y a une violation de ma part, sans « turnover », si j'arrête le jeu pour refaire mon lacet.",
    rules: ['13.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Mon adversaire rate sa passe. Le disque roule dans le terrain. Je l’arrête. Je peux établir mon pivot soit à l’endroit où le disque s’est arrêté soit où il a touché le sol.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Je n’ai pas le choix. Le pivot s’effectue à l’endroit où le disque s’est arrêté (ou sorti).',
    rules: ['13.7.', '13.7.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'Mon adversaire rate sa passe. Le disque roule dans le terrain, sort des limites puis revient dans l’aire de jeu. J’établis mon pivot à l’endroit où il s’est arrêté dans le terrain.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Le pivot s’établit dans la zone centrale, au point le plus proche d’où le disque est sorti la première fois.',
    rules: ['13.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "Mon adversaire rate sa passe. Le disque roule dans ma zone d'en-but et sort sur le côté de celle-ci. Où dois-je reprendre le jeu ?",
    image: undefined,
    answerChoices: {
      a: 'Là où le disque est tombé',
      b: 'Là où le disque a quitté le terrain',
      c: "Dans la zone centrale, au point le plus proche d'où le disque est sorti",
    },
    correctAnswers: ['c'],
    explanation: 'Dans ce cas, ce sera au niveau du plot situé à l’entrée de ma zone.',
    rules: ['13.8.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      "Mon adversaire rate sa passe. Le disque roule, entre dans sa zone d'en-but et s’arrête dedans après avoir décrit une courbe. Où vais-je établir mon pivot ?",
    image: undefined,
    answerChoices: {
      a: "Là où le disque s'est arrêté",
      b: "Dans la zone centrale, en face de là où il s'est arrêté",
    },
    correctAnswers: ['b'],
    explanation:
      'Je ramasse le disque et me replace sur la ligne de but au point le plus proche de là où il s’est arrêté.',
    rules: ['13.10.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question: '« Turnover » en faveur de mon équipe dans ma zone d’en-but. Où dois-je établir mon pivot?',
    image: undefined,
    answerChoices: {
      a: "À l'endroit où le disque s'est arrêté",
      b: "Sur ma ligne d'en-but au point le plus proche de là où le disque s'est arrêté",
    },
    correctAnswers: ['a', 'b'],
    explanation: `Les deux options sont valables. Avant de ramasser le disque, je peux indiquer à mon marqueur ma décision.`,
    rules: ['13.11.', '13.11.1.', '13.11.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question:
      'J’appelle la « fin du compte » (« stall-out ») et mon adversaire n’a pas lancé le disque. Le jeu est arrêté. Il me tend le disque. Je suis obligé de le prendre.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Si je le prends, je suis obligé de le lancer (après le « check »). Si je ne le veux pas, je le lui laisse. Il doit alors le placer au sol et le « checker » pour que tous les joueurs puissent bouger et qu’un de mes partenaires ramasse le disque à ma place.',
    rules: ['13.5.', '13.5.1.', '13.5.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.GOAL,
    question:
      'J’attrape le disque en ayant simultanément un pied dans la zone d’en-but attaquée et l’autre sur la ligne de but. Le point est-il marqué ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation:
      'À la réception du disque, il faut avoir les deux appuis dans la zone attaquée. La ligne de but ne faisant pas partie de la zone, le joueur en contact avec celle-ci n’est pas considéré dedans.',
    rules: ['14.1.', '14.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.GOAL,
    question:
      'Au moment où j’attrape le disque, je suis sur un pied dans la zone adverse. Mon pied est dans la zone mais mon élan me fait sortir du terrain. Le point est marqué malgré ma sortie du terrain.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['14.1.', '14.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.GOAL,
    question:
      'Je saute en prenant appui dans la zone attaquée. J’attrape le disque en l’air mais avec mon élan je retombe hors de l’aire de jeu. Le point est marqué car mes derniers appuis avant le catch étaient dans la zone adverse.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Le point n’est pas valable. Il aurait fallu atterrir dans la zone.',
    rules: ['14.1.', '14.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.GOAL,
    question:
      'Je saute en prenant appel dans la zone centrale. J’attrape le disque en l’air et je retombe dans la zone d’en-but adverse. Le point est-il marqué ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['14.1.', '14.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Un non-respect des règles lié au marquage sur le porteur ou un marcher (« travel ») est :',
    image: undefined,
    answerChoices: {
      a: 'Une infraction',
      b: 'Une violation',
      c: 'Une faute',
    },
    correctAnswers: ['a'],
    explanation: 'Elles n’arrêtent pas le jeu',
    rules: ['15.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Une transgression des règles due au contact non mineur entre deux ou plusieurs adversaires est :',
    image: undefined,
    answerChoices: {
      a: 'Une infraction',
      b: 'Une violation',
      c: 'Une faute',
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
      'Je suis joueur. Je vois clairement que mon partenaire a subi une faute. Je peux l’appeler car je n’ai aucun doute et suis proche de l’action.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Seul le joueur ayant subi la faute peut l’appeler. Si les joueurs concernés me le demandent, je peux dire ce que j’ai vu.',
    rules: ['15.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question:
      'Je n’ai pas le disque mais suis en attaque. Nos adversaires placent une défense de zone. Constatant qu’il y a deux défenseurs à moins de 3 mètres du lanceur, je peux appeler « double équipe » (ou « double team ») ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "N'importe quel joueur en attaque peut appeler un « double team », contrairement aux autres infractions de marquage qui ne peuvent être appelées que par le porteur de disque",
    rules: ['15.5.', '15.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Qui est autorisé à appeler un « marcher » ?',
    image: undefined,
    answerChoices: {
      a: 'Seulement le défenseur à la marque',
      b: 'Tous les défenseurs sur le terrain',
      c: "Tous les membres de l'équipe en défense, même en dehors du terrain",
    },
    correctAnswers: ['b'],
    explanation: '',
    rules: ['15.5.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Qui est autorisé à appeler une violation ?',
    image: undefined,
    answerChoices: {
      a: 'Tous les joueurs',
      b: "Tous les membres de l'équipe, même en dehors du terrain",
    },
    correctAnswers: ['a'],
    explanation: 'Soit en donnant son nom spécifique, soit en disant « violation ».',
    rules: ['15.6.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Le jeu s’arrête dès qu’une faute ou une violation est appelée ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
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
      'À la fin de son lancer, l’attaquante me met la main au visage. J’appelle  une « faute. » La passe est réussie. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Turnover car la lanceuse a fait une faute pendant son geste de lancer',
      b: 'Pas de turnover le disque est retourné à la lanceuse',
      c: "Pas de turnover et le jeu reprend à l'endroit où le disque a été réceptionné",
    },
    correctAnswers: ['c'],
    explanation:
      "Le règlement précise qu’« un contact accidentel se produisant dans la continuité du lancer n'est pas une raison suffisante pour appeler une faute, mais doit être évité ». Le jeu reprend à l’endroit de la réception.",
    rules: ['17.7.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question: 'Puis-je changer d’avis si je constate que mon appel n’est pas correct ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['a'],
    explanation: 'Je peux appeler « rétracté » et je jeu reprend par un check.',
    rules: ['15.11.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question:
      "Je marque le lanceur et j'appelle une faute. Sa passe est attrapée par un des ses partenaires. M’apercevant que je me suis trompé dans mon appel j’annonce « rétracte ». Où reprend le jeu ?",
    image: undefined,
    answerChoices: {
      a: 'Le joueur ayant attrapé le disque reprend le jeu',
      b: 'Le disque est retourné au lanceur',
    },
    correctAnswers: ['a'],
    explanation: 'L’équipe d’attaque ayant conservé le disque, le jeu reprend par un check au niveau du réceptionneur.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS_INFRACTIONS_VIOLATIONS,
    question:
      'Au moment du lancer, un attaquant appelle une faute. La passe est ratée. L’attaquant se rétracte. La défense récupère le disque là où il se trouve et le jeu reprend par un check.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "Après un appel incorrect « rétracté », si l'équipe adverse gagne ou maintient la possession, les actions ayant suivi sont maintenues.",
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
      'J’appelle une violation au moment du lancer car le porteur n’avait pas mis un pied dans l’aire de jeu centrale après être allé chercher le disque en touche. La passe est ratée. Toute violation arrêtant le jeu, son échec n’est pas pris en compte. Le disque lui revient et le jeu reprend par un check.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `Si la faute ou la violation est appelée:
 contre le lanceur et que le lanceur tente tout de même une passe,
 ou pendant que le lanceur exécute un mouvement de lancer,
 ou se produit quand le disque est en l’air,
alors le jeu continue jusqu'à ce que la possession ait été établie.

Une fois la possession établie si l'équipe qui a appelé la faute ou la violation gagne ou maintient la possession après la passe, le jeu continue sans arrêt de jeu. Les joueurs reconnaissant ceci peuvent appeler « play on » pour indiquer que cette règle a été appelée.`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'Je lance le disque et subis à ce moment un contact de ma défenseuse. J’appelle faute. Ma passe est ratée. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Je récupère le disque',
      b: "C'est un turnover",
    },
    correctAnswers: ['a'],
    explanation:
      "Si l'équipe qui a appelé la faute ou la violation pense que la possession a été affectée par la faute ou la violation, le disque sera retourné au lanceur pour un « check »",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'Je lance le disque et subis à ce moment un contact du défenseur. J’appelle faute. Ma passe est arrivée comme je le souhaitais mais mon partenaire fait une erreur de main et drope la passe. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Je récupère le disque',
      b: "C'est un turnover",
    },
    correctAnswers: ['b'],
    explanation:
      "Si l'équipe qui a appelé la faute ou la violation pense que la possession n’a pas été affectée par la faute ou la violation, il y a turnover à l’endroit où se trouve le disque et le jeu reprend par un « check ». Dans cette situation de jeu,  le « drop » n’est pas dû à la faute appelée.",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'Je suis en attaque et n’ai pas le disque. Le disque est en l’air au moment où mon défenseur me fait tomber involontairement, lors d’une course n’influençant pas le jeu. La passe n’est pas rattrapée par mon partenaire concerné par la passe. La faute étant acceptée, le lanceur récupère le disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `Il y a turnover à l’endroit où se trouve le disque et le jeu reprend par un check.
Quel que soit le moment de l'appel de faute ou violation, si le jeu ne s'est pas complètement arrêté et que les joueurs impliqués des deux équipes s'accordent sur le fait que la faute ou la violation n'a pas affecté le résultat de l'action, ce résultat est maintenu. Cette règle ne peut être supplantée par aucune autre.

Si le résultat était un point marqué, le point est valable.
Si le résultat n'était pas un point marqué, les joueurs affectés peuvent réajuster leurs placements désavantageux provoqués par la faute, la violation ou l'appel, et le jeu reprend par un « check ».`,
    rules: ['16.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question: 'L’appel « jeu dangereux » existe ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "Ne pas tenir compte de l'intégrité des joueurs indépendamment de quand et si un contact se produit est considéré comme jeu dangereux et doit être traité comme une faute. Cette règle ne peut être supplantée par aucune autre. Si l'appel est accepté celui-ci doit être traité comme la faute la plus appropriée",
    rules: ['17.1.', '17.1.1.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS,
    question:
      'Je suis défenseuse. J’intercepte le disque et touche juste après une attaquante. Elle appelle « faute ». Je ne conteste pas. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Le turnover est maintenu',
      b: 'Le disque est retourné à la lanceuse',
      c: "Le disque est récupéré par l'attaquante qui a subit la faute",
    },
    correctAnswers: ['c'],
    explanation:
      "Après une faute de réception défensive (contact avec un réceptionneur avant, pendant, ou directement après que l'un ou l'autre des joueurs fasse une action sur le disque) non contestée, le réceptionneur gagne la possession à l’endroit de la faute. Le compte reprend à 1.",
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'Je saute et attrape en l’air le disque dans la zone d’en-but adverse. Mon défenseur me heurte et me fait atterrir en dehors du terrain. J’appelle une faute qu’il ne conteste pas. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "C'est un point",
      b: "C'est un turnover car je suis hors du terrain",
      c: 'Je garde le disque et reprends le jeu dans la zone central, au point le plus proche de là où je suis sorti',
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
      'J’attrape le disque en l’air. Mon défenseur me heurte et me fait atterrir en dehors de sa zone d’en-but. J’appelle une faute qu’il conteste. Le disque revient au lanceur.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Je conserve le disque là où j’ai atterri et le point n’est donc pas marqué.',
    rules: ['17.5.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'Je suis lanceur. Lorsque je pivote pour faire ma passe, le marqueur entre en contact avec moi. Je n’ai pas lancé le disque. J’appelle « contact » et il ne conteste pas. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "Le jeu s'arrête et le compte reprendra à 1",
      b: "Le jeu ne s'arrête pas et le compte reprend à 1",
      c: "« contact » n'est pas un appel valide",
    },
    correctAnswers: ['b'],
    explanation:
      'S’il ne conteste pas, le jeu ne s’arrête pas et le compte reprend à 1. En appelant une « infraction de contact » plutôt qu’une faute (il a le choix), le lanceur ne veut pas stopper le jeu.',
    rules: ['17.6.1.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question:
      'J’attrape le disque dans la zone adverse et le contact de mon adversaire me fait perdre le disque. J’appelle « faute ». Il ne conteste pas. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "C'est un point car il ne conteste pas",
      b: "Je récupère le disque et le jeu reprend à l'endroit de la faute",
      c: 'Je récupère le disque et le jeu reprend dans la zone centrale au plus près de la faute',
    },
    correctAnswers: ['b'],
    explanation:
      'Dans cette situation, si j’appelle une faute qui est acceptée, le jeu reprend par un check à l’endroit de la faute (dans la zone) et je dois me replacer au point le plus près sur la ligne de but pour faire ma passe. Le point n’est donc pas validé. Si j’avais appelé «strip», le point aurait été validé.',
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'J’attrape le disque dans la zone adverse et le contact de mon adversaire me fait perdre le disque. J’appelle « strip » (et non faute). Il ne conteste pas. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "C'est un point car il ne conteste pas",
      b: "Je récupère le disque et le jeu reprend à l'endroit de la faute",
      c: 'Je récupère le disque et le jeu reprend dans la zone centrale au plus près de la faute',
    },
    correctAnswers: ['a'],
    explanation:
      "Un « strip » se produit quand une faute défensive fait que le réceptionneur ou le lanceur laisse tomber le disque après qu'il a gagné la possession.",
    rules: ['17.3.', '17.3.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'L’attaquant que je marque me bouscule après avoir attrapé le disque. J’appelle  une « faute ». Il ne conteste pas le contact. Il garde le disque car il avait attrapé le disque avant de me toucher.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `Une faute de réception offensive se produit quand un réceptionneur entre en contact avec un défenseur avant, pendant ou directement après que chaque joueur fasse une action sur le disque.
Si la faute n’est pas contestée, il y a « turnover » et le défenseur gagne la possession où la faute s’est produite.
Si la passe est complète et la faute est contestée, le disque revient au lanceur.`,
    rules: ['17.2.1.', '17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question:
      'L’attaquant que je marque me bouscule avant d’attraper le disque. J’appelle  une « faute ». Il ne conteste pas le contact. Il y a turnover. Je ne suis pas obligé de prendre le disque. Je peux « checker » le disque sans le prendre et appeler « disc in » afin de relancer le jeu. La résolution est-elle correcte ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Si la faute n’est pas contestée, il y a « turnover » et le défenseur gagne la possession où la faute s’est produite.',
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question:
      'En position légitime, je suis en train de compter à 8. En réalisant son pivot, le lanceur me heurte. J’appelle une « faute » qu’il ne conteste pas. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Il garde le disque et je reprends à « compté 9 » après un check.',
      b: "On ajoute 2 au compte et cela atteint 10 donc c'est un turnover",
      c: "La faute est non contestée donc c'est un turnover",
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
      'En position légitime, je viens de compter à 8 le lanceur. En réalisant son pivot, il me heurte. J’appelle une « faute » qu’il conteste. Il garde le disque et je reprends à « compté 8 » après un check.',
    image: undefined,
    answerChoices: {
      a: "C'est un turnover",
      b: 'Le jeu reprend à « compté 6 »',
      c: 'Le jeu reprend à « compté 8 »',
      d: 'Le jeu reprend à « compté 9 »',
    },
    correctAnswers: ['b'],
    explanation: 'La faute étant contestée et le compte supérieur à 5, je reprends à « compté 6 ».',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question: 'Mon adversaire me fait un croche-pied. Ma chute n’influence pas le jeu. C’est une « faute indirecte ».',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: `
Une faute indirecte se produit quand il y a contact entre un réceptionneur et un défenseur qui n'affecte pas directement une tentative d'action sur le disque.
Si la faute est acceptée, le joueur ayant subi la faute peut se repositionner s’il a été désavantagé par la faute `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'J’ai le disque. Le marqueur étant trop près de moi, je le repousse avec le disque pour le lui faire comprendre et ainsi ne pas stopper le jeu. Il appelle une « faute ». A-t-il raison ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['a'],
    explanation: `Si je le pousse, il peut appeler une faute, auquel cas le jeu s’arrête et le compte reprend au dernier nombre annoncé +1 (maximum 9).
S'il est trop proche, je dois appeler « distance » ou « disc space » afin qu’il recule et reprenne le compte en ayant soustrait 1 au dernier chiffre énoncé.`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.FOULS,
    question:
      "Lors de ma course, mon défenseur me fait chuter involontairement alors que j’allais recevoir le disque. Ma chute m’empêche de l'attraper. Que se passe-t-il ?",
    image: undefined,
    answerChoices: {
      a: "C'est un turnover",
      b: 'Le disque est retourné au lanceur',
      c: 'Je récupère le disque',
    },
    correctAnswers: ['c'],
    explanation:
      'Dans la mesure où la faute a eu une influence sur le jeu (étant pressenti comme le receveur), il s’agit d’un contact non accidentel.',
    rules: ['17.2.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'Combien y a-t-il d’infractions ?',
    image: undefined,
    answerChoices: {
      a: '5',
      b: '6',
      c: '7',
    },
    correctAnswers: ['c'],
    explanation: `« Compte rapide » (« fast count »)
« Chevauchement » (« straddle »)
« Distance » (« disc space »)
« Encerclement » (« wrapping »)
« Double marquage » (« double team »)
« Vision »
« Marcher » (« Travel »)`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'Mon marqueur reprend le jeu et commence le compte sans avoir « checké » le disque. Que fais-je ?',
    image: undefined,
    answerChoices: {
      a: "J'appelle une violation",
      b: "J'appelle « compte rapide » (« fast count »)",
      c: 'Tant pis, on joue',
    },
    correctAnswers: ['b'],
    explanation:
      "Une infraction de marquage peut être contestée par la défense, dans ce cas le jeu s'arrête. Après toute infraction de marquage non contestée, le marqueur doit reprendre le compte au dernier nombre entièrement prononcé avant l'appel moins un (1).",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Ma marqueuse commence le compte sans avoir dit « compté » ou « stalling ». Je peux appeler une « faute » ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Les fautes sont liées aux contacts. C’est une infraction de marquage. Il faut appeler « compte rapide » (« fast count »).',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Si ma marqueuse ne soustrait pas correctement ou ne recommence pas le compte quand nécessaire, que fais-je ?',
    image: undefined,
    answerChoices: {
      a: "J'appelle une faute",
      b: 'J’appelle « compte rapide » (« fast count »)',
      c: 'Tant pis, je lui expliquerai après le point',
    },
    correctAnswers: ['b'],
    explanation: 'C’est une infraction de marquage.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Si le marqueur ne commence pas le compte au chiffre correct, le porteur du disque peut appeler une violation ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      'En général, le marqueur appelle une infraction de marque (« compte rapide » ou « fast count »), mais dans certains cas le marqueur peut appeler directement une violation.',
    rules: ['18.1.5.', '18.1.5.1.', '18.1.5.2.', '18.1.5.3.', '18.1.5.4.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Le marqueur doit être à un diamètre de disque (27,5cm) minimum de toutes les parties de mon corps y compris du pied pivot ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "Si le marqueur n'est pas à la bonne distance, le porteur du disque peut appeler une infraction de marque en fonction de la partie du corps qui est trop proche : disc space (torse), straddle (ligne entre les pieds), wrapping (ligne entre les mains)",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Le premier rideau de la zone est placé légitimement. Une passe parvient à le percer et un attaquant situé derrière ces défenseurs attrape le disque. Étant défenseur et à 1 mètre de ce joueur, je commence à compter. Lorsque le premier rideau se replace devant le lanceur, je stoppe mon compte et recule rapidement pour sortir des 3 mètres. Un attaquant non-porteur du disque appelle « double team » car il y a plus d’un joueur dans les 3 mètres à ce moment. Je conteste. Ai-je raison ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['a'],
    explanation: `
Une infraction de marquage peut être contestée par la défense, dans ce cas le jeu s’arrête.
Le « chassé croisé » entre le replacement du premier rideau et le défenseur du deuxième rideau est fréquent.
Le règlement précise « qu’une simple course dans cette zone des 3 mètres n'est pas un « double team ». Ma course pour sortir de cette zone ne peut donc pas être considérée comme une infraction.`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'La lanceuse appelle à mon encontre un « chevauchement » (« straddle »). Que dois-je faire ?',
    image: undefined,
    answerChoices: {
      a: 'Je dois reculer mes appuis pour reprendre une position légitime',
      b: "Le jeu s'arrête",
      c: "Je dois reprendre le compte au dernier nombre entièrement prononcé avant l'apppel moins 1",
    },
    correctAnswers: ['a', 'c'],
    explanation:
      "Pour toutes les infractions de marque (donc pas le « marcher »), le défenseur doit reprendre une position légitime PUIS reprendre le compte au dernier nombre entièrement prononcé avant l'apppel moins 1.",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'Je suis le marqueur. J’appelle un « marcher » à 4. Le lanceur a toujours le disque. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "Le jeu s'arrête",
      b: "Le jeu ne s'arrête pas",
      c: 'Le lanceur peut lancer',
      d: 'Je peux continuer de compter pendant que le lanceur replace correctement son pied de pivot',
    },
    correctAnswers: ['b'],
    explanation:
      'Le jeu n’est pas mort. Par conséquent, les autres joueurs peuvent être mobiles. Le lanceur doit établir son pivot au bon endroit avant de pouvoir lancer le disque. Pendant ce temps, je ne compte plus. Un fois placé correctement, je reprends le compte où il en était. Dans cette situation, « compté 5 ».',
    rules: ['18.2.6.', '18.2.6.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      "Au lieu d'appeler une « infraction de marquage », le lanceur peut appeler une « violation de marquage »?",
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: `En appelant une violation il stoppe le jeu, contrairement à s’il avait appelé une infraction.
Il peut le faire si:
- le compte n'est pas corrigé suite à l'appel d'une infraction,
- il n'y a pas de compte,
- il y a une énorme infraction de marquage,
- il y a une répétition d'infractions`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'J’appelle un « double team » et tente tout de même la passe. Elle est interceptée. Ayant appelé une infraction qui n’est pas contestée, je récupère le disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Si le lanceur appelle une infraction de marquage ou une violation de marquage et tente une passe avant pendant ou après le « call », l'appel n'a aucune conséquence et si la passe n'est pas attrapée le « turnover » est maintenu.",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'Une fois le disque attrapé, je dois m’arrêter en 3 foulées maximum.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "« Après avoir attrapé le disque et être retombé dans l’aire de jeu, le lanceur doit réduire sa vitesse aussi rapidement que possible, sans changer de direction, jusqu'à ce qu'il ait établi un point pivot ».",
    rules: ['18.2.2.1.', '18.2.2.1.1.', '18.2.2.1.2'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Je viens d’attraper le disque et fais une passe dès mon premier appui de décélération. Un défenseur appelle un « marcher » (« travel »). A-t-il raison ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation:
      "Je peux faire une passe avant d'avoir établi mon point de pivot à condition que je ne change pas de direction, que je n'augmente pas ma vitesse et que j'ai maximum 2 points de contact avec le sol avant de lâcher le disque (règle 18.2.2.1)",
    rules: ['18.2.2.1.', '18.2.2.1.1.', '18.2.2.1.2.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'J’attrape le disque et décélère en changeant la direction de ma course (courbe). Un adversaire appelle un « marcher ».',
    image: undefined,
    answerChoices: {
      a: 'Il a raison',
      b: 'Il a tort car je décélérais',
    },
    correctAnswers: ['a'],
    explanation:
      "L’appel est correct car après avoir attrapé le disque et être retombé dans l’aire de jeu, je dois réduire ma vitesse aussi rapidement que possible, sans changer de direction, jusqu'à ce que j’ai établi mon point pivot.",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'J’ai attrapé le disque en plongeant. Je fais une passe en étant agenouillé. La défense peut appeler un « Marcher » (« Travel »)',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `« Un lanceur qui est couché ou agenouillé n'a pas besoin d'établir de pivot ». Je peux donc faire ma passe dans cette position.
« S’il se lève il ne s'agit pas d'un « travel », du moment qu'il établit son pivot au même endroit ».`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      "Que se passe-t-il après une infraction de « marcher » contestée si la lanceuse n'a pas lancé le disque ?",
    image: undefined,
    answerChoices: {
      a: 'Le jeu est stoppé',
      b: "Le jeu continue sans s'arrêter",
    },
    correctAnswers: ['a'],
    explanation: "Si le « marcher » est contesté, le jeu s'arrête pour résoudre le désaccord.",
    rules: ['18.2.9.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Je suis en attaque. Je fais un appel et suis gêné dans ma course par une défenseuse. Je peux appeler « une obstruction »(« pick ») ?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Seuls les défenseurs peuvent appeler cette violation.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Je suis défenseur. Je subis une obstruction et je décide d’attendre 2 secondes avant d’appeler «obstruction (« pick »). Je n’ai pas le droit car tout appel doit se faire instantanément.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Avant de faire un appel de « pick », le défenseur peut retarder son appel jusqu’à deux secondes pour voir si l’obstruction va affecter le jeu.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'J’ai appelé un « pick » et le jeu s’est arrêté. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "Les joueurs se replacent là où ils étaient au moment de l'appel",
      b: "Je me repositionne à la position que j'aurais eue s'il n'y avait pas eu d'obstruction",
    },
    correctAnswers: ['a', 'b'],
    explanation:
      'Tous les joueurs se replacent là où ils étaient au moment de l’appel (« call ») et je me replace à la position que j’aurais eue s’il n’y avait pas eu d’obstruction.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'À l’appel d’une faute le jeu s’est arrêté. Je m’aperçois que mon positionnement et celui de mon adversaire risquent d’entraîner une «obstruction » (« pick »). Pouvons-nous modifier légèrement notre position pour éviter la violation ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['a'],
    explanation:
      "« Durant n'importe quel arrêt de jeu des adversaires peuvent s'accorder pour légèrement modifier leur position afin d'éviter des « picks » potentiels ».",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'Le « jeu est mort » suite à l’appel d’une faute. La marqueuse « check » le disque avant que tout le monde se soit replacé correctement. Que puis-je faire ?',
    image: undefined,
    answerChoices: {
      a: 'Rien',
      b: "J'appelle une « violation »",
      c: "J'appelle une « infraction »",
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
      'Le « jeu est mort » suite à l’appel d’une faute. Un attaquant se déplace avant que le marqueur « check » le disque. Je peux appeler une « violation » même si ce n’est pas mon adversaire direct.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      'Le jeu est figé jusqu’au « check ». Afin de s’assurer que tout le monde bouge au même moment, le marqueur peut décompter 3-2-1 à voix haute en y associant un décompte avec les doigts, bras levé pour être visible de tous. Avant ce décompte, il est de bon esprit d’annoncer aux joueurs à combien reprend le compte.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question: 'Je constate qu’un adversaire a besoin de sortir. Que puis-je faire pour l’aider?',
    image: undefined,
    answerChoices: {
      a: 'Rien',
      b: 'Appeler « blessure » (« injury »)',
      c: 'Appeler une violation',
    },
    correctAnswers: ['a'],
    explanation:
      "Une interruption pour « blessure » (« injury ») peut être appelée par le joueur blessé ou tout autre joueur de l'équipe du blessé. Le bon sens veut que vous l’appeliez si vous êtes le seul à vous en être rendu compte.",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'Sur un contre-appel, je me tords la cheville. Un partenaire appelle « injury ». Comme ce n’est pas moi qui l’ait appelé j’ai la possibilité de rester sur le terrain ou de sortir.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      "Que ce soit le joueur concerné ou un de ses partenaires qui ait appelé « injury », « si la blessure n’a pas été causée par un adversaire, le joueur doit choisir d'être remplacé ou de faire prendre un temps-mort à sa propre équipe ».",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question: 'Un adversaire me blesse. J’appelle « injury ». Suis-je obligé de sortir du terrain ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['b'],
    explanation:
      "Si la blessure a été causée par un adversaire, je peux choisir de rester sur le terrain ou d'être remplacé.",
    rules: ['19.1.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'Juste après le lancer de mon partenaire, je me blesse seul et appelle « injury ». La passe n’est pas rattrapée. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: "C'est un turnover",
      b: 'Le disque est retourné au lanceur',
      c: 'Le disque est récupéré par le joueur qui me remplace',
    },
    correctAnswers: ['a'],
    explanation: `« Si le disque était en l’air quand l'interruption a été appelée, le jeu continue jusqu'à ce que la passe soit attrapée ou que le disque touche le sol.
Si la blessure n'est pas la conséquence d'une faute, la complétion ou le « turnover » est maintenu et le jeu reprend à cet endroit après l’interruption ».`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'Je défends une passe longue et me blesse lors de ma course. J’appelle « injury » avant que mon adversaire attrape le disque. Ayant appelé « injury » lorsque le disque était en l’air et n’ayant pu défendre pleinement la passe, le résultat de l’action n’est pas pris en compte et le disque revient au lanceur.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `L’attaquant conserve le disque.

« Si le disque était en l’air quand l'interruption a été appelée, le jeu continue jusqu'à ce que la passe soit attrapée ou que le disque touche le sol.
Si la blessure n'est pas la conséquence d'une faute, la complétion ou le « turnover » est maintenu et le jeu reprend à cet endroit après l’interruption ». `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question: 'Au cours d’un point, je m’aperçois qu’un objet dangereux est sur le terrain. Que puis-je faire ?',
    image: undefined,
    answerChoices: {
      a: 'Rien',
      b: 'Appeler « technical »',
      c: 'Appeler « freeze »',
    },
    correctAnswers: ['b'],
    explanation: `Je peux appeler une « interruption technique » en disant « technical ».
« N'importe quel joueur qui identifie une condition qui met en danger des joueurs peut appeler « technical » pour arrêter le jeu. Le jeu doit s'arrêter immédiatement ».
L’appel « freeze » n’existe pas.`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question: 'Je constate que le disque est plié ou cassé. Je peux stopper le jeu en appelant « freeze ».',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `Cet appel n’existe pas. Il est toutefois possible d’appeler une « interruption technique » en disant « technical ».

Le lanceur peut appeler une interruption technique pendant le jeu pour remplacer un disque sévèrement endommagé.

Après un appel d'interruption technique :
- si l'appel ou le problème technique n'ont pas affecté le jeu, la passe complétée ou le « turnover » est maintenu et le jeu reprend à cet endroit,
- si l'appel ou le problème technique ont affecté le jeu, le disque est retourné au lanceur. `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question:
      'L’équipe adverse remplace une joueuse blessée. À bout de souffle, je souhaite me faire remplacer à ce moment. Ai-je le droit ?',
    image: undefined,
    answerChoices: {
      a: 'Oui',
      b: 'Non',
    },
    correctAnswers: ['a'],
    explanation: 'Mon équipe peut également remplacer un(e) joueur(se)',
    rules: ['19.3.'],
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question:
      'Nous venons de perdre le point. Bien que n’ayant pas la possession du disque, mon équipe a le droit d’appeler un temps mort (s’il lui en reste).',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      "« Après le début d'un point et avant que les deux équipes aient signalé être prêtes, un joueur de l'une ou l'autre des équipes peut appeler un temps-mort. Le temps-mort prolonge le temps entre le début du point et le « pull » suivant de soixante-quinze secondes. »",
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TIMEOUT,
    question:
      'Je suis  « spirit captain » et en attaque. Mon statut me permet d’appeler un temps mort, même si je n’ai pas le disque en main.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: '« Après le « pull », seul un joueur ayant la possession du disque peut appeler un temps-mort ».',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TIMEOUT,
    question: 'Après un temps mort, les mêmes joueurs jouent le point.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: '« Sur un temps-mort, les remplacements ne sont pas autorisés, à part pour blessure ».',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.EASY,
  },
  {
    category: Categories.TIMEOUT,
    question: 'Après un temps mort appelé dans le jeu, où devons nous nous placer si nous sommes en attaque ?',
    image: undefined,
    answerChoices: {
      a: 'Le jeu reprend au point de pivot',
      b: 'Le lanceur reste le même',
      c: "N'importe quel attaquant peut devenir lanceur",
      d: 'Les attaquants se repositionnent là où ils étaient',
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
    question: 'Après un temps mort, les défenseurs peuvent se placer où ils veulent.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      '« Une fois que les attaquants ont choisi leur position, les défenseurs peuvent se placer à l’endroit qu’ils veulent dans l’aire de jeu ».',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question:
      'Après avoir appelé un temps-mort à 5, le nouveau marqueur reprend le compte à « compté 6 ». Je peux appeler un « compte rapide ».',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      'Les défenseurs peuvent changer de marqueur, auquel cas le compte doit reprendre à 1. Si Le compte ne reprend pas au chiffre correct je peux appeler « compte rapide » (« fast count »).',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.TIMEOUT,
    question: 'L’équipe adverse appelle un temps mort alors qu’ils n’en ont plus. Que se passe-t-il ?',
    image: undefined,
    answerChoices: {
      a: 'Le jeu est arrêté',
      b: "Le jeu n'est pas arrêté",
      c: "L'appel n'a pas d'impact",
      d: 'Le marqueur ajoute 2 secondes au compte',
    },
    correctAnswers: ['a', 'd'],
    explanation: `« Si le lanceur appelle un temps-mort alors que son équipe n'en dispose plus, le jeu est arrêté.
Le marqueur doit ajouter deux (2) secondes au compte qu'il aurait prononcé avant de reprendre le jeu avec un « check ».
Si ceci a comme conséquence un compte à dix (10) ou plus, c'est un « changement de possession » de type « stall-out » (« fin du compte »). `,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question: 'J’ai une minute pour résoudre une « contestation ».',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Si après 30 secondes de discussion la contestation n’est pas résolue, le disque revient au dernier lanceur non contesté qui à alors 15 secondes pour relancer le jeu.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.APPENDIX,
    question:
      'Après qu’un point a été marqué, de combien de temps dispose l’équipe en attaque pour se placer sur la ligne de but (un pied) et rester immobile ?',
    image: undefined,
    answerChoices: {
      a: '45 secondes',
      b: '60 secondes',
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
      'Dès que toutes les attaquantes ont placé leur pied sur la ligne de but, au moins une d’entre-elles doit instantanément lever la main pour signaler qu’elles sont prêtes.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: 'Elles ont 15 secondes pour pouvoir lever la main.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question:
      'Après qu’un point a été marqué, l’équipe en défense a plus de temps que l’attaque pour se placer dans sa zone d’en-but?',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation: `La défense a 60 secondes (contre 45 pour l’attaque) après que le point ait été marqué pour se placer. Passé ce délai l’attaque peut appeler une violation de « dépassement de temps ».
Si c’est la première fois ou s’il y a une contestation, aucune sanction n’est appliquée.
Si ce n’est pas la première fois, l’attaque impose alors un « temps-mort » à la défense. Si elle n’en avait plus, l’attaque redémarre au centre du terrain et le jeu démarre par un « check ».`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question: 'Les capitaines sont autorisés à intervenir quand ils le souhaitent dans une discussion entre joueurs',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Ils peuvent intervenir 15 secondes après le début de la discussion. Au bout de 30 secondes, s’il n’ y a pas eu de terrain d’entente, le disque est retourné au dernier lanceur non-contesté. Le jeu doit repartir au bout de 45 secondes (après le « call »)',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.APPENDIX,
    question: 'Après un turnover dans la zone centrale, l’attaque a 10 secondes pour jouer.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      'La défense peut appeler a voix haute « 10 secondes », puis « 5 secondes ». 10 secondes après ce premier avertissement et s’il est à moins de 3 mètres du disque, le défenseur peut annoncer « disque en jeu » (« disc in ») et commencer le compte. (Règle 8.5)',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question:
      'Après un pull ou si le turnover a lieu ailleurs que dans la zone centrale (zone d’en-but et touche), l’attaque a 15 secondes pour jouer.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation: `
Elle dispose de 20 secondes.
Si après avoir annoncé a voix haute « 20 secondes », « 10 secondes », « 5 secondes », l’attaque n’a pas rejoué le disque dans le délai imparti, et s’il est à 3 mètres ou moins du disque (dans le cas où le disque est dans la zone) ou de l’endroit où le pivot doit être établi (si le disque était sorti du terrain), alors le défenseur peut annoncer « disque en jeu » (« disc in ») et commencer le compte.`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question: 'Qui peut appeler un « temps-mort spirit » (« spirit stoppage ») ?',
    image: undefined,
    answerChoices: {
      a: "N'importe quel joueur du match",
      b: "N'importe quel joueur sur le terrain",
      c: 'Seulement les capitaines et capitaines de spirit',
      d: 'Seulement les capitaines de spirit',
    },
    correctAnswers: ['c'],
    explanation: `Ce temps-mort ne peut être appelé que par les capitaines (d’équipe ou spirit) ou un « game advisor ». L'appel peut être fait après un appel ayant arrêté le jeu ou après le début d’un point et avant l’engagement.
Durant ce temps mort, aucun point tactique ne peut être abordé par les équipes.
Après que les capitaines se sont réunis pour trouver les solutions à une amélioration de l’esprit du jeu, les deux équipes se réunissent en cercle au milieu du terrain pour que les capitaines énoncent les solutions trouvées.`,
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.APPENDIX,
    question: 'Le « toss » peut se faire avec un ou deux disques.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'Il doit se faire avec deux disques et dans le terrain. L’appel « identique ou différent » doit se faire par l’un des deux capitaines lorsque les disques sont en l’air.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INDOOR,
    question: 'À l’engagement en indoor, je peux lancer le disque comme je veux.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['b'],
    explanation:
      'La trajectoire initiale du disque ne doit pas être orientée vers le sol. Auquel cas l’attaque peut faire refaire le « pull ».',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INDOOR,
    question:
      'Je joue en salle (« indoor »). L’engagement adverse sort du terrain à 13 mètres environ de ma zone, sans que le disque n’ait touché le terrain ou un joueur. Je peux reprendre le jeu au milieu de la zone centrale au point le plus proche de l’endroit où est sorti le disque.',
    image: undefined,
    answerChoices: {
      a: 'Vrai',
      b: 'Faux',
    },
    correctAnswers: ['a'],
    explanation:
      '« Un joueur signalant “Middle” met le disque en jeu à la marque de Brick, ou à un point au milieu de l’Aire de Jeu le plus proche de l’endroit où le disque a traversé la ligne de périmètre en dernier, en fonction de l’endroit le plus prêt de la End zone attaquée. Pour signaler cette option, le lanceur désigné tend un bras au-dessus de sa tête et/ou appelle “Brick” ou “Middle”, avant de toucher le disque ».',
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
      'En salle, sur une faute défensive contestée, un marcher ou une obstruction (« pick »), le compte reprend à combien maximum ?',
    image: undefined,
    answerChoices: {
      a: '« compté 4 »',
      b: '« compté 5 »',
      c: '« compté 6 »',
      d: '« compté 7 »',
    },
    correctAnswers: ['b'],
    explanation:
      'Si le compte était supérieur ou égal à 4 au moment de l’appel, on reprend a « compté 5 ». S’il était inférieur on reprend au nombre + 1.',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INDOOR,
    question: 'En salle, sur un « stall-out » (« fin du compte ») contesté, le compte reprend à combien ?',
    image: undefined,
    answerChoices: {
      a: '« compté 5 »',
      b: '« compté 6 »',
      c: '« compté 7 »',
      d: '« compté 8 »',
    },
    correctAnswers: ['c'],
    explanation: '',
    rules: undefined,
    source: 'Disque Tu Sais - Pablo',
    level: Levels.MIDDLE,
  },
];
