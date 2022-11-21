const CONSTANT = Object.freeze({
    BRIDGE_FIRST : 3,
    BRIDGE_END : 20
});

const BRIDGE = Object.freeze({
   "0" : "D",
   "1" : "U"
});

const MOVE = Object.freeze(["U", "D"]);
const RETRY = Object.freeze(["R","Q"]);

module.exports = {CONSTANT, BRIDGE, MOVE, RETRY};
