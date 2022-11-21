const { Console } = require('@woowacourse/mission-utils');

const readLineAsync = (question) =>
  new Promise((resolve) => {
    Console.readLine(question, resolve);
  });

module.exports = readLineAsync;
