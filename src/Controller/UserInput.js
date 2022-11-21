class UserInput {
  #model;
  
  #view;
  
  #mainCtrl;

  constructor(model, view, mainCtrl) {
    this.#model = model;
    this.#view = view;
    this.#mainCtrl = mainCtrl;
  }

  readBridgeSize() {
    this.#view.readBridgeSize(this.onBridgeHandler.bind(this));
  }

  onBridgeHandler(answer) {
    try {
      this.#model.setBridgeSize(answer);
      this.#mainCtrl.makeBridge();
    } catch (e) {
      this.#view.printError(e.message);
      this.readBridgeSize();
    }
  }

  readMoving() {
    this.#view.readMoving(this.onMovingHandler.bind(this));
  }

  onMovingHandler(answer) {
    try {
      this.#model.setMoveList(answer);
      this.#mainCtrl.checkMoving(answer);
    } catch (e) {
      this.#view.printError(e.message);
      this.readMoving();
    }
  }

  readGameCommand() {
    this.#view.readGameCommand(this.onGameCommandHandler.bind(this));
  }

  onGameCommandHandler(answer) {
    try {
      this.#model.setGameCommand(answer);
      this.#mainCtrl.retryOrQuit();
    } catch (e) {
      this.#view.printError(e.message);
      this.readGameCommand();
    }
  }
  
  methodToCatchAllError(error) {
    this.#view.printError(e.message);
  }
}

module.exports = UserInput;