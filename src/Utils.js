const { Console } = require("@woowacourse/mission-utils");
const print = (content) => {
  Console.print(content);
};

const readLine = (content, func) => {
  Console.readLine(content, func);
};

module.exports = { print, readLine };
