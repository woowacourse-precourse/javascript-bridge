const App = require("../src/App");
const { runException, getLogSpy, getOutput, mockQuestions, mockRandoms, expectLogContains } = require('../util/TestUtil');


describe("입력값 에러 테스트", () => {

    test("다리길이 type 테스트", () => {
        runException(["a"]);
    });

    test("다리길이 range 테스트", () => {
        runException(["100"]);
    });

    test("Move 값 테스트", () => {
        runException(["3", "z"]);
    });

    test("Commnad 값 테스트", () => {
        const logSpy = getLogSpy();
        mockRandoms([1, 0, 1]);
        mockQuestions(["3", "U", "D", "D", "K"]);
        const app = new App();
        app.play();
        expectLogContains(getOutput(logSpy), ["[ERROR]"]);
    });
});
