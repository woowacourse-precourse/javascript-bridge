/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      MissionUtils.Console.print(`${answer}`);
      if(3 <= answer && answer <= 20) return answer;
      throw('[ERROR]', '다리 길이는 3부터 20 사이의 숫자여야 합니다.')
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (answer) => {
      MissionUtils.Console.print(`${answer}`);
      if(answer === "U" || answer === "D") return answer;
      throw('[ERROR]', '올바른 방향을 입력해 주세요.')
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
