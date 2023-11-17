// {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "standard-with-typescript",
//         "plugin:react/recommended",
//         "plugin:storybook/recommended"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script",
//             }
//         },
//         {
//          "files": ["**/src/**/*.test.{ts,tsx}"],
//          "rules": {"i18next/no-literal-string": "off"}

//         }
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react",
//         "i18next"
//     ],
//     "rules": {
//         "i18next/no-literal-string": 2,
//         "indent": ["error", 4, {
//             "offsetTernaryExpressions": true,
//             "ignoredNodes": ["ConditionalExpression"]
//         }],
//         "react/react-in-jsx-scope": "off",
//         "react/no-deprecated": "off",
//         "no-tabs": "off",
//         "no-mixed-spaces-and-tabs": ["error","smart-tabs"],
//         "@typescript-eslint/indent": "off",
//         "@typescript-eslint/prefer-nullish-coalescing": "off",
//         "@typescript-eslint/strict-boolean-expressions": "off",
//         "@typescript-eslint/naming-convention": "off",
//         "@typescript-eslint/no-floating-promises": "off",
//         "@typescript-eslint/comma-dangle": "off"
//     }
// }
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script",
            }
        },
        {
         files: ["**/src/**/*.test.{ts,tsx}"],
         rules: {"i18next/no-literal-string": "off"}

        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "i18next"
    ],
    rules: {
        "i18next/no-literal-string": 2,
        "indent": ["error", 4, {
            "offsetTernaryExpressions": true,
            "ignoredNodes": ["ConditionalExpression"]
        }],
        "react/react-in-jsx-scope": "off",
        "react/no-deprecated": "off",
        "no-tabs": "off",
        "no-mixed-spaces-and-tabs": ["error","smart-tabs"],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/comma-dangle": "off"
    }
}
