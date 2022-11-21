const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
let tryNum = 1;
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
    let success = 0;
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
      this.readGameCommand(bridge, count, upDown, success);
    } else {
      count++;
      if (count == bridge.length) {
        success++;
        this.printResult(bridge, count, upDown, success);
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
  
  readGameCommand(bridge, count, upDown, success) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (retry) => {
      if (retry == 'R') {
        tryNum++;
        count = 0;
        this.readMoving(bridge, count);
      } else {
        this.printResult(bridge, count, upDown, success);
      }
    });
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, count, upDown, success) {
    Console.print('최종 게임 결과');
    if (success == 1) {
      count--;
    }
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
      }
      printArr.push(` ${upMark} `);
      printArr.push('|');
    }
    printArr.pop();
    printArr.push(']');
    Console.print(printArr.join(''));
    if (success == 0) {
      Console.print('\n게임 성공 여부: 실패');
    } else {
      Console.print('\n게임 성공 여부: 성공');
    }
    Console.print(`총 시도한 횟수: ${tryNum}`);
    Console.close();
  },
};

module.exports = OutputView;
