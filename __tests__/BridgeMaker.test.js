

describe("다리 생성 테스트", () => {
    test("다리 생성 테스트", () => {
        const size = 3;

    })

});



//   test("다리 생성 테스트", () => {
//     const randomNumbers = ["1", "0", "0"];
//     const mockGenerator = randomNumbers.reduce((acc, number) => {
//       return acc.mockReturnValueOnce(number);
//     }, jest.fn());

//     const bridge = BridgeMaker.makeBridge(3, mockGenerator);
//     expect(bridge).toEqual(["U", "D", "D"]);
//   });

//   test("기능 테스트", () => {
//     const logSpy = getLogSpy();
//     mockRandoms(["1", "0", "1"]);
//     mockQuestions(["3", "U", "D", "U"]);

//     const app = new App();
//     app.play();

//     const log = getOutput(logSpy);
//     expectLogContains(log, [
//       "최종 게임 결과",
//       "[ O |   | O ]",
//       "[   | O |   ]",
//       "게임 성공 여부: 성공",
//       "총 시도한 횟수: 1",
//     ]);
//     expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
//   });

//   test("예외 테스트", () => {
//     runException(["a"]);
//   });