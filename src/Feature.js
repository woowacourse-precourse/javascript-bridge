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

    gameOver() {
        let result = false;
        MissionUtils.Console.readline("재도전할거?", (INPUT) => {
            if (INPUT != "R" | INPUT != "Q") {
                throw new Error("[Error] R 아니면 Q만 입력");
            }
            if (INPUT == "R")   result = true;
        })

        return result;
    }

    crossBridge(bridge) {
        let userMove = "";
        let INDEX = 0;
        let GAME_COUNT = 1;
        let SUCCESS = "실패"

        while(true) {
            if (INDEX > bridge.length-1)  {
                SUCCESS = "성공"
                break;
            }

            userMove = this.inputUserMove();
            if (bridge[INDEX] == userMove) {
                MissionUtils.Console.print("success");
                INDEX += 1;
            }
            else {
                MissionUtils.Console.print("failed");
                if (this.gameOver()) {
                    INDEX = 0;
                    GAME_COUNT += 1;
                }
                MissionUtils.Console.print("real failed");
                break;
            }
        }

        MissionUtils.Console.print(`성공여부 : ${SUCCESS}`);
        MissionUtils.Console.print(`시도횟수 : ${GAME_COUNT}`);
        MissionUtils.Console.close();
    }
}