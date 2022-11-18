const { print } = require("./Io.js");

const Misc = class {
  static continueAfterCatchError(input, callback, method) {
    try {
      callback(input);
    } catch (error) {
      print(error);
      method(callback);
    }
  }
};

module.exports = Misc;
