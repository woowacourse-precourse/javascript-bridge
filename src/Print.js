const { Console } = require('@woowacourse/mission-utils');

class Print {
  static StartMessage(){
    Console.print('다리 건너기 게임을 시작합니다.');
  }
  static InputLengthMessage() {
    Console.print('다리의 길이를 입력해주세요.');
  }
  static UserInput(input) {
    Console.print(`${input}`);
  }
  static ChooseSectionMessage() {
    Console.print('이동할 칸을 선택해주세요. (위: U, 아래: D)');
  }
  static GameRestartMessage() {
    Console.print('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)');
  }
  static GameResult(result) {
    Console.print(`게임 성공 여부: ${result}`);
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
  static Bridge(array) {
    Console.print(array.join(''));
  }
}

module.exports = Print;