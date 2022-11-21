class Validation {
    bridgeSize(size) {
        if(isNaN(size)) {
            throw new Error("[ERROR]");
        }
        if(Number(size) < 3 || 20 < Number(size)) {
            throw new Error("[ERROR]");
        }
        if(Number(size) % 1 !== 0) {
            throw new Error("[ERROR]");
        }
    }
}

module.exports = Validation;