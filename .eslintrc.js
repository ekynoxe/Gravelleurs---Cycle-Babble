module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  "rules": {
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/style-prop-object": "off"
  }
};
