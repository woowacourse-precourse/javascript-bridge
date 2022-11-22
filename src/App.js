const BridgeGameController = require('./controllers/BridgeGameController');

/**
 * 어플리케이션 클래스
 * @class
 */
class App {
  /**
   * 컨트롤러 타입
   * @type {BridgeGameController}
   */
  #controller;

  play() {
    this.#controller = new BridgeGameController();
    this.#controller.play();
  }
}

module.exports = App;
