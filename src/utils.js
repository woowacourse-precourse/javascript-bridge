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
    true: ({ app, bridgeGame }) => {
      printResult(bridgeGame);
      app.terminate();
    },
    false: ({ app, bridgeGame, readAgain }) => {
      readAgain(app, bridgeGame);
    },
  },

  Command: {
    R: ({ app, bridgeGame }) => {
      bridgeGame.retry(app);
    },
    Q: ({ app, bridgeGame }) => {
      printResult(bridgeGame);
      app.terminate();
    },
  },
};
