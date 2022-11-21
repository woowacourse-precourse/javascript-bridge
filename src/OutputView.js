const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveInputArray) {
    // moveInputArray = [{isRightDirect:true, moveInput},{},{}]
    const resultMap = [];
    let upsideBridge = '';
    let downsideBridge = '';
    for (let idx = 0; idx < 2; idx += 1) {
      // idx==0 이면 위칸
      // idx==1 이면 아래칸
      if (idx === 0) {
        // 위칸
        const upsideBlock = moveInputArray
          .map(({ isRightDirect, moveInput }) => {
            if (moveInput === 'U') {
              if (isRightDirect) return 'O';
              return 'X';
            }
            return ' ';
          })
          .join(' | ');
        upsideBridge = `[ ${upsideBlock} ]`;
        resultMap.push(upsideBridge);
      }
      if (idx === 1) {
        const downSideBlock = moveInputArray
          .map(({ isRightDirect, moveInput }) => {
            if (moveInput === 'D') {
              if (isRightDirect) return 'O';
              return 'X';
            }
            return ' ';
          })
          .join(' | ');
        downsideBridge = `[ ${downSideBlock} ]`;
        resultMap.push(downsideBridge);
      }
    }
    resultMap.forEach((bridge) => {
      Console.print(bridge);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  printGuide(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
