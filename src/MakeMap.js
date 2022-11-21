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
    if (userInput === 'U') {
      if (isMove) {
        this.firstfloor.push('O');
        this.secondfloor.push(' ');
      }
      if (!isMove) {
        this.firstfloor.push('X');
        this.secondfloor.push(' ');
      }
    }
    if (userInput === 'D') {
      if (isMove) {
        this.firstfloor.push(' ');
        this.secondfloor.push('O');
      }
      if (!isMove) {
        this.firstfloor.push(' ');
        this.secondfloor.push('X');
      }
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
