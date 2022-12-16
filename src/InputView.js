const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeUnit = require('./BridgeUnit');
const BridgeGame = require('./BridgeGame');
const { MESSAGE } = require('./Const');

const InputView = {

  readBridgeSize() {
    Console.readLine(MESSAGE.READ_SIZE + '\n', (input) => {
      let bridgeGame = new BridgeGame(Number(input));
      this.tryBridgeSize(input, bridgeGame);
    })
  },

  tryBridgeSize(size, bridgeGame) {
    try {
      bridgeGame.isVaildSize(size);
      bridgeGame.setBridgeInput();
      const bridge = bridgeGame.bridgeInputs.map(input => new BridgeUnit(input));
      this.readMoving(bridgeGame, bridge);
    }
    catch (error) {
      OutputView.print(error);
      this.readBridgeSize();
    }
  },

  readMoving(bridgeGame, bridge) {
    Console.readLine('\n' + MESSAGE.READ_MOVING + '\n', (UorD) => {
      this.tryMoving(UorD, bridgeGame, bridge);
    })
  },

  tryMoving(moving, bridgeGame, bridge) {
    try {
      bridgeGame.isValidMoving(moving);
      bridgeGame.setMoving(moving);
      this.setMap(bridgeGame, bridge);
      this.checkWin(bridgeGame, bridge);
    }
    catch (error) {
      OutputView.print(error);
      this.readMoving(bridgeGame, bridge);
    }
  },

  setMap(bridgeGame, bridge) {
    for (let i = 0; i < bridgeGame.steps; i++) {
      if (bridgeGame.getMatching(i)) bridge[i].setMark('O');
      if (!bridgeGame.getMatching(i)) bridge[i].setMark('X');
      if (bridgeGame.movings[i] === 'U') bridge[i].setMarkIndex(0);
      if (bridgeGame.movings[i] === 'D') bridge[i].setMarkIndex(1);
    }
    bridge.forEach(bridgeUnit => bridgeUnit.setElement());
    OutputView.printMap(bridgeGame, bridge);
  },

  checkWin(bridgeGame, bridge) {
    if (bridgeGame.win()) OutputView.end(bridgeGame, bridge);
    if (bridgeGame.lose()) this.readGameCommand(bridgeGame, bridge);
    if (bridgeGame.move()) this.readMoving(bridgeGame, bridge);
  },

  readGameCommand(bridgeGame, bridge) {
    Console.readLine('\n' + MESSAGE.READ_COMMAND + '\n', (RorQ) => {
      this.tryGameCommand(RorQ, bridgeGame, bridge);
    })
  },

  tryGameCommand(command, bridgeGame, bridge) {
    try {
      bridgeGame.isVaildCommand(command);
      let retry = bridgeGame.retry(command);
      if (retry) this.readMoving(bridgeGame, bridge);
      if (!retry) OutputView.end(bridgeGame, bridge);
    }
    catch (error) {
      OutputView.print(error);
      this.readGameCommand(bridgeGame, bridge);
    }
  }

};

module.exports = InputView;
