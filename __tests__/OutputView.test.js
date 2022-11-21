const OutputView = require('../src/OutputView');
const { BRIDGE } = require('../src/const.js')
const {Console} = require("@woowacourse/mission-utils");


test("다리 현황 출력 테스트 01", () => {    
    const bridge = ["U", "D", "D", "U"];
    const location = 4;
    const isSuccess = false;
    const spyFn = jest.spyOn(Console, "print");

    OutputView.printMap(bridge, location, isSuccess);

    expect(spyFn).toBeCalledWith("[ O |   |   | X ]");
    expect(spyFn).toBeCalledWith("[   | O | O |   ]");
})
test("다리 현황 출력 테스트 02", () => {    
    const bridge = ["U", "D", "D", "U"];
    const location = 3;
    const isSuccess = true;
    const spyFn = jest.spyOn(Console, "print");

    OutputView.printMap(bridge, location, isSuccess);

    expect(spyFn).toBeCalledWith("[ O |   |   ]");
    expect(spyFn).toBeCalledWith("[   | O | O ]");
})