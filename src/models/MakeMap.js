const { UP_DOWN, ANSWER } = require('../utiles/Constant');

const MakeMap = {
  bridge: [[], []],

  makePrintMap(userMove, isOX) {
    for (let i = 0; i < userMove.length - 1; i++) {
      MakeMap.pushEachBridge(userMove[i], ANSWER.ok);
    };

    return MakeMap.makeMapLastItem(userMove[userMove.length - 1], isOX);
  },

  makeMapLastItem(lastAnswer, isOX) {
    MakeMap.pushEachBridge(lastAnswer, isOX);
    return MakeMap.makeFinalOutputMap()
  },

  pushEachBridge(userMove, isOX) {
    if (userMove === UP_DOWN.up) {
      MakeMap.bridge[0].push(isOX);
      return MakeMap.bridge[1].push(ANSWER.blank);
    };

    MakeMap.bridge[0].push(ANSWER.blank);
    return MakeMap.bridge[1].push(isOX);
  },

  makeFinalOutputMap() {
    let outputMap = '';

    MakeMap.bridge.forEach(upDownBridge => {
      outputMap = `${outputMap}[ ${upDownBridge.join(' | ')} ]\n`;
    });

    MakeMap.printMapClear();
    return outputMap;
  },

  printMapClear() {
    MakeMap.bridge = [[], []];
  },
};

module.exports = MakeMap;
