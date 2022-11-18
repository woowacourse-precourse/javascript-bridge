/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    // TODO: 상수는 상수 폴더에 따로 모아서 관리
    const LOWER_BRIDGE_NUMBER = 0;
    const UPPER_BRIDGE_NUMBER = 1;
    const LOWER_BRIDGE_LETTER = "D";
    const UPPER_BRIDGE_LETTER = "U";

    return Array.from({ length: size }, () => generateRandomNumber()).map((number) => {
      if (Number(number) === LOWER_BRIDGE_NUMBER) return LOWER_BRIDGE_LETTER;
      if (Number(number) === UPPER_BRIDGE_NUMBER) return UPPER_BRIDGE_LETTER;
    });
  },
};

module.exports = BridgeMaker;
