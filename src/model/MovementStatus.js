/**
 *
 * 다리 이동 결과를 출력하기 위해 필요한 클래스입니다.
 * 이동한 다리 길이, 왼쪽 다리의 이동결과 리스트, 오른쪽 다리의 이동 결과 리스트를 갖습니다.
 */

class MovementStatus {
  constructor() {
    /** @type {number} moveLength 지금까지 이동한 다리길이 */
    this.round = 0;
    /**@type {Array<boolean>} 다리의 왼쪽편 이동 결과가 담긴 배열*/
    this.upperSideStatus = [];
    /**
     * 다리의 오른쪽편 이동 결과 담긴 배열
     * @type {Array<boolean>}
     */
    this.lowerSideStatus = [];
  }
}

module.exports = MovementStatus;
