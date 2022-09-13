# 🥏 Timeout Ultimate

Setting up a quizz mobile application to learn the rules of ultimate

## 👏 Contributing

Found a bug? Take 2 minutes to [report it](https://github.com/sallesma/timeout-ultimate/issues/new)

If you want to contribute to the projet, just pick up an issue from the [list](https://github.com/sallesma/timeout-ultimate/issues) and start fixing it. You can then open a pull-request so that your contribution can be merged into the main branch.

Not a developer? We always need people to help us with:

- improving the **wording** of the application;
- **translate** the questions to another language;
- adding new **questions**;
- **testing** the app;
- **gathering feedback** from our users;

Please get in touch.

## ⌨️ Development

You need a recent version of nodejs.

Clone the project and install all its dependencies:

```
git clone git@github.com:sallesma/timeout-ultimate.git
cd timeout-ultimate
yarn install
```

And finally, start the project:

```
yarn start
```

If you need to update the rules, change the pdf file in the assets and run `npm run extractor`.

## Translation

Set deepl auth_key as env var DEEPL_AUTH_KEY

1. Get Deepl.com account to get AUTH_KEY. It will have :fx at the end if a free trial account. It does unfortunately require a credit card number to register
   1. export auth_key so don't expose it in python file `echo 'export DEEPL_AUTH_KEY=xxxx-de1d-6bba-c67c-xxxx:fx' >> ~/.zshrc`
2. Setup venv `cd scripts; python3 -m venv venv; source ./scripts/venv/activate; cd ..`
3. Install requirements `pip install -r reqiurements.txt`
4. run the script

   ```bash
   python ./scripts/translate_to_english.py
   ```

## 🚀 Release

To release a new version of the app :

1. Send a pull request updating the version in `app.json`, as well as buildNumber (ios) and versionCode (android) if you need to build new binaries
2. When it is merged, create a release on Github
3. `expo publish --release-channel production`
4. If needed, republish to the stores using `eas build --platform all --profile production`

## 📜 License

The app source code is made available under the [MIT license](LICENSE).
