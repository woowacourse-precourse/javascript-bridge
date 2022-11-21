const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {

  constructor() {
    this.currSpot = 0 ;
    this.tryCount = 1 ;
    this.printMap = [[],[]] ;
    this.bridge ;
  }

  /**
   * User에게 숫자를 받아 정답다리를 만드는 함수
   * @param {number} num User에게 받은 다리의 길이
   */
   makeRandomBridge(num){
    this.num = num ;
    this.bridge =  makeBridge(num, generate) ; //ex. ["U","D","D"]
  }

   /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {string} userUD User에게 받은 U/D
   * @return {string} User의 U/D와 정답다리의 일치여부
   */
    move(userUD) {
      let nowbridge = this.bridge[this.currSpot] ;
      if (userUD == nowbridge) this.addPrintMap(userUD, "O") ;  //addPrintMap = 프린트용 배열에 요소 넣기 함수
      else this.addPrintMap(userUD, "X")
      this.currSpot++ ;
      return userUD == nowbridge ? "Go" : "Stop" ;
    }
  

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
