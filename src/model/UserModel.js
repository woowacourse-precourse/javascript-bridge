class UserModel {
  #tryCount;

  constructor() {
    this.#tryCount = 0;
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
}

module.exports = UserModel;
