const {mapContent} = require('./StringModule');

class MakeMap {
  firstfloor;

  secondfloor;

  constructor(playerArr) {
    this.firstfloor = [];
    this.secondfloor = [];
    this.makeMap(playerArr);
  }

  makeMap(playerArr) {
    playerArr.forEach((ele, index) => {
      this.pushDivide(index);
      this.createPlayerBridge(ele);
    });
    this.bracket();
    return this.resultBridgeShape();
  }

  createPlayerBridge({ userInput, isMove }) {
    if(userInput === 'U'){
      this.firstfloor.push(mapContent[isMove]);
      this.secondfloor.push(mapContent.NONE);
    }
    if(userInput === 'D') {
      this.firstfloor.push(mapContent.NONE);
      this.secondfloor.push(mapContent[isMove]);
    }
  }

  pushDivide(index) {
    if (index > 0) {
      this.firstfloor.push('|');
      this.secondfloor.push('|');
    }
  }

  bracket() {
    this.firstfloor.unshift('[');
    this.firstfloor.push(']');
    this.secondfloor.unshift('[');
    this.secondfloor.push(']');
  }

  resultBridgeShape() {
    return {
      firstfloor: this.firstfloor,
      secondfloor: this.secondfloor,
    };
  }

}
module.exports = MakeMap;
