class CheckModel {
  #movingProcess;

  constructor() {
    this.#movingProcess = [];
  }

  check(bridge, movingProcess) {
    this.#movingProcess = movingProcess;
    const nowStep = this.checkNowStep();
    const isSafe = this.checkTrap(bridge, nowStep);
    const isEnd = this.checkEnd(bridge, nowStep, isSafe);
    return [isSafe, isEnd];
  }

  checkNowStep() {
    return this.#movingProcess.length - 1;
  }

  checkTrap(bridge, nowStep) {
    return this.#movingProcess[nowStep] === bridge[nowStep];
  }

  checkEnd(bridge, nowStep, isSafe) {
    return bridge.length - 1 === nowStep && isSafe;
  }
}

module.exports = CheckModel;
