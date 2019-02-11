module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true,
    "worker": true,
    "serviceworker": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
  },
  "extends": "eslint:recommended",
  "globals": {
    "globalVar": true,
  },
};
