/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input, count, i, bridge) { 
    if(i==count){
      return iSameCount(input, i, bridge);
    }
    else{
      return idifferentCount(input, i, bridge);
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   retry(input) {
    if (input == 'R'){
      return "Retry";
    }
    else{
      return "END";
    }
  }
}

function iSameCount(input, i, bridge){
  if (bridge[i] == input){
    return "Success";
  }
  else{
    return iSameZero(i);
  }
  
}

function iSameZero(i){
  if (i == 0){
    return "PrintFirstX";
  }
  else{
    return "PrintX";
  }
}

function idifferentCount(input, i, bridge){
  if (bridge[i] == input){
    return iSameInput(i);
  }    
  else{
    return iSameZero(i);
  }
}

function iSameInput(i){
  if (i == 0){
    return "PrintFirstO";
  }
  else{
    return "PrintO"
  }
}



module.exports = BridgeGame;
