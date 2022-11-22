const { Console } = require('@woowacourse/mission-utils');

class Print {
  static StartMessage(){
    Console.print('다리 건너기 게임을 시작합니다.');
  }
  static UserInput(input) {
    Console.print(`${input}`);
  }
  static GameResultIsWin() {
    Console.print(`게임 성공 여부: 성공`);
  }
  static GameResultIsDefeat() {
    Console.print(`게임 성공 여부: 실패`);
  }
  static GameTryCount(count) {
    Console.print(`총 시도한 횟수: ${count}`);
  }
  static ResultTitle() {
    Console.print('최종 게임 결과');
  }
  static Blank() {
    Console.print('');
  }
  static BothBridge(upside, downSide) {
    Console.print(upside.join(''));
    Console.print(downSide.join(''));
  }
  static ErrorMessage(error) {
    Console.print(error);
  }
}

module.exports = Print;