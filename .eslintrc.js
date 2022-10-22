module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ["prettier"],
  extends: ["next", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    "jsx-a11y/alt-text": "off",
    "import/no-anonymous-default-export": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
    "no-unused-expressions": "warn",
    "no-unused-labels": "warn",
    "no-unused-vars": "warn",
    "no-undef": "error",
    "prettier/prettier": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
  },
};
