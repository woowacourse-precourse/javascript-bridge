class BridgeGame {
  bridge;
  progressCnt;
  isOkWay;
  finishGame;
  userWay;
  tryCnt;
  bridge;

  constructor(bridge) {
    this.bridge = bridge;
    this.progressCnt = 0;
    this.tryCnt = 1;
    this.isOkWay = false;
    this.finishGame = false;
    this.userWay = [];
    this.bridgeMap = {
      up: "[",
      down: "[",
    };
  }

  move(userSelectValue) {
    console.log(userSelectValue);
    this.progressCnt += 1;
    this.checkCorrectWay(userSelectValue);
    this.mapMaker();
  }

  checkCorrectWay(userSelectValue) {
    if (userSelectValue == this.bridge[this.progressCnt - this.tryCnt]) {
      this.isOkWay = true;
      this.checkFinishWay();
      return;
    }
    this.isOkWay = false;
  }

  checkFinishWay() {
    if (this.progressCnt - this.tryCnt + 1 == this.bridge.length) {
      this.finishGame = true;
    }
  }

  mapMaker() {
    if (this.isOkWay) {
      this.drawCorrectWay();
      return;
    }
    this.drawFalseWay();
  }

  drawCorrectWay() {
    this.drawMap(this.bridge[this.progressCnt - this.tryCnt], "O");
  }

  drawFalseWay() {
    this.drawMap(
      this.upsideDown(this.bridge[this.progressCnt - this.tryCnt]),
      "X"
    );
  }

  drawMap(way, check) {
    if (way == "U") {
      this.bridgeMap.up = this.bridgeMap.up + ` ${check} |`;
      this.bridgeMap.down = this.bridgeMap.down + "   |";
      return;
    }
    this.bridgeMap.up = this.bridgeMap.up + "   |";
    this.bridgeMap.down = this.bridgeMap.down + ` ${check} |`;
  }

  upsideDown(way) {
    if (way == "U") {
      return "D";
    }
    return "U";
  }

  retry() {
    this.tryCnt += 1;
    this.cutLastTryMap();
  }

  cutLastTryMap() {
    this.bridgeMap.up = this.bridgeMap.up.substring(
      0,
      this.bridgeMap.up.length - 4
    );
    this.bridgeMap.down = this.bridgeMap.down.substring(
      0,
      this.bridgeMap.down.length - 4
    );
  }
}

exports.BridgeGame = BridgeGame;
