const BridgeGame = require("../src/model/BridgeGame");
const OutpuyView = require("../src/console/OutputView");
const InputView = require("../src/console/InputView");
const Message = require("../src/lib/Message");
const Bridge = require("../src/model/Bridge");
const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");


const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const testRandom = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  setTestInvOnce(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const setTestInvOnce = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("브릿지 다리 생성 테스트", () => {
  test("정수를 입력하면 해당 길이 만큼의 다리가 생성 됩니다", () => {
    const length = ["5"];
    setTestInvOnce(length);

    const bridgeGame = new BridgeGame();
    bridgeGame.play();

    const bridge = bridgeGame.getBridge().getOriginalBridge();

    expect(bridge.length).toBe(5);
    expect(bridge.length).toBeGreaterThanOrEqual(3)
    expect(bridge.length).toBeLessThanOrEqual(20)
  });

  test("브짓지는 U와 D를 원소로 가집니다.", () => {
    const length = ["10"];
    setTestInvOnce(length);

    const bridgeGame = new BridgeGame();
    bridgeGame.play();
    const bridge = bridgeGame.getBridge().getOriginalBridge();

    expect(bridge).toContain("U", "D");
    expect(bridge).toContainEqual("U", "D");
    expect(bridge).not.toContain(/\d/);
  });

  test.each([["E"],["0.5"],["-5"],["2"],["21"],["2+3"]])("잘못된 길이는 오류를 냅니다." , (input)=>{
    runException([input])
  })
});

describe("브릿지 이동 테스트", () => {
  test("숫자 1은 U , 0은 D가 나옵니다." ,()=>{
    const length = ["5"]
    setTestInvOnce(length);

    const direction = ["1","1","1","1","0"]
    const result = ["U","U","U","U","D"]
    testRandom(direction);

    const bridgeGame = new BridgeGame();
    bridgeGame.play();

    const bridge = bridgeGame.getBridge().getOriginalBridge();

    bridge.forEach((direction,index) => {
      expect(direction).toEqual(result[index])
    } )
  })

  test.each([["3", "f"],["3", "1"],["3", "ㄱ"],["3", "!"],["3", " "]])("잘못된 방향 입력은 예외를발생시킵니다." , (input, direction)=>{
    runException([input,direction])
  })

  test("정답이 아니면 X 가 표시됩니다." ,()=>{
    const length = ["3","D"]
    setTestInvOnce(length);

    const direction = ["1","1","1"]
    testRandom(direction);

    const bridgeGame = new BridgeGame();
    bridgeGame.play();

    const [up,down] = bridgeGame.getBridge().getBridges()

    expect(down).toContain(" X ")
  })
  test("입력하지 않은 칸은 빈칸입니다.." ,()=>{
    const length = ["3","D"]
    setTestInvOnce(length);

    const direction = ["1","1","1"]
    testRandom(direction);

    const bridgeGame = new BridgeGame();
    bridgeGame.play();

    const [up,down] = bridgeGame.getBridge().getBridges()

    expect(up).toContain(" N ")
  })
});
