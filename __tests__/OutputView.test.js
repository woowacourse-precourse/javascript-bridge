const OutputView = require('../src/OutputView');
const { BRIDGE, MESSAGE } = require('../src/const.js')
const {Console} = require("@woowacourse/mission-utils");


test("다리 현황 출력 테스트 01", () => {    
    const bridge = ["U", "D", "D", "U"];
    const isSuccessArray = [true, true, true, false];
    const spyFn = jest.spyOn(Console, "print");

    OutputView.printMap(bridge, isSuccessArray);

    expect(spyFn).toBeCalledWith("[ O |   |   |   ]");
    expect(spyFn).toBeCalledWith("[   | O | O | X ]");
})
test("다리 현황 출력 테스트 02", () => {    
    const bridge = ["U", "D", "D", "U"];
    const isSuccessArray = [true, true, true];
    const spyFn = jest.spyOn(Console, "print");

    OutputView.printMap(bridge, isSuccessArray);

    expect(spyFn).toBeCalledWith("[ O |   |   ]");
    expect(spyFn).toBeCalledWith("[   | O | O ]");
})

test("최종 게임 결과 출력 테스트 01", () => {    
    const bridge = ["U", "D", "D", "U"];
    const isSuccessArray = [true, true, true, true];
    const spyFn = jest.spyOn(Console, "print");

    OutputView.printResult(bridge, isSuccessArray, 4);

    expect(spyFn).toBeCalledWith(MESSAGE.FINAL_RESULT);
    expect(spyFn).toBeCalledWith("[ O |   |   | O ]");
    expect(spyFn).toBeCalledWith("[   | O | O |   ]");
    expect(spyFn).toBeCalledWith("게임 성공 여부: 성공");
    expect(spyFn).toBeCalledWith("총 시도한 횟수: 4");
})

test("최종 게임 결과 출력 테스트 02", () => {    
    const bridge = ["U", "D", "D", "U"];
    const isSuccessArray = [true, true, true, false];
    const spyFn = jest.spyOn(Console, "print");

    OutputView.printResult(bridge, isSuccessArray, 4);

    expect(spyFn).toBeCalledWith(MESSAGE.FINAL_RESULT);
    expect(spyFn).toBeCalledWith("[ O |   |   |   ]");
    expect(spyFn).toBeCalledWith("[   | O | O | X ]");
    expect(spyFn).toBeCalledWith("게임 성공 여부: 실패");
    expect(spyFn).toBeCalledWith("총 시도한 횟수: 4");
})