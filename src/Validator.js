const Constants = require("./Constants");

class Validator {
  validbridgeLength(userinput) {
    let number = Number(userinput);
    if (
      !/^[0-9]*$/.test(userinput) ||
      number < 3 ||
      number > 20 ||
      number % 1 !== 0
    ) {
      throw new Error(Constants.ERROR_INPUT_VALUE);
    }
  }
}
