class MakeMap {
    upLine;
    downLine;

    constructor(userRoute) {
        this.upLine = [];
        this.downLine = [];
        this.makeMap(userRoute);
    }

    makeMap(userRoute) {
        userRoute.forEach((ele, index) => {
            this.pushDivide(index);
            this.createPlayerBridge(ele);
        });
        this.cover();
        return {
            upLine: this.upLine,
            downLine: this.downLine,
        };
    }

    createPlayerBridge({ userInput, isMove }) {
        if (userInput === 'U') {
            if (isMove === true) this.upLine.push('O');
            if (isMove === false) this.upLine.push('X');
            this.downLine.push(' ');
        }
        if (userInput === 'D') {
            this.upLine.push(' ');
            if (isMove === true) this.downLine.push('O');
            if (isMove === false) this.downLine.push('X');
        }
    }

    pushDivide(index) {
        if (index > 0) {
            this.upLine.push('|');
            this.downLine.push('|');
        }
    }

    cover() {
        this.upLine.unshift('[');
        this.upLine.push(']');
        this.downLine.unshift('[');
        this.downLine.push(']');
    }
}
module.exports = MakeMap;