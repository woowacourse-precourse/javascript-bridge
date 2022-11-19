const { UP, DOWN, ANSWER } = require('../utiles/Constant');

const MakeMap = {
  upBridge: [],
  downBridge: [],

  makePrintMap(userMove, isCorrect) {
    for (let i = 0; i < userMove.length-1; i++) {
      MakeMap.upBridge.push(userMove[i] === UP ? ANSWER.OK : ANSWER.BLANK);
      MakeMap.downBridge.push(userMove[i] === DOWN ? ANSWER.OK : ANSWER.BLANK);
    };

    MakeMap.makeMapLastItem(userMove[userMove.length-1], isCorrect);
  },

  makeMapLastItem(lastAnswer, answer) {
    MakeMap.upBridge.push(lastAnswer === UP ? answer : ANSWER.BLANK);
    MakeMap.downBridge.push(lastAnswer === DOWN ? answer : ANSWER.BLANK);
  },

  makeFinalOutputMap() {
    let outputMap = `[ ${MakeMap.upBridge.join(' | ')} ]\n`;
    outputMap += `[ ${MakeMap.downBridge.join(' | ')} ]\n`;
    MakeMap.printMapClear();
    return outputMap;
  },

  printMapClear() {
    MakeMap.upBridge = [];
    MakeMap.downBridge = [];
  },
};

module.exports = MakeMap;
