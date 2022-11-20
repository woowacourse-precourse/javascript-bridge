/**
 * 한 라운드에 대한 상태 인스턴스를 만들기 위한 클래스입니다.
 * 진행된 라운드, 라운드 결과값을 프로퍼티로 갖습니다.
 *
 */
class RoundStatus {
  constructor() {
    /**@type  {number} round 현재 라운드를 표시*/
    this.round = 0;
    /**@type  {boolean | null} result null인 경우 공백 출력, boolean인 경우 O 또는 X 출력*/
    this.result = null;
  }
}

/**
 *
 * 다리 이동 결과를 출력하기 위해 필요한 클래스입니다.
 * 이동한 다리 길이, 왼쪽 다리의 이동결과 리스트, 오른쪽 다리의 이동 결과 리스트를 갖습니다.
 */

class MovementStatus {
  constructor() {
    /** @type {number} moveLength 지금까지 이동한 다리길이 */
    this.moveLength = 0;
    /**@type {Array<RoundStatus>} 다리의 왼쪽편 이동 결과가 담긴 배열*/
    this.leftSideStatus = [];
    /**
     * 다리의 오른쪽편 이동 결과 담긴 배열
     * @type {Array<RoundStatus>}
     */
    this.rightSideStatus = [];
  }
}

module.exports = { MovementStatus, RoundStatus };
