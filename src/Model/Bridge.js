class Bridge {
  constructor(directions) {
    this.directions = directions;
  }

  isLastPosition(playerCurrPosition) {
    return playerCurrPosition === this.directions.length;
  }

  isSameDirection(direction, currPosition) {
    return this.directions[currPosition] === direction;
  }
}

module.exports = Bridge;
