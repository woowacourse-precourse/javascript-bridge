const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const print_history = (print_obj, cur_loc, bridge) => {
  for (let i = 0; i < cur_loc; i++){
    print_obj[bridge[i]] += " O |"
    //binary select Down or Up
    print_obj[Object.keys(print_obj).filter((e)=>e!==bridge[i])[0]] += "   |"
  }
  return print_obj
}

const print_last = (print_obj, cur_loc, bridge, input) => {
  if (bridge[cur_loc] === input) {
    print_obj[bridge[cur_loc]] += " O ]"
    print_obj[Object.keys(print_obj).filter((e)=>e!==bridge[cur_loc])[0]] += "   ]"
  } else if (bridge[cur_loc] !== input) {
    print_obj[bridge[cur_loc]] += " X ]"
    print_obj[Object.keys(print_obj).filter((e)=>e!==bridge[cur_loc])[0]] += "   ]"
  }
  return print_obj
}

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, input, cur_loc) {
    print_obj = {"U" : "[", "D" : "["}    
    print_obj = print_history(print_obj, cur_loc, bridge)
    print_obj = print_last(print_obj, cur_loc, bridge, input)
    MissionUtils.Console.print(print_obj["U"]);
    MissionUtils.Console.print(print_obj["D"]);    
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
