const MissionUtils = require('@woowacourse/mission-utils');
const InterfaceView = require('./InterFaceView');
const { Console } = MissionUtils;

class View extends InterfaceView {
  readLine(query, callback) {
    Console.readLine(query, callback);
  }

  print(message) {
    Console.print(message);
  }

  close() {
    Console.close();
  }
}

module.exports = View;
