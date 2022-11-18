const ArraySize = require("./modules/ArraySize");

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
    // 다리의 길이만큼의 배열 생성
    const ARRAY = new ArraySize(size);
    let arrUp = ARRAY.getArr();
    let arrDown = ARRAY.getArr();
    // 0,1 무작위 값 설정
    let randomArr = ARRAY.getArr().map(
      (element) => (element = generateRandomNumber())
    );
    //다리 생성
    arrUp = randomArr.map((element) => (element === "1" ? "O" : " "));
    arrDown = randomArr.map((element) => (element === "0" ? "O" : " "));
  },
};

module.exports = BridgeMaker;
