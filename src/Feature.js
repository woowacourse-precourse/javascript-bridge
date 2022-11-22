const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const MakeRandomValue = require('../src/BridgeRandomNumberGenerator');

class Feature {
    play() {
        this.inputBridge();
    }

    inputBridge() {
        let bridge = [];
        MissionUtils.Console.readline("다리크기 입력.", (INPUT) => {
            bridge = BridgeMaker.makeBridge(INPUT, MakeRandomValue.generate());
            this.crossBridge(bridge);
        });
    }

    inputUserMove() {
        let result = "";
        MissionUtils.Console.readline("이동할 칸 선택.", (INPUT) => {
            this.inputUserMoveError(INPUT);
            result = INPUT;
        })

        return result;
    }

    inputUserMoveError(INPUT) {
        if (INPUT != "U" | INPUT != "D") {
            throw new Error("[Error] U 혹은 D를 입력해주세요.")
        }
    }
}