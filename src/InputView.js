const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const RandomNumGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
        
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (length) => {
      const bridgeList = BridgeMaker.makeBridge(length, RandomNumGenerator);
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
      
      if(bridgeGame.getAnswerCnt() == length) { //다리를 끝까지 건넌 경우
        const gameCount = bridgeGame.increaseGameCount();
        this.quitGame(bridgeGame, 'P', gameCount); //게임 종료
        return Console.close(); 
      }
      if(answerOrNot) return this.readMoving(length, bridgeGame); //정답을 맞히면 다음 칸 선택하기

      return this.readGameCommand(bridgeGame); 
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (restartOrNot)=> {
      const gameCount = bridgeGame.increaseGameCount();
      if(restartOrNot == 'R') { //다시 시도하는 경우
        //console.log("재시작할거임");
        bridgeGame.retry();
        this.readMoving(bridgeGame.getBridgeSize(), bridgeGame);
      } else { //종료를 입력한 경우
        this.quitGame(bridgeGame, 'F', gameCount);
        Console.close();
      }
    })
  },

  /**
   * 사용자가 게임을 종료할 때 사용하는 메서드
   */
  quitGame (bridgeGame, gameResult, gameCount) {
    const [upList, downList] = bridgeGame.getUpDownList();
    OutputView.printResult(gameResult, upList, downList);
    OutputView.printGameCount(gameCount);
    return;
  }
};

module.exports = InputView;
