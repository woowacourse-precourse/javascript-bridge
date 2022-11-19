const { Random } = require("@woowacourse/mission-utils");

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  generateRandomNumber() {
    //무작위 값이 0인 경우 아래 칸(D), 1인 경우 위 칸(U)이 건널 수 있는 칸이 된다.
    var randomNum = Random.pickNumberInList([0,1]);      
    return randomNum;
  },

  makeBridge(size, generateRandomNumber) {
    const bridgeList = [];
    for (var i=0; i<size; i++) {
      const generateRandomNumber = (this.generateRandomNumber()==1) ? 'U' : 'D';
      
      bridgeList.push(generateRandomNumber);
    }
    return bridgeList;
  },


};

module.exports = BridgeMaker;
