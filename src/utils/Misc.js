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

  static pipe(initialValue) {
    return function (...funcs) {
      return funcs.reduce((res, func) => {
        return res ? func(res) : func();
      }, initialValue);
    };
  }
};

module.exports = Misc;
