class BridgeUnit {
    constructor(characterBit) {
        this.value = characterBit;
        this.mark;
        this.markIndex;
        this.element = [`[   ]`, `[   ]`];
    }
    setMark(mark) {
        this.mark = mark;
    }
    setMarkIndex(UorD) {
        this.markIndex = UorD;
    }
    setElement() {
        this.element[this.markIndex] = `[ ${this.mark} ]`;
    }
}

module.exports = BridgeUnit;