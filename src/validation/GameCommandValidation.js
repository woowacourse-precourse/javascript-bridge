const { checkCommand } = require('../lib/utils');

const GameCommandValidation = (command) => {
  const type = 'game';

  const validate = (command) => {
    checkCommand(command, type);
  };

  return validate(command);
};

module.exports = GameCommandValidation;
