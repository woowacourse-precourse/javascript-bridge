/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
// - `BridgeMaker`에 프로퍼티를 추가할 수 없다.
// - `BridgeMaker`의 파일 경로는 변경할 수 없다.
// - `BridgeMaker`의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let length = 0; length < size ; length++){
      generateRandomNumber() == 1 ? bridge.push("U") : bridge.push("D");
    } 
    return bridge;
  },
};

module.exports = BridgeMaker;
