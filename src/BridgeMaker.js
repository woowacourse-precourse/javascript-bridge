/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const InputView=require('./InputView')
const BridgeRandomNumberGenerator=require('./BridgeRandomNumberGenerator')
const OutputView=require('./OutputView')

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  makeBridge(size, generateRandomNumber) {
    let bridgeArray=[]
    console.log(Number(size),'사이즈')
    for (let i = 0; i < Number(size); i++) {
      const number=generateRandomNumber()
      bridgeArray.push(number)
    }
    console.log(bridgeArray);
    return bridgeArray
  }
};

module.exports = BridgeMaker;
