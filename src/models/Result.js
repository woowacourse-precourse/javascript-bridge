const { printMap, printResult } = require('../views/OutputView');

class Result {
  result;
  canMoveForward;

  constructor(bridge, index, canMoveForward) {
    this.canMoveForward = canMoveForward;
    this.result = this.makeLine(bridge, 'U', index);
    this.result += this.addSuffix(bridge.getBridgeFragmentByIndex(index), canMoveForward, 'U');
    this.result += '\n';
    this.result += this.makeLine(bridge, 'D', index);
    this.result += this.addSuffix(bridge.getBridgeFragmentByIndex(index), canMoveForward, 'D');
  }

  makeLine(bridge, rightDirection, index) {
    let string = '[';

    for (let i = 0; i < index; i++) {
      const direction = bridge.getBridgeFragmentByIndex(i);
      if (direction === rightDirection) string += ' O ' + '|';
      else string += '   ' + '|';
    }

    return string;
  }

  addSuffix(lastFragment, canMoveForward, rightDirection) {
    if (canMoveForward) {
      if (rightDirection === lastFragment) return ' O ]';
      return '   ]';
    }

    if (rightDirection === lastFragment) return ' X ]';
    return '   ]';
  }

  print() {
    printMap(this.result);
  }
}

module.exports = Result;
