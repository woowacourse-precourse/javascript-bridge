const {
  MOVING_COMMAND,
  ERROR_MESSAGE,
  GAME_COMMANDS,
  GAME_COMMAND,
} = require('./constants');

/**
 * @param {string} value
 * @returns {boolean | ERROR}
 */
const validInteger = (value) => {
  const regex = /^[0-9]+$/;
  const number = parseInt(value, 10);

  if (regex.test(number)) {
    return true;
  }

  throw new Error(ERROR_MESSAGE.wrong_input);
};

/**
 * @param {any[]} list
 * @param {string} value 배열안에 있는지 검증할 값
 * @returns
 */
const validIncludeValue = (list, value) => {
  if (list.includes(value)) {
    return true;
  }

  throw new Error(ERROR_MESSAGE.wrong_input);
};

/**
 * @param {number} number
 * @returns {ERROR | true}
 */
const validNumber = (number) => {
  if (Number.isNaN(number)) {
    throw new Error(ERROR_MESSAGE.input_isNaN);
  }
  return true;
};

/**
 * @param  {...number} numbers
 */
const validNumbers = (...numbers) => {
  numbers.forEach((number) => {
    validNumber(number);
  });
};

/**
 * @param {number} number
 * @param {number} minBound
 * @param {number} maxBound
 */
const validInBound = (number, minBound, maxBound) => {
  validNumbers(number, minBound, maxBound);
  if (number < minBound || number > maxBound) {
    throw new Error(ERROR_MESSAGE.wrong_input);
  }
  return true;
};

const validBridgeSizeInput = (answer) => {
  try {
    validInteger(answer);
    validInBound(answer, 3, 20);
  } catch (error) {
    throw new Error(ERROR_MESSAGE.wrong_bridge_size_input);
  }
};

const validMoveInput = (answer) => {
  try {
    validIncludeValue(MOVING_COMMAND, answer);
  } catch (error) {
    throw new Error(ERROR_MESSAGE.wrong_move_command);
  }
};

const validGameCommand = (answer) => {
  try {
    const gameCommands = Object.values(GAME_COMMAND);
    validIncludeValue(gameCommands, answer);
  } catch (error) {
    throw new Error(ERROR_MESSAGE.wrong_game_command);
  }
};

module.exports = {
  validInteger,
  validMoveInput,
  validGameCommand,
  validBridgeSizeInput,
};
