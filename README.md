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
yarn prepare
```

And finally, start the project:

```
yarn start
```

If you need to update the rules, change the pdf file in the assets and run `npm run extractor`.

## 🚀 Release

To release a new version of the app :

1. Send a pull request updating the version in `app.config.js`. If new binaries must be built, this is a major version update and you must also update the buildNumber (ios) and versionCode (android)
2. When it is merged, create a release on Github
3. Make sure EAS is installed and up-to-date with `npm install -g eas-cli`
4. If you want to update an existing deployed build, run `eas update --branch production` (change the channel if staging).
5. If you want to deploy new builds:
   1. Rebuild to the stores using `eas build --platform <ios|android|all> --profile <profile-name>`
   2. Submit builds to the stores `eas submit -p ios` and `eas submit -p android`
   3. Follow store-specific instructions to deploy

## 📜 License

The app source code is made available under the [MIT license](LICENSE).
