const { MissionUtils } = require('@woowacourse/mission-utils');
const Course = require('./Course');

class Pairs {
  mathedCrew = [];
  constructor(part, level, game) {
    this.part = new Course(part);
    this.level = level;
    this.game = game;
  }

  crewMatching() {
    const crew = this.part.getCrew();
    this.mathedCrew = MissionUtils.Random.shuffle(crew);
  }

  getMatchedCrew() {
    return this.mathedCrew;
  }

  getPart() {
    return this.part.getPart();
  }
}

module.exports = Pairs;
