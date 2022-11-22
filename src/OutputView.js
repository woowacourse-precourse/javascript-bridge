const { print, close } = require('./Utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ bridge, positon, trace }) {
      ['U', 'D'].forEach(order =>
          print(
              `[${trace
                  .map((curTrace, index) => {
                      if (index <= positon) {
                          if (curTrace === order) {
                              if (bridge[index] === curTrace) return ' O ';
                              else return ' X ';
                          }
                      }
                      return '   ';
                  })
                  .join('|')}]`,
          ),
      );
      print('');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ IS_SUCCESS, that }) {
      print('최종 게임 결과');
      OutputView.printMap({ bridge: that.bridge, trace: that.trace, positon: that.position });
      print(`게임 성공 여부: ${IS_SUCCESS ? `성공` : `실패`}`);
      print(`총 시도한 횟수: ${that.tryCount}`);
      close();
  },
};

module.exports = OutputView;
