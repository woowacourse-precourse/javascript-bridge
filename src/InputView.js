const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function sizeValidationCheck(number){
  if(!isNumeric) throw new Error("[ERROR]Bridge사이즈는 숫자이어야 합니다.");
  if(number > 20 || number < 3) throw new Error("[ERROR]3~20의 숫자만 입력 가능합니다.");
  return number;
}
function moveValidationCheck(mv){
  if(mv.length > 1) throw new Error("[ERROR]이동할 칸은 한 칸만 입력할 수 있습니다.");
  if(mv === 'U') return 'U';
  if(mv == 'D') return 'D';
  throw new Error("[ERROR]U또는 D만 입력할 수 있습니다.");
}
function commandValidationCheck(cmd){
  if(cmd.length > 1) throw new Error("[ERROR]명령어는 한 글자만 입력할 수 있습니다.");
  if(cmd == "Q") return 0;
  if(cmd == "R") return 1;
  throw new Error("[ERROR]R또는 Q만 입력할 수 있습니다.");
}
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    var size = 0;
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeLength) => {
      size = sizeValidationCheck(Number(bridgeLength));
    });
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    var mv;
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (move) => {
      mv = moveValidationCheck(move);
    });
    return mv;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (command) => {
      commandValidationCheck(command);
      if(command == "R") return true;
      if(command == "Q") return true;
    });
  },
};

module.exports = InputView;
