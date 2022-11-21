const { Console } = require('@woowacourse/mission-utils');

const readLineAsync = (query) =>
  new Promise((resolve) => {
    Console.readLine(query, resolve);
  });

const print = (message) => Console.print(message);

const close = () => Console.close();

module.exports = { readLineAsync, print, close };
