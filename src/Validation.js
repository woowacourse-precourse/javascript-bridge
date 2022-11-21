class Validation {
  checkRestartRequirement() {}

  checkIsLastMove(moveCount, bridge) {
    if (moveCount === bridge.length) return true;

    return false;
  }
}

module.exports = Validation;
