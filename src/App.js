const MissionUtils = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const bridgeGame = require("./BridgeGame");
const { printMap, printResult } = require("./OutputView");

const Consolee = MissionUtils.Console;

class App {
  constructor(){
    this.size = 0;
  }
  play() {
    Consolee.print("다리 건너기 게임을 시작합니다.");
    this.settingGame();
  }
  startGame(){
    this.size = readBridgeSize();
  }
  
}

module.exports = App;
