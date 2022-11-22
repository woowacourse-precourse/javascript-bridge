const { BRIDGE } = require("./Constant");

class BridgeGame {
  constructor(){
    this.upBridgeList = [];
    this.downBridgeList = [];
    this.count = 0;
    this.retryCount = 1;
  }

  setCount(){
    this.count += 1;
  }

  getCount(){
    return this.count;
  }

  getUpBridgeList(){
    return this.upBridgeList;
  }

  getDownBridgeList(){
    return this.downBridgeList;
  }


  isWrong(upBridge,downBridge){
    if(upBridge.includes(BRIDGE.NOT_PASS) || downBridge.includes(BRIDGE.NOT_PASS)) return true;

    return false;
  }

  move(space,bridge) {
    const standardBridge = bridge.getBridge();;
    let count = this.getCount();

    if(space === BRIDGE.UP) this.upMove(standardBridge,count);
    if(space === BRIDGE.DOWN) this.downMove(standardBridge,count);

    this.setCount();
  }

  upMove(standardBridge,count){
    if(standardBridge[count] === BRIDGE.UP){
      return (
        this.upBridgeList.push(BRIDGE.PASS),
        this.downBridgeList.push(' ')
      )
    }
    this.upBridgeList.push(BRIDGE.NOT_PASS);
    this.downBridgeList.push(' ');
  }

  downMove(standardBridge,count){
    if(standardBridge[count] === BRIDGE.DOWN){
      return (
        this.upBridgeList.push(' '),
        this.downBridgeList.push(BRIDGE.PASS)
      )
    }
    this.upBridgeList.push(' ');
    this.downBridgeList.push(BRIDGE.NOT_PASS);
  }

  setCountRetry(){
    this.retryCount += 1;
    this.count = 0;
  }

  getCountRetry(){
    return this.retryCount;
  }

  retry(bridge) {
    this.setCountRetry();
    this.upBridgeList = [];
    this.downBridgeList = [];
  }
}

module.exports = BridgeGame;
