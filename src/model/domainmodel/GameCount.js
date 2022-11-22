class GameCount {
  constructor(count) {
    this.gamecount = count;
  }

  getgameCount() {
    return this.gamecount;
  }

  setgameCount() {
    this.gamecount += 1;
    return this.gamecount;
  }
}
Object.freeze(GameCount);

module.exports = GameCount;
