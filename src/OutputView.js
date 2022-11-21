const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, count, upDown) {
    let xNum = 0;
    let upMark = '';
    let downMark = '';
    let printArr = ['['];
    for (let i = 0; i <= count; i++) {
      upMark = ' ';
      downMark = ' ';
      if ((upDown == 0 && bridge[count] == upDown && count == i) || (bridge[i] == 0 && i < count)) {
        upMark = 'O';
      } else if (upDown == 0 && bridge[count] != upDown && count == i) {
        upMark = 'X';
        xNum++;
      }
      printArr.push(` ${upMark} `);
      printArr.push('|');
    }
    printArr.pop();
    printArr.push(']');
    Console.print(printArr.join(''));

    printArr = ['['];
    for (let i = 0; i <= count; i++) {
      upMark = ' ';
      downMark = ' ';
      if ((upDown == 1 && bridge[count] == upDown && count == i) || (bridge[i] == 1 && i < count)) {
        upMark = 'O';
      } else if (upDown == 1 && bridge[count] != upDown&& count == i) {
        upMark = 'X';
        xNum++;
      }
      printArr.push(` ${upMark} `);
      printArr.push('|');
    }
    printArr.pop();
    printArr.push(']');
    Console.print(printArr.join(''));

    if (xNum != 0) {
      this.readGameCommand(bridge, count);
    } else {
      count++;
      if (count == bridge.length) {
        this.printResult();
      } else {
        this.readMoving(bridge, count);
      }
    }
  },

  readMoving(bridge, count) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (upDown) => {
      if (upDown == 'U') {
        upDown = 0;
      } else if (upDown == 'D') {
        upDown = 1;
      }

      OutputView.printMap(bridge, count, upDown);
    });
  },
  
  readGameCommand(bridge, count) {
    count = 0;
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (retry) => {
      if (retry == 'R') {
        this.readMoving(bridge, count);
      } else {
        this.printResult();
      }
    });
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
