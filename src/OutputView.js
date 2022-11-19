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

const print_last = (print_obj, bridge_cur_loc, input) => {
  if (bridge_cur_loc === input) {
    print_obj[bridge_cur_loc] += " O ]"
    print_obj[Object.keys(print_obj).filter((e)=>e!==bridge_cur_loc)[0]] += "   ]"
  } else if (bridge_cur_loc !== input) {
    print_obj[bridge_cur_loc] += " X ]"
    print_obj[Object.keys(print_obj).filter((e)=>e!==bridge_cur_loc)[0]] += "   ]"
  }
  return print_obj
}

const final_output = (retry_cnt) => {
  MissionUtils.Console.print(`총 시도한 횟수: ${retry_cnt}`);  
  MissionUtils.Console.close() 
}

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, input, cur_loc) {
    console.log(bridge, input, cur_loc)
    print_obj = {"U" : "[", "D" : "["}    
    print_obj = print_history(print_obj, cur_loc, bridge)
    print_obj = print_last(print_obj, bridge[cur_loc], input)
    MissionUtils.Console.print(print_obj["U"]);
    MissionUtils.Console.print(print_obj["D"]);    
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, final_loc, retry_cnt) {
    MissionUtils.Console.print(`최종 게임 결과`);       
    if (bridge.length === (final_loc+1)){      
      this.printMap(bridge, bridge.slice(-1)[0], final_loc)
      MissionUtils.Console.print(`게임 성공 여부: 성공`);
    } else if (bridge.lenght !== (final_loc-1)){
      this.printMap(bridge, bridge[final_loc] === "D"? "U" : "D", final_loc)
      MissionUtils.Console.print(`게임 성공 여부: 실패`);
    }    
    final_output(retry_cnt)
  },
};

module.exports = OutputView;
