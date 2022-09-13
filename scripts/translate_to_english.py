from audioop import mul
import json
import os
import time

import deepl
import requests
import requests_random_user_agent  # it auto populates a random user_agent

translation_fixes = {
    "a sweater": "the pull",
    "sweater": "pull",
    "The sweater": "The pull",
    "the sweater": "the pull",
    "on the attack": "on offense",
    "mark of the brig": "brick mark",
    "Brick point": "Brick mark",
    "brigand mark": "brick mark",
    "come to impede": "come to mark",
    "'d' in 'ten'": "'t' in 'ten'",
    "fault": "foul",
    "Pitcher": "Thrower",
    "pitcher": "thrower",
    "launcher": "thrower",
    "disc carrier": "thrower",
    "putting the other outside": "putting the other out-of-bounds",
    "pull drop": "dropped pull",
    "where it left off": "where it stopped",
    "come out of the field": "contact out of bounds",
    "Turnover belt": "Not a turnover",  # a mis translation of french Pas
    "first support": "first point of contact",
    "pull-up": "pull",
    "onside": "in bounds",
    "his pass": "a pass",
    "defending on": "defending",
    "scorekeeper disputes": "defender contests",
    "Contesté": "Contest",
    "Faute": "Foul",
    "hommes": "MMP (Male Matching Player)",
    "Femmes": "FMP (Female Matching Player)",
    "Trademark infringement": "Marking infraction",
    "Fake": "False",
    "turnoer": "turnover",
    "Aïe": "Ouch",
    "Il y": "It is",
    "a marker on the": "marking the",
    "Oui": "True",
    "Non": "False",
    "striker": "offensive player",
    "Striker": "Offensive player",
    "challenge": "contest",
}


def translate(text_to_translate, target_language):
    ### Will need all outer quotes to be double and all inner quotes to be single
    ### this is bc translations can include apostrophes

    # Remove leading and trailing single quotes ' and double quotes "
    if text_to_translate.startswith('"') and text_to_translate.endswith('"'):
        text_to_translate = text_to_translate[1:-1]
    if text_to_translate.startswith("'") and text_to_translate.endswith("'"):
        text_to_translate = text_to_translate[1:-1]

    # no translation needed bc its empty
    if (
        len(text_to_translate) == 0
        or text_to_translate is None
        or text_to_translate == ""
        or text_to_translate == ""
    ):
        return '""'

    # Remove the " double quotes inside the string in favor of '
    text_to_translate = text_to_translate.replace('"', "'")

    # translation = translate_with_requests(text_to_translate) ## Had to use api directly with api key otherwise too man 429
    translation = translate_with_api(text_to_translate, target_language)
    for k, v in translation_fixes.items():
        translation = translation.replace(k, v)

    # Remove the " double quotes inside the string in favor of '
    translation = translation.replace('"', "'")
    # add back double quotes "" surrounding translation incase there is an apostrophe
    return '"' + translation + '"'


# https://www.deepl.com/docs-api/translating-text
def translate_with_api(text_to_translate, target_language):
    auth_key = os.getenv("DEEPL_AUTH_KEY")
    translator = deepl.Translator(auth_key=auth_key)

    result = translator.translate_text(
        text_to_translate,
        target_lang=target_language,
        # split_sentences=0,  # "0" - no splitting at all, whole input is treated as one sentence
        preserve_formatting=1,  # this is needed otherwise quotes get left at end of translated text sometimes breaking js formatting
    )
    translation = result.text
    return translation


