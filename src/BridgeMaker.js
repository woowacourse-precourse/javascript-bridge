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
    const bridge = Array.from(Array(2), () => new Array(size).fill(false));
    const string = [];
    // generateRandomNumber의 숫자를 보면서 1이면 up, 0이면 down을 갈 수 있다.
    // generateRandomNumber()는 0, 1중에 하나만 return

    for(let idx = 0; idx<size; idx++){
      const randomNum = generateRandomNumber();
      string.push(randomNum===1 ? 'U' : 'D');
    }

    return string;
  },
};

module.exports = BridgeMaker;
