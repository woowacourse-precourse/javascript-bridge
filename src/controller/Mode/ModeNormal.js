const BridgeRandomNumberGenerator = require("../../BridgeRandomNumberGenerator");
const BridgeMaker = require("../../BridgeMaker");
const ModeStrategy = require("./ModeStrategy");
const Bridge = require("../../model/Bridge");
const Position = require("../../model/Position");
const { POSITION_THREE } = require("../../enum");
const MissionUtils = require("@woowacourse/mission-utils");

function generate() {
	return MissionUtils.Random.pickNumberInRange(0, 2);
}

function makeBridge(size, generateRandomNumber) {
	const dictionary = Object.fromEntries(Object.entries(POSITION_THREE).map(item => item.reverse()));
	return Array
		.from({ length: size })
		.map(() => dictionary[generateRandomNumber()]);
}

class ModeNormal extends ModeStrategy {
	getBridgeWidth() {
		return Object.keys(POSITION_THREE).length;
	}

	createPosition(positionSign) {
		return Position.createPosition(POSITION_THREE, positionSign);
	}

	createBridge(size) {
		return new Bridge(makeBridge(size, generate).map(this.createPosition.bind(this)));
	}
}

module.exports = ModeNormal;