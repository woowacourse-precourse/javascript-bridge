const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {

  }

  play() {
    OutputView.printGameStart();
    this.createBridge();
  }

  createBridge() {
    InputView.readBridgeSize();
  }

  gameResultMessagePrint() { 
    const gameStartMessage = "다리 건너기 게임을 시작합니다.";
    const gameBridgeLengthInputMessage = "다리의 길이 를 입력해주세요.";
    const gameBridgeMoveSpaceChoiceMessage = "이동할 칸을 선택해주세요. (위: U, 아래: D)";
    const gameRetryMessage = "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)";
    const gameResultMessage = "최종 게임 결과";
    const gameSuccessStauts = `게임 성공 여부: ${winOrLoss}`;
    const gameTryCount = `총 시도한 횟수: ${gameCount}`;

    const errorMessage = {
      1 : "[ERROR] 다리 길이는 3이상 20이하 내에 숫자만 가능합니다.",
      2 : "[ERROR] 숫자만 입력해주세요.",
      3 : "[ERROR] U 또는 D만 입력해주세요.",
      4 : "[ERROR] 대소문자를 구분해주세요.",
      5 : "[ERROR] R 또는 Q만 입력해주세요.",
    }
  }
}
const app = new App();
app.play();

module.exports = App;
