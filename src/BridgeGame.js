const InputVIew = require('./InputView');
const OutputView = require('./OutputView');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(size, information) {
    this.size = size;
    this.information = information;
    this.try = 1; //시도 횟수
    this.current_moving = [];
    this.move(this.size, this.information);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge_size, bridge_information) {
    let move;
    for (let i = 0; i < bridge_size; i++) {
      //bridge size만큼 이동
      move = InputVIew.readMoving(); //U or D 입력받음
      if (move === bridge_information[i]) {
        //checking
        //제대로 이동
        this.current_moving.push(move);
        OutputView.printMap(this.current_moving, true); //move -> 'U'  or  'D'
      } else {
        //제대로 이동 못함
        OutputView.printMap(this.current_moving, false);
        this.retry();
        return;
      }
    }
    OutputView.printResult(this.current_moving, true, this.try);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    let command = InputVIew.readGameCommand();
    if (command === 'Q') {
      OutputView.printResult(this.current_moving, false, this.try);
    } else if (command === 'R') {
      this.try += 1;
      this.current_moving = [];
      this.move(this.size, this.information);
    }
  }
}

module.exports = BridgeGame;
