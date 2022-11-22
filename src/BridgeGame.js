/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  constructor(size, bridge) {
    this.size = size; // 입력받은 다리 길이
    this.bridge = bridge; // 만들어진 다리 정보
    this.up = []; // 위로가는 다리 
    this.down = []; // 아래로 가는 다리
    this.cnt = 0; // 현재 몇번 입력이 되었는지 카운팅
    this.check = true; // 사용자가 정답인 다리를 입력했는지 확인
    this.tryCnt=1; // 게임 실행을 몇번 했는지 확인
    this.success="성공"; // 게임에 성공 여부를 확인
  };
  move(movement) {
    if (movement === "U") {
      this.checkUp(movement, this.cnt, this.bridge);
    }
    else {
      this.checkDown(movement, this.cnt, this.bridge);
    };
  };
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {};
}

module.exports = BridgeGame;
