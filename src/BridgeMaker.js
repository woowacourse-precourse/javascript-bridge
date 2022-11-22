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
    let BRIDGE = []    
    for (let i = 0 ; i < size ; i ++) {
      this.makeBridgePush(BRIDGE,generateRandomNumber())
    }
    return BRIDGE
  },

  makeBridgePush(bridge, number) {
    switch(number){
      case 1:
        bridge.push('U')
        return 
      case 0:
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
    this.bridgePushSwitch(u_array,d_array,NUMBER)
  },
  
  bridgePushSwitch(u_array , d_array , NUMBER) {
    switch(NUMBER){
      case 1:
        u_array.push('U')
        d_array.push('X')
        return 
      case 0:
        u_array.push('X')
        d_array.push('D')
        return 
    }
  }
};

module.exports = BridgeMaker;
