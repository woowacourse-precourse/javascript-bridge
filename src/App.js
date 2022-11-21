const MissionUtils = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const bridgeGame = require("./BridgeGame");
const { printMap } = require("./OutputView");

const Consolee = MissionUtils.Console;

class App {
  constructor(){
    this.size = 0;
    this.randomBridge = [];
    this.userMove = '';
    this.run = 1;
  }
  play() {
    Consolee.print("다리 건너기 게임을 시작합니다.");
    this.settingGame();
  }
  settingGame(){
    this.size = readBridgeSize();
    for(let i = 0; i < size; i++){
      this.randomBridge[i] = generate();
    }
    bridgeGame.bridge = makeBridge(this.size, this.randomBridge);
    this.startGame();
  }
  startGame(){
    let num = this.size;
    let i = 0;
    let ok = true;
    while(i != num){
      ok = this.readMove(i);
      if(ok == false) break;
      i += 1;
    }
    this.checkResetOrFinish(ok);
  }
  readMove(num){
    this.userMove = readMoving();
    let moveCheck = bridgeGame.move(this.userMove, num);
    this.settingPrint();
    return moveCheck;
  }
  settingPrint(){
    let upArr, downArr = [];
    for(let i = 0; i < bridgeGame.check.length; i++){
      downArr[i] = bridgeGame.check[i];
      upArr[i] = " ";
      if(bridgeGame.current[i] == "U"){
        upArr[i] = bridgeGame.check[i];
        downArr[i] = " ";
      }
    }
    printMap(upArr, downArr);
  }
  checkResetOrFinish(isCheck){
    let read;
    if(isCheck == false){
      read = readGameCommand();
      this.reset(read);
    }
    if(isCheck == true){
      this.finish();
    }
  }
  reset(read){
    if(read == 'R'){
      bridgeGame.retry();
      this.userMove = '';
      this.run += 1;
      this.startGame();
    }
    this.finish();
  }
  finish(){

  }
}

module.exports = App;
