class Result {
  static #TYPE = {
    success: '성공',
    fail: '실패',
  };

  static print(type) {
    return `게임 성공 여부: ${Result.#result(type)}`;
  }

  static #result(type) {
    return Result.#TYPE[type] ?? new Error('[ERROR]');
  }
}

module.exports = Result;
