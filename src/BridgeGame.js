const bridgeMaker = require('./BridgeMaker')
const bridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge
  #steps
  #map

  constructor(size){
    this.#steps=[]
    this.#map = {up: [], down: []}
    
    this.buildBridge(size)
    console.log(this.#bridge)
  }

  buildBridge(size){
    this.#bridge = bridgeMaker.makeBridge(size, bridgeRandomNumberGenerator.generate)
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    this.#steps.push(direction)

    const isDirectionRight = this.#bridge[this.#steps.length-1] === direction
    
    this.fillMap(direction, isDirectionRight)
    
    return isDirectionRight
  }

  fillMap(direction, isDirectionRight){
    const mark = isDirectionRight? 'O' : 'X'

    if(direction === 'U'){
      this.#map.up.push(mark)
      this.#map.down.push(' ')
    }else{
      this.#map.up.push(' ')
      this.#map.down.push(mark)
    }
  }
  getMap(){
    return this.#map
  }

  isEnd(){
    return this.#bridge.length === this.#steps.length
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
