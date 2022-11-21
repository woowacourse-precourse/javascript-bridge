const Print = require('../src/Print');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(userInput, bridgeInfo) {
    const upside = this.generateUpside(userInput, bridgeInfo);
    const downside = this.generateDownside(userInput, bridgeInfo);
    Print.BothBridge(upside, downside);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(userInput, bridgeInfo, count) {
    Print.ResultTitle();
    this.printMap(userInput, bridgeInfo);
    Print.Blank();
    if(userInput.length === bridgeInfo.length){
      Print.GameResultIsWin();
    }
    if(userInput.length !== bridgeInfo.length){
      Print.GameResultIsDefeat();
    }
    Print.GameTryCount(count);
  },
  generateUpside(userInput, bridgeInfo) {
    const bridge = [];
    this.openBracketTo(bridge);
    for (let i = 0; i < userInput.length; i++) {
      this.makeEachSectionAtUpside(userInput[i], bridgeInfo[i], bridge);
    }
    bridge.pop();
    this.CloseBracketTo(bridge);
    return bridge;
  },
  makeEachSectionAtUpside (userInput, bridgeInfo, bridge) {
    if(bridgeInfo === 'U') {
      this.printOMarkAtUpside(userInput, bridge);
      this.printXMarkAtDownside(userInput, bridge);
      this.printBlankAtUpside(userInput, bridgeInfo, bridge);
    }
    bridge.push(' | ');
  },
  printOMarkAtUpside(userInput, bridge){
    if(userInput === 'U'){
      bridge.push('0');
    }
  },
  printXMarkAtDownside(userInput, bridge){
    if(userInput === 'D'){
      bridge.push('X');
    }
  },
  printBlankAtUpside(userInput, bridgeInfo, bridge){
    if(userInput === 'D' && bridgeInfo === 'D'){
      bridge.push('\u00A0');
    }
  },
  generateDownside(userInput, bridgeInfo) {
    const bridge = [];
    this.openBracketTo(bridge);
    for (let i = 0; i < userInput.length; i++) {
      this.makeEachSectionAtDownside(userInput[i], bridgeInfo[i], bridge);
    }
    bridge.pop();
    this.closeBracketTo(bridge);
    return bridge;
  },
  makeEachSectionAtDownside (userInput, bridgeInfo, bridge) {
    if(bridgeInfo === 'D') {
      this.printOMarkAtDownside(userInput, bridge);
      this.printXMarkAtUpside(userInput, bridge);
      this.printBlankAtDownside(userInput, bridgeInfo, bridge);
    }
    addDivisionTo(bridge);
  },
  printXMarkAtDownside(userInput, bridge){
    if(userInput === 'U'){
      bridge.push('X');
    }
  },
  printOMarkAtDownside(userInput, bridge){
    if(userInput === 'D'){
      bridge.push('0');
    }
  },
  printBlankAtDownside(userInput, bridgeInfo, bridge){
    if(userInput === 'U' && bridgeInfo === 'U'){
      bridge.push('\u00A0');
    }
  },
  closeBracketTo(bridge){
    bridge.push(' ]');
  },
  openBracketTo(bridge){
    bridge.push('[ ');
  },
  addDivisionTo(bridge){
    bridge.push(' | ');
  }
};

module.exports = OutputView;
