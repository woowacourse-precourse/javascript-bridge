const BridgeGame = require("../src/BridgeGame");

const bridgeGame = new BridgeGame(["U", "D", "U"]);
beforeAll(() => {
    bridgeGame;
});

describe("이동 테스트", () => {
    const mockIsBadMove = jest.fn((isKeyUp, bridge) => {
        const isKeyBadUp = isKeyUp && bridge === "D";
        const isKeyBadDown = !isKeyUp && bridge === "U";
        if (isKeyBadUp || isKeyBadDown) {
            return "X";
        } else {
            return "O";
        }
    });

    test("'U'를 입력받으면 true를 반환해야 합니다.", () => {
        const moveArray = ["U", "D", 1, "UU", "DD", "0", 0];
        const result = [true, false, false, false, false, false, false];

        moveArray.forEach((move, index) => {
            expect(bridgeGame.move(move)).toEqual(result[index]);
        });
    });

    test("'U'키를 입력받고 다리의 상태가 'D'라면 'O'를, 반대의 경우에는 'X'를 반환해야 합니다.", () => {
        const uKey = "U" && true;
        const dKey = "D" && false;
        const isKeyUpArray = [uKey, dKey, dKey];
        const bridge = bridgeGame.getBridgeArray();
        const result = ["O", "O", "X"];

        for (let i = 0; i < 3; i++) {
            expect(mockIsBadMove(isKeyUpArray[i], bridge[i])).toEqual(result[i]);
        }
    });
});

describe("재시작 테스트", () => {
    test("다리의 길이만큼 이동에 성공하면 통과해야 합니다.", () => {
        const input = [0, 2, "3", 3, 4];
        const result = [false, false, false, true, false];
        const bridgeLength = bridgeGame.getBridgeArray().length;

        for (let i = 0; i <= input.length - 1; i++) {
            expect(mockIsClear(input[i], bridgeLength)).toEqual(result[i]);
        }
    });

    const mockIsClear = jest.fn((moveCount, bridgeSize) => {
        return moveCount === bridgeSize;
    });

    test("'R'을 입력받으면 true를 반환해야 합니다.", () => {
        const answer = ["R", "Q", 123];
        const result = [true, undefined, undefined];

        for (let i = 0; i < answer.length; i++) {
            expect(bridgeGame.questionRetry(answer[i])).toEqual(result[i]);
        }
    });
});

describe("다리 구조 테스트", () => {
    const mockPrintMapResult = jest.fn((isKeyUpArray) => {
        const bridge = [];
        isKeyUpArray.forEach((boolean) => {
            boolean === true ? bridge.push(" O ") : bridge.push("   ");
        });
        return "[" + bridge.join("|") + "]";
    });

    const mockPushBridgeTrace = jest.fn((isKeyUp) => {
        if (isKeyUp) {
            return [" O ", "   "];
        } else {
            return ["   ", " O "];
        }
    });

    test("'U'키를 입력받으면 ` O ` 그렇지 않으면 `   `를 반환해야 합니다.", () => {
        const uKey = "U" && true;
        const isKeyUpArray = [uKey, !uKey, uKey];
        const bridgeStructure = [];
        for (let i = 0; i < isKeyUpArray.length; i++) {
            bridgeStructure.push(mockPushBridgeTrace(isKeyUpArray[i])[0]);
        }

        const bridge = "[" + bridgeStructure.join("|") + "]";
        expect(mockPrintMapResult(isKeyUpArray)).toEqual(bridge);
    });
});
