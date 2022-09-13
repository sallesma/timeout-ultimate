#!/bin/bash
# Only need this until this issue is fixed: https://github.com/calintamas/react-native-toast-message/issues/117

echo 'Fixing PropTypes issues'

if grep -q "export const ViewPropTypes = { style: null };" ./node_modules/react-native-web/dist/index.js; then
    echo "ViewPropTypes fixed already!"
else
    printf "\nexport const ViewPropTypes = { style: () => {} };" >>./node_modules/react-native-web/dist/index.js
    printf "\nexport const ViewPropTypes = { style: () => {} };" >>./node_modules/react-native-web/src/index.js
    printf "\nText.propTypes = { style: () => {} };" >>./node_modules/react-native-web/dist/exports/Text/index.js
    printf "\nText.propTypes = { style: () => {} };" >>./node_modules/react-native-web/src/exports/Text/index.js
fi
