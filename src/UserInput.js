class UserInput {
    constructor(input) {
        this.value = input;
        this.step;
    }
    setStep(number) {
        this.step = number;
    }
}

module.exports = UserInput;