def translate_with_requests(text_to_translate):
    session = requests.Session()
    print(session.headers["User-Agent"])
    # print(session.cookies.get_dict())
    response = session.get("https://www.deepl.com/translator")
    session.headers.update({"Origin": "https://www.deepl.com"})
    session.headers.update({"Referer": "https://www.deepl.com"})
    session.headers.update({"Host": "www2.deepl.com"})
    session.headers.update({"Accept-Language": "en-US,en;q=0.9"})
    print(json.dumps(session.cookies.get_dict(), indent=4, sort_keys=True))
    print(json.dumps(dict(session.headers), indent=4, sort_keys=True))

    params = {
        "method": "LMT_split_text",
    }
    json_data = {
        "jsonrpc": "2.0",
        "method": "LMT_handle_jobs",
        "params": {
            "jobs": [
                {
                    "kind": "default",
                    "sentences": [
                        {
                            "text": text_to_translate,
                            "id": 0,
                            "prefix": "",
                        },
                    ],
                    "raw_en_context_before": [],
                    "raw_en_context_after": [],
                    "preferred_num_beams": 1,
                },
            ],
            "lang": {
                "preference": {
                    "weight": {
                        "EN": 1.33833,
                        "FR": 3,
                    },
                    "default": "default",
                },
                "source_lang_user_selected": "FR",
                "target_lang": "EN",
            },
            "priority": 1,
            "commonJobParams": {
                "regionalVariant": "en-US",
                "browserType": 1,
                "formality": None,
            },
            "timestamp": int(time.time()),
        },
        # 'id': 60030018,  # random_with_N_digits(8),
    }
    response = session.post(
        "https://www2.deepl.com/jsonrpc", params=params, json=json_data
    )
    # print(response.status_code)
    if response.status_code == 429:
        print("too many requests")
        raise Exception(f"429 line: {text_to_translate}")
    translation = (
        json.loads(response.text)
        .get("result")
        .get("translations")[0]
        .get("beams")[0]
        .get("sentences")[0]
        .get("text")
    )

    return translation


def translate_file(file_name, target_language="EN-US"):
    file_path_french = "./data/questions/" + file_name
    translation_folder = f'./data/questions_{ target_language.replace("-","_") }/'
    if not os.path.exists(translation_folder):
        os.makedirs(translation_folder)
    file_path_english = translation_folder + file_name
    with open(file_path_french) as f:
        with open(file_path_english, "w+") as english_file:
            for line in f:
                multi_line = False
                if (
                    line.lstrip().startswith("question:")
                    or line.lstrip().startswith("explanation:")
                    or line.lstrip().startswith("a:")
                    or line.lstrip().startswith("b:")
                    or line.lstrip().startswith("c:")
                    or line.lstrip().startswith("d:")
                ):
                    if line.endswith(":\n"):
                        # if answer or text to translate is on new line need to write that line and then go ahead with translation
                        # write line before reading next one
                        english_file.write(line)
                        line = f.readline()
                        text_after_first_colon = line[::-1]
                    elif line.endswith(": `\n"):
                        multi_line = True
                        # if answer or text to translate is on new line need to write that line and then go ahead with translation
                        # write line before reading next one
                        english_file.write(line)
                        line = f.readline()
                        while not line.endswith("`,\n"):
                            line += f.readline()
                        text_after_first_colon = line[::-1]
                    else:
                        text_after_first_colon = line.split(":", 1)[1][::-1]

                    text_to_translate = text_after_first_colon.split(",", 1)[1][
                        ::-1
                    ].strip()
                    t = translate(
                        text_to_translate=text_to_translate,
                        target_language=target_language,
                    )
                    translated_line = line.replace(text_to_translate, t)
                    if multi_line:
                        translated_line = "« " + translated_line[1:-3] + "»\n    `,\n"
                    print(translated_line)
                    english_file.write(translated_line)
                else:
                    # write line to same file in english folder
                    print(line)
                    english_file.write(line)


# translate_file(file_name="other.js", target_language="EN-US")
# translate_file(file_name="dfeu.js", target_language="EN-US")
# translate_file(file_name="handSignals.js", target_language="EN-US")
# translate_file(file_name="monkeys.js", target_language="EN-US")
translate_file(
    file_name="disquetusais.js", target_language="EN-US"
)  ##needs special logic for multi-line questions
