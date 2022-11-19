const STRING = require('../../constants/string');

class Move {
  // path값이 U일때 입력이 U라면 O 반환
  static moveUp(direction) {
    return direction === STRING.UP ? STRING.O : STRING.X;
  }

  // path값이 D일때 입력이 D라면 O 반환
  static moveDown(direction) {
    return direction === STRING.DOWN ? STRING.O : STRING.X;
  }

  // 입력받은 direction과
  // 정답 path값에 따라 값 비교하여 반환
  // 각각 다른 함수 호출
  static byDirection(currentCell, direction) {
    return currentCell === STRING.UP
      ? this.moveUp(direction)
      : this.moveDown(direction);
  }
}

module.exports = Move;
