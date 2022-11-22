const { checkCommand } = require('../lib/utils');

const MoveCommandValidation = (command) => {
  const type = 'move';

  const validate = (command) => {
    checkCommand(command, type);
  };

  return validate(command);
};

module.exports = MoveCommandValidation;
