const MissionUtils = require('@woowacourse/mission-utils');
const Check = require('./Check');
const Message = require('./Message');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {

  /**
   * 다리의 길이를 입력받는다.
   */
  inputSize(bridegame) {
    MissionUtils.Console.readLine(Message.ASK.GAME_START, (size) => {
      if (Check.checkSize(size)) bridegame.createMap(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridegame) {
    MissionUtils.Console.readLine(Message.ASK.USER_INPUT, (userInput) => {
      if (Check.checkStr) bridegame.move(userInput);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridegame) {
    MissionUtils.Console.readLine(Message.ASK.CONTINUE_INPUT, (command) => {
      if (Check.checkEndStr) bridegame.restartInput(command);
    });
  },
};

module.exports = InputView;