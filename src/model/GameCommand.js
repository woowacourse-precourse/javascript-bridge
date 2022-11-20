const { validateGameCommand } = require('../errorHandling');

const GameCommand = (function () {
  let gameCommand;

  return {
    setGameCommand(input) {
      this.validate(input);
      gameCommand = input;
    },

    getGameCommand() {
      return gameCommand;
    },

    validate(input) {
      validateGameCommand.validate(input);
    },
  };
})();

module.exports = GameCommand;
