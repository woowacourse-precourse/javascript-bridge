/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const InputView=require('./InputView')
const BridgeRandomNumberGenerator=require('./BridgeRandomNumberGenerator')
const OutputView=require('./OutputView');
const BridgeGame = require('./BridgeGame');
const bridge=new BridgeGame()

const Input=require('./Input')
const inputClass=new Input()

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */

  makeBridge(size, generateRandomNumber) {
    // let bridgeArray=[]
    let bridgeString=[]
    // console.log(Number(size),'사이즈')
    for (let i = 0; i < Number(size); i++) {
      const number=generateRandomNumber()
      // bridgeArray.push(number)
      if(number===1) bridgeString.push("U")
      if(number===0) bridgeString.push("D")
    }
    // console.log(bridgeString);
    // return bridgeArray
    return bridgeString
  }
};

module.exports = BridgeMaker;
