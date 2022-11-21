const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeUnit = require('./BridgeUnit');
const BridgeGame = require('./BridgeGame');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요' + '\n', (input) => {
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
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, bridge) {
    Console.readLine('\n' + '이동할 칸을 선택해주세요. (위: U, 아래: D)' + '\n', (UorD) => {
      this.tryMoving(UorD, bridgeGame, bridge);
    })
  },

  tryMoving(moving, bridgeGame, bridge) {
    try {
      bridgeGame.isValidInput(moving);
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
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, bridge) {
    Console.readLine('\n' + '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)' + '\n', (RorQ) => {
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
