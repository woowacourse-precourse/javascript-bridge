const { ERROR, BRIDGE, GAME } = require('../constants/Constants');

const movingValidation = (movingDirection) => {
  const { up, down } = BRIDGE;
  const errorMessage = ERROR.moving;
  keyValidation(up, down, movingDirection, errorMessage);
};

const gameCommandValidation = (gameCommand) => {
  const { restart, quit } = GAME;
  const errorMessage = ERROR.restart;
  keyValidation(restart, quit, gameCommand, errorMessage);
};

const keyValidation = (firstKey, secondKey, pressedKey, errorMessage) => {
  if (pressedKey !== firstKey && pressedKey !== secondKey)
    throw `${ERROR.prefix} ${errorMessage}`;
};

module.exports = { movingValidation, gameCommandValidation };
