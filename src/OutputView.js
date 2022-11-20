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
    let upper_text = ['['];
    let lower_text = ['['];
    this.print_except_last_element(moving_list,upper_text,lower_text);
    if (correct) {//마지막 요소 점검, 마지막 요소 프린트
      this.print_last_element_correct(moving_list,upper_text,lower_text);
    } else {
      this.print_last_element_uncorrect(moving_list,upper_text,lower_text);
    }
    this.print_close(upper_text,lower_text);
    this.print(upper_text,lower_text);
  },


  print_U_or_D(element,upper,lower){
    if (element === 'U') {
      upper.push(' O ');
      lower.push('   ');
      return;
    } 
      upper.push('   ');
      lower.push(' O ');
  },
  print_seperate(upper,lower){
    upper.push('|')
    lower.push('|')
  },

  print_except_last_element(moving_list,upper,lower){
    const list_length=moving_list.length
    for (let i = 0; i < list_length - 1; i++) {
      this.print_U_or_D(moving_list[i],upper,lower);
      if (i + 1 !== list_length) {
        this.print_seperate(upper,lower);
      }
    }
  },
  print_last_element_correct(moving_list,upper,lower){
    const list_length = moving_list.length;
    if (moving_list[list_length - 1] === 'U') {
      upper.push(' O ');
      lower.push('   ');
      return;
    } 
      upper.push('   ');
      lower.push(' O ');
  },
  print_last_element_uncorrect(moving_list,upper,lower){
    const list_length = moving_list.length;
    if (moving_list[list_length - 1] === 'U') {
      upper.push(' X ');
      lower.push('   ');
      return;
    } 
      upper.push('   ');
      lower.push(' O ');
  },
  print_close(upper,lower){
    upper.push(']');
    lower.push(']');
  },
  print(upper,lower){
    MissionUtils.Console.print(upper.join(''));
    MissionUtils.Console.print(lower.join(''));
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(moving_list, success, retry) {
    MissionUtils.Console.print('최종 게임 결과');
    this.printMap(moving_list, success);
    if (success) {
      MissionUtils.Console.print('게임 성공 여부: 성공');
    } else {
      MissionUtils.Console.print('게임 성공 여부: 실패');
    }
    MissionUtils.Console.print(`총 시도한 횟수: ${retry}`);
  },
};

module.exports = OutputView;
