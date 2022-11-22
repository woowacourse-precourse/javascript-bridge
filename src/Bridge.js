/**
 * 다리를 관리하는 클래스
 */
 class Bridge {
  constructor() {
    this.bridge = [];
    this.userSpaces = [];
  }

  /**
   * 다리를 저장하는 메서드
   */
  setBridge = (bridge) => {
    this.bridge = bridge;
  };

  /**
   * 이동한 칸을 추가하는 메서드
   */
  pushSpace = (space) => {
    this.userSpaces.push(space);
  };
}

module.exports = Bridge;