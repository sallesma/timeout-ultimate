import { Levels, Categories } from '../config';

export default {
  config: {
    levels: {
      [Levels.EASY]: 'Easy',
      [Levels.MIDDLE]: 'Middle',
      [Levels.DIFFICULT]: 'Difficult',
      [Levels.ANY]: 'Unknown',
    },
    Categories: {
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
  homePage: {
    appName: 'Timeout Ultimate',
  },
};
