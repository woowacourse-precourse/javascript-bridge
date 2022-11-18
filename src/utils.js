const validator = {
  isNotSize: (input) => !(input >= 3 && input <= 20),
  isInteger: (input) => Number.isInteger(input),
  isNotUorD: (input) => !(input === "U" || input === "D"),
  isNotRorQ: (input) => !(input === "R" || input === "Q")
}

module.exports = validator;
