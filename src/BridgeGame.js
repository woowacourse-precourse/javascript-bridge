const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #upperTrack = [];
  #lowerTrack = [];
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(moving, block) {
    if (moving !== "U" && moving !== "D") throw "U 또는 D가 아님";
    if (moving === block) return true;
    return false;
  }

  markOX(mark) {
    if (mark == true) return " O ";
    return " X ";
  }

  markElements(moving, bool) {
    if (moving === "U") {
      this.#upperTrack.push(this.markOX(bool));
      this.#lowerTrack.push("   ");
      return;
    }
    this.#upperTrack.push("   ");
    this.#lowerTrack.push(this.markOX(bool));
  }

  makeLine(track) {
    let line = "[";
    for(let i = 0; i < track.length; i++){
      line += track[i];
      if(i == track.length - 1){
        line += "]"
        break;
      }
      line += "|";
    }
    return line;
  }

  printReady(moving, bool) {
    this.markElements(moving, bool);
    const upperTrack = this.makeLine(this.#upperTrack);
    const lowerTrack = this.makeLine(this.#lowerTrack);
    return [lowerTrack, upperTrack];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
