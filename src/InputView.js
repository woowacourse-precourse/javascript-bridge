const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGameController = require("./BridgeGameController");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridgeGame: null,
  /**
   * 다리의 길이를 입력받는다.
   * 다리 생성후 다리 건너기로 진입
   */
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      MissionUtils.Console.print('');
      this.bridgeGame = BridgeGameController.makeNewBridgeGame(input);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (input) => {
      const roundResult = this.bridgeGame.move(input);
      OutputView.printMap(this.bridgeGame.stateToString());
      if(!roundResult) {
        this.readGameCommand();
      } else if (this.bridgeGame.isArrived()){
        OutputView.printResult(this.bridgeGame.stateToString(), this.bridgeGame.isArrived(), this.bridgeGame.getTry());
        return null;
      } 
      this.readMoving();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (input) => {
      if(input == 'R') {
        this.bridgeGame.retry();
        this.readMoving(this.bridgeGame);
      } else if(input == 'Q') {
        OutputView.printResult(this.bridgeGame.stateToString(), this.bridgeGame.isArrived(), this.bridgeGame.getTry());
        return null;
      } else {
        throw new Error("[ERROR] R 혹은 Q를 입력해야 합니다.");
      }
    });
  },
};

module.exports = InputView;
