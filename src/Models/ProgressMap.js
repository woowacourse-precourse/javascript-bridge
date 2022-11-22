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
    const upString = `[${upRow.join(PROGRESS_MAP.SEPARATOR)}]`;
    const downString = `[${downRow.join(PROGRESS_MAP.SEPARATOR)}]`;

    return { up: upString, down: downString };
  }

  drawMap(progressData, position) {
    const blueprint = createBlueprint(progressData.length);
    const progressMap = [...blueprint].map((_, index) => {
      const data = progressData[index];
      if (data.select !== position) return PROGRESS_MAP.BLANK;

      if (data.alive) return PROGRESS_MAP.ALIVE;

      return PROGRESS_MAP.DIE;
    });

    return progressMap;
  }
}

module.exports = ProgressMap;
