const { BLANK_SPACE } = require("./constants");

module.exports = {
  generateColumnMap: {
    U: (matchSymbol) => [matchSymbol, BLANK_SPACE],
    D: (matchSymbol) => [BLANK_SPACE, matchSymbol],
  },

  takeNextStep: {
    true: ({ app, bridgeGame, readAgain }) => {
      bridgeGame.endStep(app, readAgain);
    },
    false: ({ app }) => {
      app.askRetry();
    },
  },
};
