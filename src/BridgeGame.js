/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * @param {string[]} bridge // 다리
   * @param {string[]} inputs // 플레이어의 입력
   * @return {string} // 출력할 map의 윗부분
   */
  makeUpperPart(bridge, inputs) {
    const upperPart = inputs.map((e, i) => {
      if (e !== 'U') return ' ';
      if (e === bridge[i]) return 'O';
      this.#isGameOver = true;
      return 'X';
    });

    return upperPart.join(' | ');
  }

  /**
   * @param {string[]} bridge // 다리
   * @param {string[]} inputs // 플레이어의 입력
   * @return {string} // 출력할 map의 아랫부분
   */
  makeLowerPart(bridge, inputs) {
    const lowerPart = inputs.map((e, i) => {
      if (e !== 'D') return ' ';
      if (e === bridge[i]) return 'O';
      this.#isGameOver = true;
      return 'X';
    });

    return lowerPart.join(' | ');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
