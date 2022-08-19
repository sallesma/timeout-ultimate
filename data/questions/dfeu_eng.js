import { Levels, Categories } from '../../src/utils/config';

export default [
    {
        category: Categories.FIELD,
        question: "The dimensions of an outdoor field are:",
        image: undefined,
        answerChoices: {
            a: '90m x 30m',
            b: '97m x 35m',
            c: '100m x 37m',
        },
        correctAnswers: ['c'],
        explanation: 'See the diagram in chapter 2 of the rules',
        rules: undefined,
        source: 'DFEU - Pablo',
        level: Levels.EASY,
    },
    {
        category: Categories.PULL,
        question:
            "Upon receiving a pull, an attacker unintentionally touches the disc with her leg, and then the disc hits the ground without being caught.",
        image: undefined,
        answerChoices: {
            a: "The move was unintentional, the attackers retain possession of the disc at the point where it touched.",
            b: "Turnover because she did not catch it",
            c: "Not having touched it with the hand, the attackers recover the disc at the point where it stops or goes out",
        },
        correctAnswers: ['b'],
        explanation: "This is a 'pull drop'. Whether it is voluntary or not is not a consideration.",
        rules: ['7.8.'],
        source: 'DFEU - Pablo',
        level: Levels.EASY,
    },
    {
        category: Categories.PULL,
        question: "On the pull, the disc lands and comes to rest in the opponent's end zone",
        image: undefined,
        answerChoices: {
            a: "Attackers can play it where it hits the ground or where it comes to rest",
            b: "Attackers have the choice to play it where it stopped or where it entered the zone",
            c: "The attackers must play it from the place where it came to rest",
        },
        correctAnswers: ['c'],
        explanation: "If the disc does not come out of the field as a result of a pull, the thrower must play it from where it came to rest.",
        rules: ['7.10.'],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
    {
        category: Categories.FIELD,
        question: "The line that delimits the playing area",
        image: undefined,
        answerChoices: {
            a: "is considered part of the play area",
            b: "is considered not to be part of the playing area",
        },
        correctAnswers: ['b'],
        explanation: "In ultimate, the lines are not part of the field.",
        rules: ['11.1.'],
        source: 'DFEU - Pablo',
        level: Levels.EASY,
    },
    {
        category: Categories.PULL,
        question:
            'The pull exits the field from one side without having made contact with the ground. The thrower can put her pivot foot in',
        image: undefined,
        answerChoices: {
            a: 'at the brick mark, or at the middle of the field, or at the sideline where the disc went out',
            b: 'at the brick mark, or at the middle of the end line',
            c: 'at the brick mark, or at the point on the sideline where the disc went out',
            d: 'at the brick mark, or at the point on the sideline nearest to where the disc landed',
        },
        correctAnswers: ['c'],
        explanation: "It is the attacking team's choice",
        rules: ['7.12.'],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
    {
        category: Categories.COUNT,
        question:
            "A player has just dived to catch the disc. The moment it lands on his chest, the defender says 'stalling' and starts counting.",
        image: undefined,
        answerChoices: {
            a: 'The defender must wait for the player to get up before starting to count',
            b: 'The defender does not have to wait for the player to get up before starting to count',
        },
        correctAnswers: ['b'],
        explanation:
            "The defender may count if he is within 10 feet of the thrower and is not committing a scoring infraction.",
        rules: ['9.3.', '9.3.1.', '9.3.2.', '9.3.3.'],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
    {
        category: Categories.FIELD,
        question:
            "An attacker catches the disc in the air and lands with one foot in the playing area and one foot on the sideline. Both feet touch the ground at the same time",
        image: undefined,
        answerChoices: {
            a: 'Turnover',
            b: 'No turnover',
        },
        correctAnswers: ['a'],
        explanation: "The attacker's first support is out of bounds.",
        rules: ['11.4.', '11.4.1.', '11.4.2',],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
    {
        category: Categories.RECEIVER,
        question: 'An attacker and a defender catch the disc at exactly the same time',
        image: undefined,
        answerChoices: {
            a: 'The defender takes possession of the disc',
            b: 'The attacker takes possession of the disc',
            c: 'The disc returns to the thrower',
        },
        correctAnswers: ['b'],
        explanation: "And play is not stopped unless discussion is necessary to resolve the situation",
        rules: ['12.3.'],
        source: 'DFEU - Pablo',
        level: Levels.EASY,
    },

    {
        category: Categories.COUNT,
        question: 'For a stall-out, the thrower must still be in possession of the disk when',
        image: undefined,
        answerChoices: {
            a: 'the marker starts to say "Stall", after reaching ten',
            b: 'the marker finishes saying "Stall", after reaching ten',
            c: 'the marker starts to say "ten"',
            d: 'the marker finishes saying "ten"',
        },
        correctAnswers: ['c'],
        explanation:
            "It is indeed the 'd' in 'ten' that marks the end of the count. The 'Stall-out' call simply means that 'ten' has been reached.",
        rules: ['13.2.', '13.2.2.'],
        source: 'DFEU - Pablo',
        level: Levels.EASY,
    },
    {
        category: Categories.GOAL,
        question:
            "An attacker catches the disc in the end zone he is attacking. Then he throws an incomplete pass.",
        image: undefined,
        answerChoices: {
            a: "This is a turnover",
            b: "No turnover, that's a point",
        },
        correctAnswers: ['b'],
        explanation:
            "The point is scored at the time of the catch, whether the attacker is aware of it or not. The failed pass attempt afterwards is therefore irrelevant because the point is already scored (provided someone called 'point' on the field).",
        rules: ['14.4.'],
        source: 'DFEU - Pablo',
        level: Levels.DIFFICULT,
    },
    {
        category: Categories.CONTINUATION,
        question: "The thrower is fouled while pivoting. She calls the foul and then attempts the pass",
        image: undefined,
        answerChoices: {
            a: 'If the pass is completed, the play continues',
            b: 'If the pass is not completed, play continues',
            c: 'The disc returns to the thrower regardless of the outcome of the pass',
            d: 'The thrower can only call "Contact" when contact occurs outside the throwing motion',
        },
        correctAnswers: ['c'],
        explanation: 'The play stops immediately when the thrower calls "foul", so the pass is ignored.',
        rules: ['16.1.'],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
    {
        category: Categories.FOULS,
        question:
            "An attacker touches the disc in the air while trying to catch it, but is unsuccessful. The defender then fouls the attacker and prevents him from making a second attempt to catch the disc.",
        image: undefined,
        answerChoices: {
            a: "This is a 'Strip' foul",
            b: "This is not a foul because the attacker had already missed the catch",
            c: "This is a foul because the attacker was prevented from catching the disc on his second attempt",
        },
        correctAnswers: ['c'],
        explanation: '',
        rules: ['17.2.1.'],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
    {
        category: Categories.INFRACTIONS_VIOLATIONS,
        question: 'The thrower calls "Disc space" and the defender contests it',
        image: undefined,
        answerChoices: {
            a: 'The game stops',
            b: 'The game does not stop',
            c: 'The scorer cannot challenge a scoring infraction',
        },
        correctAnswers: ['a'],
        explanation: 'Play would not have stopped if the infraction had been accepted.',
        rules: ['18.1.2.'],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
    {
        category: Categories.CONTINUATION,
        question:
            "A travel is called against the thrower before she completes her pass. The thrower attempts the pass, but it is not completed.",
        image: undefined,
        answerChoices: {
            a: 'Turnover. The game continues without a check',
            b: 'Turnover. Game continues after a check',
            c: 'Turnover only if the travel is not challenged',
            d: 'The disc returns to the thrower',
        },
        correctAnswers: ['a'],
        explanation: '',
        rules: ['18.2.8.'],
        source: 'DFEU - Pablo',
        level: Levels.DIFFICULT,
    },
    {
        category: Categories.INFRACTIONS_VIOLATIONS,
        question:
            "A defender tries to follow the player he is defending, but he runs into one of his teammates. The thrower still has the disc",
        image: undefined,
        answerChoices: {
            a: "This is not a pick because they are on the same team",
            b: "It's a pick, but the play doesn't stop if the attacker doesn't get the disc",
            c: "It's a pick. The play stops and the defender can catch up",
        },
        correctAnswers: ['c'],
        explanation:
            "This is a pick. The defender can also take 2 seconds before calling it to check if it has an impact on the game or not.",
        rules: ['18.3.1.', '18.3.1.1.', '18.3.2',],
        source: 'DFEU - Pablo',
        level: Levels.EASY,
    },

    {
        category: Categories.FIELD,
        question:
            "After establishing his pivot foot in the field, one player successfully completes a pass by putting the other out",
        image: undefined,
        answerChoices: {
            a: 'There is a turnover because he had one foot outside the field',
            b: 'There is no turnover',
        },
        correctAnswers: ['b'],
        explanation: 'With the pivot foot established in the field, the player is considered in bounds',
        rules: ['11.3.3.'],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
    {
        category: Categories.CONTINUATION,
        question: 'On an accepted "Stall-out"',
        image: undefined,
        answerChoices: {
            a: 'Turnover, the marker regains possession of the disc',
            b: "Turnover and any attacker can regain possession of the disc, after a check",
        },
        correctAnswers: ['b'],
        explanation:
            "Any attacker may take possession of the disc after a 'turnover' except after an interception (in which case the player who made the interception must maintain possession) or after an offensive receiving foul (in which case the player who suffered the foul must take possession).",
        rules: ['13.5.', '13.5.1.', '13.5.2',],
        source: 'DFEU - Pablo',
        level: Levels.MIDDLE,
    },
];
