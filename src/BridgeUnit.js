class BridgeUnit {
    mark;
    markIndex;
    element = [`[   ]`, `[   ]`];
    constructor(characterBit) {
        this.value = characterBit;
    }

    setMark(mark) {
        this.mark = mark;
    }

    setMarkIndex(UorD) {
        this.markIndex = UorD;
    }

    setElement() {
        if (this.markIndex === 0) this.element = [`[ ${this.mark} ]`, `[   ]`];
        if (this.markIndex === 1) this.element = [`[   ]`, `[ ${this.mark} ]`];
    }
}

module.exports = BridgeUnit;