const PositionFactory = require("./PositionFactory");

class TwoPositionFactory extends PositionFactory {
	convertToIndex(position) {
		switch (position) {
			case "U": return 0;
			case "D": return 1;
			default:
				throw new Error("[ERROR] 지정된 커맨드를 입력해주세요.");
		}
	}
}

module.exports = TwoPositionFactory;