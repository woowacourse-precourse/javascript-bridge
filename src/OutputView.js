const { Console } = require("@woowacourse/mission-utils");
const GameStatus = require("./GameStatus")

const validMove = ['U', 'D']

const SUCCESS = {
  true: '성공',
  false: '실패',
}

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(nextMove) {
    const output = []
    GameStatus.lastMove = nextMove;
    output.push(this.makeOutput(0, nextMove))
    output.push(this.makeOutput(1, nextMove))
    Console.print(output[0].join(''))
    Console.print(output[1].join(''))
  },

  makeOutput(upOrDown, nextMove) {
    const output = ['[']
    for(let i=0; i<GameStatus.step; i++){
      output.push(this.alreadyPass(upOrDown, i))
    }
    output.push(this.makeNextMoveOutput(upOrDown, nextMove))
    return output;
  },

  alreadyPass(upOrDown, i) {
    if(GameStatus.bridge[i] === validMove[upOrDown]) {
      return ' O |'
    }
    return '   |'
  },

  makeNextMoveOutput(upOrDown, nextMove) {
    if(validMove[upOrDown] !== nextMove) {
      return '   ]'
    }
    if(GameStatus.bridge[GameStatus.step] !== nextMove) {
      GameStatus.alive = false;
      return ' X ]'
    }
    return ' O ]'
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print('\n최종 게임 결과')
    GameStatus.step -= 1;
    this.printMap(GameStatus.lastMove);
    Console.print('\n게임 성공 여부: ' + SUCCESS[GameStatus.alive])
    Console.print('총 시도한 횟수: ' + GameStatus.tried)
    Console.close();
  },

  printSizeError() {
    Console.print('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.')
  },

  printMoveError() {
    Console.print("[ERROR] 이동할 칸은 'U' 또는 'D' 여야 합니다.")
  },

  printRetryError() {
    Console.print("[ERROR] 게임 재시작/종료 여부는 'R' 또는 'Q' 여야 합니다.")
  }
};

module.exports = OutputView;
