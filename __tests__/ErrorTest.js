// const MissionUtils = require("@woowacourse/mission-utils");
// const App = require("../src/App");

// const mockQuestions = (answers) => {
//     MissionUtils.Console.readLine = jest.fn();
//     answers.reduce((acc, input) => {
//         return acc.mockImplementationOnce((_, callback) => {
//             callback(input);
//         });
//     }, MissionUtils.Console.readLine);
// };

// const getLogSpy = () => {
//     const logSpy = jest.spyOn(MissionUtils.Console, "print");
//     logSpy.mockClear();
//     return logSpy;
// };

// const getOutput = (logSpy) => {
//     return [...logSpy.mock.calls].join("");
// };

// const runException = (inputs) => {
//     mockQuestions(inputs);
//     const logSpy = getLogSpy();
//     const app = new App();
//     app.play();
//     expectLogContains(getOutput(logSpy), ["[ERROR]"]);
// };

// describe("입력값 에러 테스트", () => {

//     test("다리길이 type 테스트", () => {
//         runException(["a"]);
//     });

//     test("다리길이 range 테스트", () => {
//         runException(["100"]);
//     });

//     test("Move 값 테스트", () => {
//         runException(["3", "z"]);
//     });

//     test("Move 값 테스트", () => {
//         runException(["3", "z"]);
//     });

// });
