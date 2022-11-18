/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */

const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    // 다리 N*M 배율
    // 2*size 배율을 만들어야함
    // 다리의 길이를 숫자로 입력받고 생성한다.
    // 다리를 생성할 때 위 칸과 아래 칸 중 건널 수 있는 칸은 0과 1 중 무작위 값을 이용해서 정한다.
    // 위 칸을 건널 수 있는 경우 U, 아래 칸을 건널 수 있는 경우 D값으로 나타낸다.
    // 무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.

    let BRIDGE = []    
    for (let i = 0 ; i < size ; i ++) {
      this.makeBridgePush(BRIDGE,generateRandomNumber())
    }
    return BRIDGE
  },

  makeBridgePush(bridge, number) {
    switch(number){
      case '1':
        bridge.push('U')
        return 
      case '0':
        bridge.push('D')
        return 
    }
  },

  makeTestBridge(size){
    let BRIDGE = []
    let BRIDGE_U = []
    let BRIDGE_D = []
    for (let i = 0 ; i < size ; i ++) {
      this.bridgePush(BRIDGE_U,BRIDGE_D)
    }
    BRIDGE.push(BRIDGE_U, BRIDGE_D)
    return BRIDGE
  },
  
  bridgePush(u_array , d_array){
    const NUMBER = BridgeRandomNumberGenerator.generate()
    switch(NUMBER){
      case '1':
        u_array.push('U')
        d_array.push('X')
        return 
      case '0':
        u_array.push('X')
        d_array.push('D')
        return 
    }
  }
};

module.exports = BridgeMaker;
