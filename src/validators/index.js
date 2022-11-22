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
function validateTiles(value) {
  return new ArrayValidator(value).each((validator) =>
    validator.as(StringValidator).shouldOneOf(Object.values(Tile)),
  );
}

module.exports = {
  validate,
  validateTiles,
};
