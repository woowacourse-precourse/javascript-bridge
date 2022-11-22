const BridgeRandomNumberGenerator = require("../../BridgeRandomNumberGenerator");
const BridgeMaker = require("../../BridgeMaker");
const ModeStrategy = require("./ModeStrategy");
const Bridge = require("../../model/Bridge");
const Position = require("../../model/Position");
const { POSITION_TWO } = require("../../enum");

class ModeEasy extends ModeStrategy {
	getBridgeWidth() {
		return Object.keys(POSITION_TWO).length;
	}
	createPosition(positionSign) {
		return Position.createPosition(POSITION_TWO, positionSign);
	}

	createBridge(size) {
		return new Bridge(BridgeMaker
			.makeBridge(size, BridgeRandomNumberGenerator.generate)
			.map(this.createPosition.bind(this)));
	}
}

module.exports = ModeEasy;