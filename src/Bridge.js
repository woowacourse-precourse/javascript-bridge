class Bridge {
  #answerBridge = [];
  #upBridge;
  #downBridge;
  #stage = 0;

  move(command, stage) {
    this.#stage++;
    if (this.#answerBridge[stage] === command) {
      return this.passableBridge(command);
    }
    return this.unPassableBridge(command);
  }

  passableBridge(command) {
    switch (command) {
      case "U": {
        this.#upBridge.push("O");
        this.#downBridge.push(" ");
        break;
      }
      case "D": {
        this.#upBridge.push(" ");
        this.#downBridge.push("O");
        break;
      }
    }
  }
  unPassableBridge(command) {
    switch (command) {
      case "U": {
        this.#upBridge.push("X");
        this.#downBridge.push(" ");
        break;
      }
      case "D": {
        this.#upBridge.push(" ");
        this.#downBridge.push("X");
        break;
      }
    }
    //gameOver()
  }
}
