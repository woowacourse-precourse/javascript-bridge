class RoundProcess {
    #roundProcess;
  
    constructor() {
      this.#roundProcess = [];
    }
  
    checkProcess(bridgeArray, round) {
      this.#roundProcess = round;
      const currentStep = this.checkNowStep();
      const correctChoice = this.checkWrongChoice(bridgeArray, currentStep);
      const UserIsWin = this.checkWin(bridgeArray, currentStep, correctChoice);
  
      return [correctChoice, UserIsWin];
    }
  
    checkNowStep() {
      return this.#roundProcess.length - 1;
    }
    checkWrongChoice(bridgeArray, currentStep) {
      return this.#roundProcess[currentStep] === bridgeArray[currentStep];
    }
    checkWin(bridgeArray, currentStep, correctChoice) {
      return bridgeArray.length - 1 === currentStep && correctChoice;
    }
  }
  
  module.exports = RoundProcess;
  