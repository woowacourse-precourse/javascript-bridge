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
  move(movePoint, obstacle) {
    return obstacle === movePoint ? true : false;
  }

  markOX(mark) {
    if (mark == true) return " O ";
    return " X ";
  }

  marking(movePoint, bool) {
    if (movePoint === "U") {
      this.#upperTrack.push(this.markOX(bool));
      this.#lowerTrack.push("   ");
      return;
    }
    this.#upperTrack.push("   ");
    this.#lowerTrack.push(this.markOX(bool));
  }

  makeLine(track) {
    let line = "[";
    for (let i = 0; i < track.length; i++) {
      line += track[i];
      if (i == track.length - 1) {
        line += "]";
        break;
      }
      line += "|";
    }
    return line;
  }

  bridgeDrawing(movePoint, bool) {
    this.marking(movePoint, bool);
    const upper = this.makeLine(this.#upperTrack);
    const lower = this.makeLine(this.#lowerTrack);
    return [lower, upper];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    if (command == "R") return true;
    return false;
  }
}

module.exports = BridgeGame;
