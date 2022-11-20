const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
        
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (length) => {
      const bridgeList = BridgeMaker.makeBridge(length);
      console.log(bridgeList);
      const bridgeGame = new BridgeGame(bridgeList, length);
      return this.readMoving(length, bridgeGame);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(length, bridgeGame) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (upDown) => {
      const answerOrNot = bridgeGame.move(upDown);
      const [upList, downList] = bridgeGame.getUpDownList();
      OutputView.printMap(upList, downList);
      if(upList.length == length) this.gameCount = bridgeGame.increaseGameCount();
      if(bridgeGame.getAnswerCnt() == length) { 
        this.quitGame(upList, downList, this.gameCount);
        return Console.close();
      }
      if(answerOrNot) this.readMoving(length, bridgeGame); //정답을 맞히면 다음 칸 선택하기

      return this.readGameCommand(); 
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {

  },

  quitGame (upList, downList, gameCount) {
    OutputView.printResult('P', upList, downList);
    OutputView.printGameCount(gameCount);
    return;
  }
};

module.exports = InputView;
