class Result {
    constructor() {
        this.upArr = [];
        this.downArr = [];
    }

    printLine(arr) {
        let str = "[ ";
        for (let i = 0; i < arr.length(); i++) {
            if (i === arr.length() - 1) {
                str += arr.get(i) + " ]";
                break;
            }
            str += arr.get(i) + " | ";
        }
        return str;
    }
}

module.exports = Result;