const { Console } = require("@woowacourse/mission-utils");

const print = (content) => {
  Console.print(content);
};

const readLine = (content, func) => {
  Console.readLine(content, func);
};

const close = () => {
  Console.close();
};

module.exports = { print, readLine, close };