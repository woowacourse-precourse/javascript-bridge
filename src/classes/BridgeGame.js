/**
 * 다리 건너기 게임을 관리하는 클래스 -> InputView, OutputView 사용 불가
 * 변경 가능 : 파일경로, 필드 추가, 메서드 인자, 메서드
 * 변경 불가 : 메서드 이름
 * 이쪽은 외부 인자 가져와서 깔끔하게 처리하는 로직
 * 책임 소재를 가장 확실히 정해야 하는 로직 : App, BridgeGame, GameLogic
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    //실질적 (반복이 시작되는) 시작 로직
    const history = { upper: [], lower: [], count: 0 };
    // 칸을 이동한다 : 입력받고, 비교하고, 표 만든다.
    // GameLogic: history 객체를 받아서, 로직 처리 후 history 내보냄
    // 여기서 {history} 리턴
    return history;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    // 동일 다리 array 가져오기 + 시도횟수 리셋
    // ~~의 시작메서드 실행
  }
}

module.exports = BridgeGame;
