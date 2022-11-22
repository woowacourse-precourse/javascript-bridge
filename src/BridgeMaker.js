/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수 int return
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다. bridge
   */
  makeBridge(size, generateRandomNumber) {
    let bridgeArr = [];
    for(let i = 0; i< size; i++){
      bridgeArr.push(this.convertBridge(generateRandomNumber.generate()));
    }
    return bridgeArr;
  },

  convertBridge(eachBridge){
    switch(eachBridge){
      case 0:
        return "D"
      case 1:
        return "U"
    }
  }
};

module.exports = BridgeMaker;
