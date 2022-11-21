const { Console } = require("@woowacourse/mission-utils");

const inputUserValue = (message, callback) => {
  Console.readLine(message, callback);
};

const printMessage = (message) => {
  Console.print(message);
};

const quitGame = () => {
  Console.close();
};

module.exports = { inputUserValue, printMessage, quitGame };
