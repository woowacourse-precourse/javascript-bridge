const Course = require('../model/Course');
const GameList = require('../GameList');
const InputView = require('../view/InputView');
const OutView = require('../view/OutView');
const Utiles = require('../Utiles');
const Pairs = require('../model/Pairs');

class PairController {
  pairs = [new Pairs('백엔드', '레벨1', '로또')];

  init() {
    this.selectMenu();
    const callback = (level, game) => Utiles.hasGame(level, game);
    const callback2 = (part, level, game) => this.setPairs(part, level, game);
    InputView.init(callback, callback2);
  }

  setPairs(part, level, game) {
    if (this.getPairs(part, level, game).length) return this.selectAgain();

    const pair = new Pairs(part, level, game);
    this.pairs.push(pair);

    console.log(...this.pairs);
    // pair.crewMatching();
  }

  selectMenu() {
    const levels = Object.keys(GameList);
    OutView.initMessage(levels);
  }

  getPairs(part, level, game) {
    const partFilter = this.pairs.filter(pair => pair.getPart() === part);
    const levelFilter = partFilter.filter(pair => pair.level === level);
    const finalFilter = levelFilter.filter(pair => pair.game === game);
    return finalFilter;
  }

  selectAgain() {
    console.log('셀렉 어게인 입니다.');
  }
}

module.exports = PairController;
