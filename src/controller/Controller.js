const BridgeInteractor = require('../domain/usecases/BridgeInteractor');
const UserInteractor = require('../domain/usecases/UserInteractor');
const ViewInteractor = require('../domain/usecases/ViewInteractor');

const BridgeGame = require('../service/BridgeGame');
const STATUS = require('../service/service.constants');

class Controller {
  constructor() {
    const user = new UserInteractor();
    const bridge = new BridgeInteractor();
    this.service = new BridgeGame(user, bridge);
    this.viewer = new ViewInteractor(user, bridge);
    this.BehaviorHash = this.setStateBehavior();
  }

  setStateBehavior() {
    return new Map([
      [STATUS.done, this.exit.bind(this, true)],
      [STATUS.running, this.playRoutine.bind(this)],
      [STATUS.failure, this.retry.bind(this, false)],
    ]);
  }

  play() {
    this.viewer.getBridgeSize((size) => {
      this.service.makeBridge(size);
      this.playRoutine();
    });
  }

  playRoutine() {
    this.viewer.getMove((direction) => {
      this.move(direction);
      const { status } = this.service.getGameStatus();
      this.BehaviorHash.get(status)();
    });
  }

  move(direction) {
    this.service.move(direction);
    this.viewer.printMap();
  }

  retry() {
    this.viewer.getGameCommand((command) => {
      this.service.retry(command, {
        restart: () => {
          this.service.resetUser();
          this.playRoutine();
        }, exit: this.exit.bind(this),
      });
    });
  }

  exit(withSuccess) {
    const result = this.service.exit(withSuccess);
    this.viewer.printResult(result);
  }
}

module.exports = Controller;
