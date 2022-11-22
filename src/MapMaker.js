const { OX, INPUT_VALUE } = require('./util/Constant');

const MapMaker = {
  upfloor: [],
  downfloor: [],

  fillPrintMap(userUd, inputOx) {
    for (let i = 0; i < userUd.length - 1; i++) {
      MapMaker.upfloor.push(userUd[i] === INPUT_VALUE.UP ? OX.CORRECT : ' ');
      MapMaker.downfloor.push(userUd[i] === INPUT_VALUE.DOWN ? OX.CORRECT : ' ');
    }
    MapMaker.fillMapLastUd(userUd[userUd.length - 1], inputOx);
  },

  fillMapLastUd(recentUd, inputOx) {
    MapMaker.upfloor.push(recentUd === INPUT_VALUE.UP ? inputOx : ' ');
    MapMaker.downfloor.push(recentUd === INPUT_VALUE.DOWN ? inputOx : ' ');
  },

  fillEndMap() {
    let outputMap = `[ ${MapMaker.upfloor.join(' | ')} ]\n`;
    outputMap += `[ ${MapMaker.downfloor.join(' | ')} ]\n`;
    MapMaker.printPlayingMap();
    return outputMap;
  },

  printPlayingMap() {
    MapMaker.upfloor = [];
    MapMaker.downfloor = [];
  },
};

module.exports = MapMaker;
