const errorType = {
  empty: 'emptyInput',
  range: 'invalidRange',
  number: 'invalidNumber',
  move: 'invalidMoveInput',
  retry: 'invalidGameOverInput',
};

class Validator {
  emptyInput(userInput) {
    if (!userInput || userInput === ' ') {
      throw errorType.empty;
    }
  }

  outOfRange(bridgeSize) {}
  invalidNumber(bridgeSize) {}

  invalidMoveCommand() {}
  invalidRetryCommand() {}
}

module.exports = Validator;
