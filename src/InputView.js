const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_INPUT_MESSAGE, MOVE_INPUT_MESSAGE, COMMAND_INPUT_MESSAGE, GAME_RESULT } = require("./constants");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const RandomNumGenerator = require("./BridgeRandomNumberGenerator");
const InputValidation = require("./InputValidation");

const GAME_CONTROL = Object.freeze({
  RESTART: 'R',
  QUIT: 'Q'
})

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(BRIDGE_INPUT_MESSAGE, (length) => {
        if(InputValidation.validateBridgeSize(length)) return this.readBridgeSize();
        const bridgeList = BridgeMaker.makeBridge(length, RandomNumGenerator.generate);
        console.log(bridgeList);
        const bridgeGame = new BridgeGame(bridgeList, length);
        this.readMoving(length, bridgeGame);      
    })
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(length, bridgeGame) {
    Console.readLine(MOVE_INPUT_MESSAGE, (upDown) => {
      if (InputValidation.validateMove(upDown)) return this.readMoving(length,bridgeGame); 
      const isAnswer = bridgeGame.move(upDown);
      OutputView.printMap(bridgeGame.getUpDownList()[0], bridgeGame.getUpDownList()[1]);
      if(this.guessAllAnswers(bridgeGame, length)) return Console.close();
      if(isAnswer) return this.readMoving(length, bridgeGame); //정답을 맞히면 다음 칸 선택하기    
      return this.readGameCommand(bridgeGame);      
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(COMMAND_INPUT_MESSAGE, (command)=> {
      if(InputValidation.validateCommand(command)) return this.readGameCommand(bridgeGame);
      const gameCount = bridgeGame.increaseGameCount();
      if(command == GAME_CONTROL.RESTART) { //다시 시도하는 경우
        bridgeGame.retry();
        return this.readMoving(bridgeGame.getBridgeSize(), bridgeGame);
      }
      this.quitGame(bridgeGame, GAME_RESULT.FAIL, gameCount);
      return Console.close(); 
    })
  },
   /**
   * 사용자가 정답을 다 맞혔는지 확인하는 메서드
   */
  guessAllAnswers(bridgeGame, length) {
    if(bridgeGame.getAnswerCnt() == length) { //다리를 끝까지 건넌 경우
      const gameCount = bridgeGame.increaseGameCount();
      this.quitGame(bridgeGame, GAME_RESULT.PASS, gameCount); //게임 종료
      return true; 
    }
    return false;
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
