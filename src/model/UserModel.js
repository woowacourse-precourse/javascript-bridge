class UserModel {
  #tryCount;
  #userMoving;

  constructor() {
    this.#tryCount = 0;
    this.#userMoving = [];
  }

  /**
   * 유저의 시도 횟수를 반환한다.
   * @return {number} [유저의 시도 횟수]
   */
  getTryCount() {
    return this.#tryCount;
  }

  // 유저의 시도 횟수를 1 증가시킨다.
  increaseTryCount() {
    this.#tryCount = this.#tryCount + 1;
  }

  /**
   * 유저가 이동한 경로를 반환한다.
   * @return {string[]} [유저 이동 경로]
   */
  getUserMoving() {
    return this.#userMoving;
  }

  /**
   * 유저가 이동한 칸을 userMove 배열에 추가한다.
   * @param userMove  {string} [유저가 이동한 칸]
   */
  appendUserMoving(userMove) {
    this.#userMoving.push(userMove);
  }

  // 유저 이동경로를 초기화한다.
  resetUserMoving() {
    this.#userMoving = [];
  }
}

module.exports = UserModel;
