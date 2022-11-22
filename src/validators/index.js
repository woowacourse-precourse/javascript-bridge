const ArrayValidator = require('./ArrayValidator');
const StringValidator = require('./StringValidator');
const Validator = require('./Validator');
const { Tile } = require('../constants');

/**
 *
 * @param {any} value
 */
function validate(value) {
  return new Validator(value);
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

module.exports = {
  validate,
  validateTile,
  validateTiles,
};
