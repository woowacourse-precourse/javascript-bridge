class UserModel {
  #tryCount;
  #userMove;

  constructor() {
    this.#tryCount = 0;
    this.#userMove = [];
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
  getUserMove() {
    return this.#userMove;
  }
}

module.exports = UserModel;
