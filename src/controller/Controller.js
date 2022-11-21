const BridgeInteractor = require('../domain/usecases/BridgeInteractor');
const UserInteractor = require('../domain/usecases/UserInteractor');
const ViewInteractor = require('../domain/usecases/ViewInteractor');

const BridgeGame = require('../service/BridgeGame');

class Controller {
  constructor() {
    const user = new UserInteractor();
    const bridge = new BridgeInteractor();
    this.service = new BridgeGame(user, bridge);
    this.viewer = new ViewInteractor(user, bridge);
  }

  play() {
    this.viewer.getBridgeSize((size) => {
      this.service.makeBridge(size);
      this.playRoutine();
    });
  }

  playRoutine() {
    this.service.init();
    this.aliveRoutine();
  }

  aliveRoutine() {
    this.viewer.getMove((direction) => {
      this.move(direction);
      this.service.judge({
        success: this.exit.bind(this, true),
        fending: this.aliveRoutine.bind(this),
        failure: this.retry.bind(this, false),
      });
    });
  }

  move(direction) {
    this.service.move(direction);
    this.viewer.printMap();
  }

  retry() {
    this.viewer.getGameCommand((command) => {
      this.service.retryTrigger(command, {
        restart: this.playRoutine.bind(this), exit: this.exit.bind(this),
      });
    });
  }

  exit(withSuccess) {
    const result = this.service.exit(withSuccess);
    this.viewer.printResult(result);
  }
}

module.exports = Controller;
