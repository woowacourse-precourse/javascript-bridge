const { BLANK_SPACE } = require("./constants");
const { printResult } = require("./OutputView");

module.exports = {
  generateColumnMap: {
    U: (matchSymbol) => [matchSymbol, BLANK_SPACE],
    D: (matchSymbol) => [BLANK_SPACE, matchSymbol],
  },

  takeNextStep: {
    true: ({ app, bridgeGame, readAgain }) => {
      bridgeGame.endStep(app, readAgain);
    },
    false: ({ app, bridgeGame }) => {
      app.askRetry(bridgeGame);
    },
  },

  stopWalking: {
    true: ({}) => {
      printResult();
    },
    false: ({ app, bridgeGame, readAgain }) => {
      readAgain(app, bridgeGame);
    },
  },
};
