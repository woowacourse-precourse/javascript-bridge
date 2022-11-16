const { DEFAULTS } = require("../utils/Constants");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(){
    this.init();
    this.restartcnt = 1;
  }

  init(){
    this.upList = [];
    this.downList = [];
    this.answer = [];
    this.movecnt = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answer, upOrdown) {
    this.answer = answer; 
    (answer[this.movecnt] === upOrdown) ? this.checkUporDown(upOrdown, 'O') : this.checkUporDown(upOrdown, 'X');
    this.movecnt += 1;
    return [this.upList, this.downList, this.movecnt];
  }

  checkUporDown(upOrdown, mark){
    if (upOrdown === DEFAULTS.UP){
      (this.upList.length !== 0) ? this.upList.push('|', mark) : this.upList.push(mark);
      (this.downList.length !== 0) ? this.downList.push('|', ' ') : this.downList.push(' ');
    }
    if (upOrdown === DEFAULTS.DOWN){
      (this.upList.length !== 0) ? this.upList.push('|', ' ') : this.upList.push(' ');
      (this.downList.length !== 0) ? this.downList.push('|', mark) : this.downList.push(mark);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.init();
    this.restartcnt += 1;
  }
}

const bridgeGame = new BridgeGame();
module.exports = bridgeGame;
