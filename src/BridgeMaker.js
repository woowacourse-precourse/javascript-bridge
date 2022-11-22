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
    const BRIDGE_ARRAY = [];
    let whileCount = 0;
    while (whileCount < size) {
      const RANDOM_NUMBER = generateRandomNumber();
      const COMMAND = makeCommand(RANDOM_NUMBER);
      BRIDGE_ARRAY.push(COMMAND);
      whileCount += 1;
    }
    return BRIDGE_ARRAY;
  }
};

function makeCommand(number) {
  const RANDOM_NUMBER = String(number);
  if (RANDOM_NUMBER === "1") return "U";
  if (RANDOM_NUMBER === "0") return "D";
  return null;
}

module.exports = BridgeMaker;
