/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(main){
    this.mainBridges = main;
    this.setBridge = {
      upBridge: [],
      downBridge: [],
    }
    this.result = false;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(i, user) {
    if(this.mainBridges[i] === user) this.result = true;
    if(this.mainBridges[i] !== user) this.settingXBridge(user);
    switch(this.result){
      case user == "U":
        this.makeUpDownBridge('O', ' ');
        break;
      case user == "D":
        this.makeUpDownBridge(' ', 'O');
        break;
    }
    return this.result;
  }
  settingXBridge(user){
    switch(true){
      case user == "U":
        this.makeUpDownBridge('X', ' ');
        break;
      case user == "D":
        this.makeUpDownBridge(' ', 'X');
        break;

    }
  }
  makeUpDownBridge(check1, check2){
    this.setBridge.upBridge.push(check1);
    this.setBridge.downBridge.push(check2);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
  }
}

module.exports = BridgeGame;
