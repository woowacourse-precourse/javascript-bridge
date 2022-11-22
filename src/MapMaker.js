const OutputView = require('./OutputView')

class MapMaker {
  #upperMapArray
  #lowerMapArray

  constructor() {
    this.#upperMapArray = [];
    this.#lowerMapArray = [];
  }

  selectRightBridge(direction) {
    if(direction === 'U') {
      this.#upperMapArray.push('O');
      this.#lowerMapArray.push(' ');
    }
    if (direction === 'D') {
      this.#upperMapArray.push(' ');
      this.#lowerMapArray.push('O');
    }
    OutputView.printMap(this.#upperMapArray, this.#lowerMapArray)
  }
}

module.exports = MapMaker;