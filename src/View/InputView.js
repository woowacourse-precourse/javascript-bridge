const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_GAME } = require('../Constant/Constant');
const Validtion = require('../Validtion');
const BridgeController = require('../Controller/BridgeController');

const controller = new BridgeController();

const InputView = {

  bridgeSizeControl() {
    Console.readLine(BRIDGE_GAME.LENGTH_INPUT, (size) => {
      try {
        Validtion.validateBridge(size)
      } catch(error) {
        Console.print(error);
        return this.bridgeSizeControl();
      }
      this.readBridgeSize(size);
    });
  },
  readBridgeSize(size) {
    controller.bridgeSize(size);
    this.movingControl(BRIDGE_GAME.MOVING_SELECT);
  },

  movingControl(moving) {
    Console.readLine(moving, (select) => {
      try {
        Validtion.validateSelect(select);
      } catch(error) {
        Console.print(error);
        return this.movingControl(BRIDGE_GAME.MOVING_SELECT);
      }
      this.readMoving(select);
    });
  },
  readMoving(select) {
    controller.nowMapState(select);
    if (controller.gameState()) {
      return this.movingControl(BRIDGE_GAME.MOVING_SELECT);
    }
    if (!controller.gamechlear()) {
      this.GameCommandControl();
    }
  },

  GameCommandControl() {
    Console.readLine(BRIDGE_GAME.RETRY_SELECT, (select) => {
      try {
        Validtion.validateResult(select);
      } catch(error) {
        Console.print(error);
        return this.GameCommandControl(BRIDGE_GAME.MOVING_RE_SELECT);
      }
      this.readGameCommand(select);
    });
  },
  readGameCommand(select) {
    if (controller.gameRetry(select)) {
       return this.movingControl(BRIDGE_GAME.MOVING_RE_SELECT);
    };
    controller.gameResult();
  },

}

module.exports = InputView;