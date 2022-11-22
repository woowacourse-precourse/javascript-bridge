const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  makeMap(bridge, lastPlace) {
    let [upperBridge, lowerBridge] = this.successGame(bridge, lastPlace);

    if(bridge.length!==lastPlace){
      let [failUp, failLow] = this.failGame(bridge, lastPlace);
      upperBridge = [...upperBridge, ...failUp];
      lowerBridge = [...lowerBridge, ...failLow];
    }

    return this.MaptoString([upperBridge, lowerBridge]);
  },

  successGame(bridge, lastPlace){
    let upperBridge = [];
    let lowerBridge = [];

    bridge.filter((_, index) => index<lastPlace).forEach((element) => {
      if(element==='U'){
        upperBridge.push('O');
        lowerBridge.push(' ');
      }else if(element==='D'){
        lowerBridge.push('O');
        upperBridge.push(' ');
      }
    });

    return [upperBridge, lowerBridge];
  },

  failGame(bridge, lastPlace) {
    let upperBridge = [];
    let lowerBridge = [];
    
    if(bridge[lastPlace]==='U'){
      lowerBridge.push('X');
      upperBridge.push(' ');
    }else if(bridge[lastPlace]==='D'){
      upperBridge.push('X');
      lowerBridge.push(' ');
    }
    return [upperBridge, lowerBridge];
  },

  MaptoString(map){
    return `[ ${map[0].join(' | ')} ]\n[ ${map[1].join(' | ')} ]`;
  },

  printMap(bridge, lastPlace) {
    const MESSAGE = this.makeMap(bridge, lastPlace);
    MissionUtils.Console.print(MESSAGE);
  },

  printResult(bridge, lastPlace, tried) {
    const MAP = this.makeMap(bridge, lastPlace);
    const RESULT = this.getResult(bridge, lastPlace);
    const MESSAGE = `최종 게임 결과
    \n${MAP}
    \n
    \n게임 성공 여부: ${RESULT}
    \n총 시도한 횟수: ${tried}`;

    MissionUtils.Console.print(MESSAGE);
  },

  getResult(bridge, lastPlace) {
    if(bridge.length===lastPlace){
      return '성공';
    }
    return '실패';
  }
};

module.exports = OutputView;
