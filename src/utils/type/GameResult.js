/**
 * 게임 결과에 대한 인스턴스를 만들기 위한 클래스입니다.
 * 게임 종료 후 게임 결과를 출력하기 위해 사용합니다.
 */
class GameResult {
  constructor() {
    /** @type {boolean} 게임 종료 후 성공 여부를 나타냅니다.*/
    this.success = false;
    /**@type {number} 현재까지 몇번의 게임을 시도했는지 횟수를 나타냅니다.*/
    this.trial = 0;
  }
}

module.exports = GameResult;
