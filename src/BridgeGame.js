const MissionUtils = require('@woowacourse/mission-utils')
const bridgeMaker = require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
 
 class BridgeGame {
   #size
   #bridge
   #remainBridge
   #MoveData
   #tryCount
   constructor(size) {
     this.#size = size;
     this.bridge();
     this.#bridge;
     this.#remainBridge;
     this.#MoveData = [];
     this.#tryCount = 1;
   }
 
   validateSize(size, callback) {
    try{ if (isNaN(size) || size < 3 || size > 20) throw '\n\n[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n\n';} 
    catch(e) {
      MissionUtils.Console.print(e);
      callback.call(this);
    }finally{
    };
    return
   }
 
   validateMoveInput(move, callback) {
     if (move === 'U' || move === 'D') {
      return true;
    }
     try {throw '\n\n[ERROR] "U" 혹은 "D"를 입력해주세요.\n\n';}
     catch(e) {
      MissionUtils.Console.print(e);
    }finally{
      callback.call(this);
     };
   }
 
   validateRetry(command, callback) {
     if (command === 'R' || command === 'Q') {
      return true;
    }
     try {throw '\n\n[ERROR] "R" 혹은 "Q"를 입력해주세요.\n\n';}
     catch(e) {
      MissionUtils.Console.print(e);
    }finally{
      callback.call(this);
     };
   }
 
   bridge() {
     const GenarateRandomNums = BridgeRandomNumberGenerator.generate;
     this.#bridge = bridgeMaker.makeBridge(this.#size, GenarateRandomNums);
     this.#remainBridge = this.#bridge.slice();
     return this.#remainBridge;
   }
 
   get remainBridge() {
     return this.#remainBridge;
   }
 
   get tryCount() {
     return this.#tryCount;
   }

   move(userSelect) {
     const correctSide = this.#remainBridge.shift();
     const isRightSelect = this.checkCorrect(userSelect, correctSide);
     const currentMoveData = this.moveToSelect(userSelect, isRightSelect);
     this.#MoveData.push(...currentMoveData);
 
     return [isRightSelect, this.#MoveData];
   }
 
   checkCorrect(userSelect, correctSide) {
     if (userSelect !== correctSide) return false;
     return true;
   }
   
   moveToSelect(userSelect, isRightSelect) {
     let upSide = [], downSide = [];
     let direction = upSide, otherDirection = downSide;
     if (userSelect === 'D'){direction = downSide; otherDirection = upSide;};
 
     isRightSelect ? direction.push('O') : direction.push('X');
     otherDirection.push(' ');
 
     return [...upSide, ...downSide];
   }
 
   retry() {
     this.#tryCount += 1;
     this.#MoveData = [];
     this.#remainBridge = this.#bridge.slice();
     return 
   }
 }
 
 module.exports = BridgeGame;