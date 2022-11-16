const MissionUtils = require('@woowacourse/mission-utils');

function readLine(message, callback) {
  return MissionUtils.Console.readLine(message, callback);
}

function print(...messages) {
  return messages.forEach((message) => MissionUtils.Console.print(message));
}

function close() {
  return MissionUtils.Console.close();
}

module.exports = { readLine, print, close };
