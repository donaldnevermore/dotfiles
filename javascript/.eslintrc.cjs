module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "linebreak-style": ["warn", "unix"],
    "arrow-spacing": "warn",
    "space-unary-ops": "warn",
    "semi-spacing": "warn",
    "arrow-parens": "warn",
    "switch-colon-spacing": "warn",
    "no-multi-spaces": "warn",
    "space-in-parens": "warn",

    // TypeScript rules.
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["warn", "1tbs"],
    indent: "off",
    "@typescript-eslint/indent": ["warn", 2, { SwitchCase: 1 }],
    "quotes": "off",
    "@typescript-eslint/quotes": ["warn", "double"],
    semi: "off",
    "@typescript-eslint/semi": ["warn", "always"],

    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["warn", "always"],
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": "warn",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "warn",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "warn",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "warn",
    "key-spacing": "off",
    "@typescript-eslint/key-spacing": "warn",
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "warn",

    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off"
  }
};
