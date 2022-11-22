const REPRESENTATION = Object.freeze({
  UPPER: {
    abbreviatedForm: "U",
    numericalForm: 1,
  },
  LOWER: {
    abbreviatedForm: "D",
    numericalForm: 0,
  },
});

const VALID_BRIDGE_LENGTH = Object.freeze({
  MAX: 20,
  MIN: 3,
});

module.exports = { REPRESENTATION, VALID_BRIDGE_LENGTH };
