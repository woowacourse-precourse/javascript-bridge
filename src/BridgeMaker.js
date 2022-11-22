/**
 * 객체 - 다리의 길이를 입력 받아 다리 생성
 * 변경불가 : 파일경로, 프로퍼티, 메서드의 시그니처(인자, 이름), 반환 타입
 */

const { CONFIG, KEY } = require("./Constants/Token");

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  makeBridge(size, generateRandomNumber) {
    const resolved = Number(size);

    if (resolved < CONFIG.BRIDGE_START || resolved > CONFIG.BRIDGE_END) {
      return false;
    }

    return Array.from({ length: resolved }, () => generateRandomNumber()).map(
      (value) => (value === CONFIG.SET_UP ? KEY.BRIDGE_UP : KEY.BRIDGE_DOWN)
    );
  },
};

module.exports = BridgeMaker;
