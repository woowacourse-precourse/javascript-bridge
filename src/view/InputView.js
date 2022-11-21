const { UTILS_URL, MOVEMENT_KEY, COMMAND_KEY } = require('../constant/Key');
const { ASK_MESSAGE } = require('../constant/Message');
const BridgeProcess = require('../controller/BridgeProcess');
const { Console } = require(UTILS_URL);
const { BRIDGESIZE_KEY } = require('../constant/Key');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const connect = new BridgeProcess();
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(ASK_MESSAGE.INPUT_BRIDGESIZE, (bridgeSize) => {
      const isBridgeSize = connect.checkValidation(BRIDGESIZE_KEY, bridgeSize);
      this.bridgeSizeOptions.get(isBridgeSize)(bridgeSize);
    });
  },

  bridgeSizeOptions: new Map([
    [
      true,
      (bridgeSize) => {
        connect.makeBridge(bridgeSize);
        InputView.readMoving();
      },
    ],
    [
      false,
      () => {
        InputView.readBridgeSize();
      },
    ],
  ]),

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(ASK_MESSAGE.INPUT_MOVEMENT, (moving) => {
      const move = connect.checkValidation(MOVEMENT_KEY, moving);
      const [match, { sucess, process }] = move ? connect.moveToBridge(moving) : this.readMoving();
      [...this.movementOptions].filter(([key, value]) =>
        key.sucess === sucess && key.process === process ? value(sucess, match) : ''
      );
    });
  },

  movementOptions: new Map([
    [
      { sucess: true, process: false },
      (sucess, match) => {
        connect.finalResult(sucess, match);
      },
    ],
    [
      { sucess: false, process: true },
      () => {
        InputView.readMoving();
      },
    ],
    [
      { sucess: false, process: false },
      (_, match) => {
        InputView.readGameCommand(match);
      },
    ],
  ]),

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(match) {
    Console.readLine(ASK_MESSAGE.INPUT_GAMECOMMAND, (command) => {
      const isCommand = connect.checkValidation(COMMAND_KEY, command);
      this.commandOptions[isCommand](match);
    });
  },

  commandOptions: {
    R: () => {
      connect.restartGame();
      InputView.readMoving();
    },
    Q: (match) => {
      connect.finalResult(false, match);
    },
    false: () => {
      InputView.readGameCommand();
    },
  },
};

module.exports = InputView;
