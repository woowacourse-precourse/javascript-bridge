const { Console } = require('@woowacourse/mission-utils');

const read = (query, callback) => Console.readLine(query, callback);

const print = (message) => Console.print(message);

const close = () => Console.close();

module.exports = { read, print, close };
