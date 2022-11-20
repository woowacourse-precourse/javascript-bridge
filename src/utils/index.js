const { Console } = require('@woowacourse/mission-utils');

const readLineAsync = (query) =>
  new Promise((resolve) => {
    Console.readLine(query, resolve);
  });

module.exports = { readLineAsync };
