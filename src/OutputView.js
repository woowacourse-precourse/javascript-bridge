const { Console } = require("@woowacourse/mission-utils");
const { GameStatus } = require("./GameUtils")
const { OUTPUT_MESSAGE, SUCCESS, MOVE_VALID } = require("./Constants")

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
    if(GameStatus.bridge[i] === MOVE_VALID[upOrDown]) {
      return ' O |'
    }
    return '   |'
  },

  makeNextMoveOutput(upOrDown, nextMove) {
    if(MOVE_VALID[upOrDown] !== nextMove) {
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
    Console.print(OUTPUT_MESSAGE.HEADER)
    GameStatus.step -= 1;
    this.printMap(GameStatus.lastMove);
    Console.print(OUTPUT_MESSAGE.SUCCESS + SUCCESS[GameStatus.alive])
    Console.print(OUTPUT_MESSAGE.TRIED + GameStatus.tried)
    Console.close();
  },

  printError(error) {
    Console.print(error.message)
  },
};

module.exports = OutputView;
