const { OX, INPUT_VALUE } = require('../util/Constant');

const MapMaker = {
  upFloor: [],
  downFloor: [],

  fillPrintMap(userUpdown, inputUpDown) {
    for (let i = 0; i < userUpdown.length - 1; i++) {
      MapMaker.upFloor.push(
        userUpdown[i] === INPUT_VALUE.UP ? OX.CORRECT : ' '
      );
      MapMaker.downFloor.push(
        userUpdown[i] === INPUT_VALUE.DOWN ? OX.CORRECT : ' '
      );
    }
    MapMaker.fillMapLastInput(userUpdown[userUpdown.length - 1], inputUpDown);
  },

  fillMapLastInput(recentUpdown, inputUpDown) {
    MapMaker.upFloor.push(recentUpdown === INPUT_VALUE.UP ? inputUpDown : ' ');
    MapMaker.downFloor.push(
      recentUpdown === INPUT_VALUE.DOWN ? inputUpDown : ' '
    );
  },

  fillEndMap() {
    let resultMap = `[ ${MapMaker.upFloor.join(' | ')} ]\n`;
    resultMap += `[ ${MapMaker.downFloor.join(' | ')} ]\n`;
    MapMaker.printPlayingMap();
    return resultMap;
  },

  printPlayingMap() {
    MapMaker.upFloor = [];
    MapMaker.downFloor = [];
  },
};

module.exports = MapMaker;
