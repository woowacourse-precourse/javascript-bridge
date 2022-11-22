const { Console } = require('@woowacourse/mission-utils');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge, inputMove) {
    if(bridge == inputMove) {
      return true;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(inputRestart) {
    if(inputRestart=='R'){
      return true;
    }
  }
  
  checkBridgeSize(input) {
    if(!(input >= 3 && input <= 20)){
      Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  }

  checkBridgeNumber(input) {
    if(isNaN(input)){
      Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다."); 
  }
}

  checkGameCommand(input){
    if(!(input =='R' || input == 'Q')){
      Console.print("[ERROR] 재시작 여부는 R이나 Q 여야 합니다."); 
    }
  }

  checkMoveCommand(input){
    if(!(input =='U' || input == 'D')){
      Console.print("[ERROR] 이동할 칸은 U이나 D 여야 합니다."); 
    }
  }

  checkInputSpace(input){
    if(input.includes(" ")){
      Console.print("[ERROR] 입력에 공백이 없어야합니다."); 
    }
  }
}

module.exports = BridgeGame;
