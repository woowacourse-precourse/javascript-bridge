const { BridgeSize, GameCommand, Tile } = require('../constants');
const ArrayValidator = require('./ArrayValidator');
const NumberValidator = require('./NumberValidator');
const StringValidator = require('./StringValidator');
const Validator = require('./Validator');

/**
 * @param {any} value
 */
function validate(value) {
  return new Validator(value);
}

/**
 * @param {number} value
 */
function validateNumber(value) {
  return new NumberValidator(value);
}

/**
 * @param {any} value
 */
function validateTile(value) {
  return new StringValidator(value).shouldOneOf(Object.values(Tile));
}

/**
 * @param {any} value
 */
function validateTiles(value) {
  return new ArrayValidator(value).each((validator) => validator.pipe(validateTile));
}

/**
 * @param {any} value
 */
function validateBridgeSize(value) {
  return new StringValidator(value)
    .shouldNumeric()
    .as(NumberValidator)
    .shouldInteger()
    .shouldRangeInclusive(BridgeSize.LOWER_INCLUSIVE, BridgeSize.UPPER_INCLUSIVE);
}

/**
 * @param {any} value
 */
function validateGameCommand(value) {
  return new StringValidator(value).shouldOneOf(Object.values(GameCommand));
}

module.exports = {
  validate,
  validateNumber,
  validateTile,
  validateTiles,
  validateBridgeSize,
  validateGameCommand,
};
