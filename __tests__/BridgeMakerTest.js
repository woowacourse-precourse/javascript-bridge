const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const App = require("../src/App");

describe("다리 건너기 테스트", () => {
    test("다리 길이 입력 받기 예외 처리", () => {
        expect(() => {
            BridgeMaker(30);
        }).toThrowError("");
    });
});