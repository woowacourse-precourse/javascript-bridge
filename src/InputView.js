const { Console } = require('@woowacourse/mission-utils');
const BridgeUnit = require('./BridgeUnit');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
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
      bridgeGame.setBridgeInput();
      const bridge = bridgeGame.bridgeInputs.map(input => new BridgeUnit(input));
      this.readMoving(bridgeGame, bridge);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, bridge) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)' + '\n', (UorD) => {
      bridgeGame.setUserInput(UorD);
      bridgeGame.setSteps();
      console.log(bridgeGame);
      console.log(bridge)

      for (let i = 0; i < bridgeGame.steps; i++) {
        if (bridgeGame.getMatching(i)) bridge[i].setMark('O');
        if (!bridgeGame.getMatching(i)) bridge[i].setMark('X');
        if (bridgeGame.userInputs[i] === 'U') bridge[i].setMarkIndex(0);
        if (bridgeGame.userInputs[i] === 'D') bridge[i].setMarkIndex(1);
      }
      console.log(bridge);

      bridge.forEach(bridgeUnit => bridgeUnit.setElement());

      OutputView.printMap(bridgeGame, bridge);

      if (bridgeGame.win()) {
        OutputView.print('최종 게임 결과');
        OutputView.printMap(bridgeGame, bridge);
        OutputView.printResult(bridgeGame);
        OutputView.end();

      }
      if (bridgeGame.lose()) {
        this.readGameCommand(bridgeGame, bridge);
      }
      if (bridgeGame.move()) {
        this.readMoving(bridgeGame, bridge);
      }
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, bridge) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)' + '\n', (RorQ) => {
      let retry = bridgeGame.retry(RorQ);
      if (retry) {
        this.readMoving(bridgeGame, bridge);
      }
      if (!retry) {
        OutputView.print('최종 게임 결과');
        OutputView.printMap(bridgeGame, bridge);
        OutputView.printResult(bridgeGame);
        OutputView.end();
      }
    })
  },
};

module.exports = InputView;
