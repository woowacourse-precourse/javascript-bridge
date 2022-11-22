const { RANGE, BRIDGE, MOVING, COMMAND } = require('../constant/input');

const checkInputBridgeRange = (userInput) =>
  +userInput >= RANGE.min && +userInput <= RANGE.max;

const checkNotNumbersInInput = (userInput) =>
  [...userInput].every((v) => +v || v === '0');

const isInputUpOrDown = (userInput) =>
  userInput === MOVING.up || userInput === MOVING.down;

const isInputReOrQuit = (userInput) =>
  userInput === COMMAND.restart || userInput === COMMAND.end;

const determineGameRestart = (moveLists) => {
  const [upList, downList] = moveLists;
  return (
    upList.includes(BRIDGE.wrong_direction) ||
    downList.includes(BRIDGE.wrong_direction)
  );
};

module.exports = {
  checkInputBridgeRange,
  checkNotNumbersInInput,
  isInputUpOrDown,
  isInputReOrQuit,
  determineGameRestart,
};
