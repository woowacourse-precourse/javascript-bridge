/**
 * 현재까지 이동한 블록과 이동 성공 여부를 기반으로 이동한 다리의 상태를 생성해주는 역할을 한다.
 */
const BridgeMapMaker = {
  EMPTY: ' ',
  /**
   * @param {Object[]} moveHistory 현재까지 이동한 블록들과 이동 성공 여부가 담긴 배열
   * @returns {Array<string[]>} 현재까지 이동한 다리의 상태
   */
  makeBridgeMap(moveHistory) {
    return moveHistory.reduce(
      (prevMap, { block, isCorrect }) => {
        const [upperMap, lowerMap] = prevMap;
        return block === 'U'
          ? [this.update(upperMap, isCorrect), [...lowerMap, this.EMPTY]]
          : [[...upperMap, this.EMPTY], this.update(lowerMap, isCorrect)];
      },
      [[], []],
    );
  },

  /**
   * 다리 일부분의 상태를 업데이트하는 메서드
   * @param {string[]} partialMap 업데이트할 다리 일부분의 상태
   * @param {boolean} isCorrect 이동 성공 여부
   * @returns {string[]} 업데이트한 다리 일부분의 상태. 이동에 성공하면 O, 실패하면 X로 표현한다.
   */
  update(partialMap, isCorrect) {
    return [...partialMap, isCorrect === true ? 'O' : 'X'];
  },
};

module.exports = BridgeMapMaker;
