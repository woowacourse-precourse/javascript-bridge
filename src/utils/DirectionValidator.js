class DirectionValidator {
  static validate(letter) {
    if (this.#isLetterUorD(letter)) throw new Error("[ERROR] 방향은 U와 D만 입력할 수 있습니다.");
  }
  static #isLetterUorD(letter) {
    return letter !== "U" || letter !== "D";
  }
}
module.exports = DirectionValidator;
