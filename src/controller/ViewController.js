const OutputView = require("../view/OutputView");

const ViewController = {
    printStateHandling(state) {
        const characterStates = [state.upState, state.downState].map((state) => {
            return this.stringConversion(state);
        });
        this.printMap(characterStates);
    },

    stringConversion(state) {
        let characterState = '[ '
        state.forEach((element, index) => {
            characterState += `${element}`
            index === state.length - 1 ? characterState += ' ]' : characterState += ' | '
        })
        return characterState;
    },

    printMap(characterStates) {
        characterStates.forEach((map) => {
            OutputView.printMap(map);
        })
    },

    printResult(state, success) {
        if(success) OutputView.printLineBreak();
        this.printResultMap(state);
        this.printSuccess(success);
        this.printAttempts(state);
    },

    printResultMap(state) {
        OutputView.printResultPhrases();
        this.printStateHandling(state);
    },

    printSuccess(success) {
        const successResult = success ? `성공` : '실패';
        OutputView.printSuccess(successResult);
    },

    printAttempts(state) {
        const attempts = state.attempts;
        OutputView.printAttempts(attempts);
    },
}

module.exports = ViewController;