const bridgeLengthValidate = (input) => {
  if (input < 3 || input > 20) return false;
  if (isNaN(input)) return false;
  return true;
};
const userMoveInput = (input) => {
  if (input !== "U" || input !== "D") return false;
  return true;
};
const gameRestartInput = (input) => {
  if (input !== "R" || input !== "Q") return false;
  return true;
};
module.exports = { bridgeLengthValidate, userMoveInput, gameRestartInput };
