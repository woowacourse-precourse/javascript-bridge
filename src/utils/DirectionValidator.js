class DirectionValidator {
  static validateDirection(direction) {
    if (!(direction === "U" || direction === "D")) {
      throw new Error("[ERROR] 잘못된 입력입니다. U 또는 D를 입력해주세요.");
    }
  }
}
module.exports = DirectionValidator;
