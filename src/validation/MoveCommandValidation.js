const MoveCommandValidation = (command) => {
  const validate = (command) => {
    checkCommand(command);
  };

  return validate(command);
};

module.exports = MoveCommandValidation;
