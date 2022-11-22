class CheckModel {
  constructor() {
    movingProcess = [];
  }

  static check(bridge, movingProcess) {
    this.movingProcess = movingProcess;
    const nowStep = this.checkNowStep();
    const isSafe = this.checkTrap(bridge, nowStep);
    const isEnd = this.checkEnd(bridge, nowStep, isSafe);
    return [isSafe, isEnd];
  }

  static checkNowStep() {
    return this.movingProcess.length - 1;
  }

  static checkTrap(bridge, nowStep) {
    return this.movingProcess[nowStep] === bridge[nowStep];
  }

  static checkEnd(bridge, nowStep, isSafe) {
    return bridge.length - 1 === nowStep && isSafe;
  }
}

module.exports = CheckModel;
