class UserInput {
    constructor(UorD) {
        this.value = UorD;
        this.step;
    }
    setStep(number) {
        this.step = number;
    }
}

module.exports = UserInput;
