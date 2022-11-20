const Viewer = require('../../view/Viewer');
const mapMarker = require('../../utils/mapMarker');

class ViewInteractor {
  #view;
  #bridge;
  #user;

  constructor(UserInteractor, BridgeInteractor) {
    this.#view = new Viewer();
    this.#user = UserInteractor;
    this.#bridge = BridgeInteractor;
  }

  getBridgeSize(callback) {
    this.#view.readBridgeSize((input) => {
      try {
        callback(Number(input));
      } catch (error) {
        this.#view.printError(error);
        this.getBridgeSize(callback);
      }
    });
  }

  getMove(callback) {
    this.#view.readMoving((input) => {
      try {
        callback(input);
      } catch (error) {
        this.#view.printError(error);
        this.getMove(callback);
      }
    });
  }

  getGameCommand(callback) {
    this.#view.readGameCommand((input) => {
      try {
        callback(input);
      } catch (error) {
        this.#view.printError(error);
        this.getGameCommand(callback);
      }
    });
  }

  printMap() {
    this.#view.printMap(this.#getMap());
  }

  printResult(result) {
    this.#view.printResult({
      ...result,
      map: this.#getMap(),
    });
  }

  printError(error) {
    this.#view.printMessage(error);
  }

  printMessage(message) {
    this.#view.printMessage(message);
  }

  #getMap() {
    const userLog = this.#user.getLog();
    const userLocation = this.#user.getLocation();
    const bridge = this.#bridge.getBridge(userLocation);
    const [upSide, downSide] = mapMarker(userLog, bridge);
    const result = `[ ${upSide.join(' | ')} ]\n[ ${downSide.join(' | ')} ]\n`;
    return result;
  }
}

module.exports = ViewInteractor;
