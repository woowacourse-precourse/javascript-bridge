const { OPTION, PROGRESS_MAP } = require('../utils/constants');
const { createBlueprint } = require('../utils/bridgeHandler');

class ProgressMap {
  #progressData;

  constructor(progressData) {
    this.#progressData = progressData;
  }

  createMap(progressData) {
    const upRow = this.drawMap(progressData, OPTION.UP);
    const downRow = this.drawMap(progressData, OPTION.DOWN);
    const upString = PROGRESS_MAP.PARSE_STRING(upRow);
    const downString = PROGRESS_MAP.PARSE_STRING(downRow);

    return { up: upString, down: downString };
  }

  drawMap(progressData, position) {
    const blueprint = createBlueprint(progressData.length);
    const progressMap = [...blueprint].map((_, index) => {
      const data = progressData[index];
      return this.classifyResult(data, position);
    });

    return progressMap;
  }

  classifyResult(data, position) {
    if (data.select !== position) return PROGRESS_MAP.BLANK;

    if (data.alive) return PROGRESS_MAP.ALIVE;

    return PROGRESS_MAP.DIE;
  }
}

module.exports = ProgressMap;
