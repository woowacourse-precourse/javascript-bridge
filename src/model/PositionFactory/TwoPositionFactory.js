const { POSITION_TWO } = require("../../enum");
const PositionFactory = require("./PositionFactory");

class TwoPositionFactory extends PositionFactory {
	convertToIndex(position) {
		if (!POSITION_TWO.hasOwnProperty(position))
			throw new Error("[ERROR] 지정된 커맨드를 입력해주세요.");
		return POSITION_TWO[position];
	}
}

module.exports = TwoPositionFactory;