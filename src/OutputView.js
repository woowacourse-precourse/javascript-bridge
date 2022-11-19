/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moving_list, correct) {
    console.log('llllllllllllist', moving_list);
    const list_length = moving_list.length;
    let upper_text = '[';
    let lower_text = '[';
    for (let i = 0; i < list_length - 1; i++) {
      if (moving_list[i] === 'U') {
        upper_text += ' O ';
        lower_text += '   ';
      } else if (moving_list[i] === 'D') {
        upper_text += '   ';
        lower_text += ' O ';
      }

      if (i + 1 !== list_length) {
        upper_text += '|';
        lower_text += '|';
      }
    }
    if (correct) {
      //마지막 요소 점검
      if (moving_list[list_length - 1] === 'U') {
        upper_text += ' O ';
        lower_text += '   ';
      } else if (moving_list[list_length - 1] === 'D') {
        upper_text += '   ';
        lower_text += ' O ';
      }
    } else {
      if (moving_list[list_length - 1] === 'U') {
        upper_text += ' X ';
        lower_text += '   ';
      } else if (moving_list[list_length - 1] === 'D') {
        upper_text += '   ';
        lower_text += ' X ';
      }
    }
    upper_text += ']';
    lower_text += ']';

    MissionUtils.Console.print(upper_text);
    MissionUtils.Console.print(lower_text);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(moving_list, success, retry) {
    MissionUtils.Console.print('최종 게임 결과');
    this.printMap(moving_list);
    if (success) {
      MissionUtils.Console.print('게임 성공 여부: 성공');
    } else {
      MissionUtils.Console.print('게임 성공 여부: 실패');
    }
    MissionUtils.Console.print(`총 시도한 횟수: ${retry}`);
  },
};

module.exports = OutputView;
