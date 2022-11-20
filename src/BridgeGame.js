const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeArr;

  constructor(length) {
    this.#bridgeArr = makeBridge(length, generate);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    // U를 선택한 경우 -> 정답 다리 리스트 해당 칸이 U인 경우 통과, D인 경우 실패
    // D를 선택한 경우 -> 정답 다리 리스트 해당 칸이 D인 경우 통과, U인 경우 실패
    // 통과 혹은 실패 여부 UI 로직에 넘겨주기
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    // 처음에 만든 정답 다리 리스트, 총 시도 횟수 기억한채로 iii.으로 다시 돌아감
  }
}

module.exports = BridgeGame;
