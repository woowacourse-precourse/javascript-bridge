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
		if (!POSITION_TWO.hasOwnProperty(positionSign))
			throw new Error("[ERROR] 지정된 커맨드를 입력해주세요.");
		return new Position(POSITION_TWO[positionSign]);
	}

	createBridge(size) {
		return new Bridge(BridgeMaker
			.makeBridge(size, BridgeRandomNumberGenerator.generate)
			.map(this.createPosition.bind(this)));
	}
}

module.exports = ModeEasy;