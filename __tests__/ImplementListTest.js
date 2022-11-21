const { Console, Random } = require('@woowacourse/mission-utils');
const App = require('../src/App');
const Bridge = require('../src/Bridge');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const { MESSAGES } = require('../src/constants');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((_, callback) => {
      callback(input);
    }),
    Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const getPrintResult = () => jest.spyOn(Console, 'print');

const generateArray = (length) => {
  const { generate } = BridgeRandomNumberGenerator;
  return BridgeMaker.makeBridge(length, generate);
};

describe('기능 구현 목록 테스트', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('시작 안내멘트 기능', () => {
    const log = getPrintResult();
    const app = new App();
    app.play();
    expect(log).toHaveBeenCalledWith(MESSAGES.GAMESTART);
  });

  test('다리길이를 물어보는 기능', () => {
    mockQuestions(['3', 'U']);
    const app = new App();
    app.play();
    const log = getPrintResult();
    expect(log).not.toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('다리길이에 맞게 랜덤배열을 생성하는 기능', () => {
    const command = 'UD';
    const length = 3;
    const array = generateArray(length).filter((v) => command.includes(v));
    expect(array).toHaveLength(length);
  });

  test('이동한 칸과 랜덤으로 반환된 배열을 비교하는 기능', () => {
    const bridge = new Bridge(['U', 'D', 'U']);
    const compare = jest.fn((n, s) => bridge.checkAnswer(n, s));
    compare(0, 'U');
    compare(1, 'D');
    compare(2, 'D');
    expect(compare).toHaveNthReturnedWith(1, [true, false]);
    expect(compare).toHaveNthReturnedWith(2, [true, false]);
    expect(compare).toHaveNthReturnedWith(3, [false, true]);
  });

  test('재시작 및 초기화 기능', () => {
    const log = getPrintResult();
    mockRandoms(['1', '0', '1', '1', '1', '1']);
    mockQuestions(['3', 'U', 'D', 'U', 'R', 'U', 'U', 'U']);
    const app = new App();
    app.play();
    expect(log).toHaveBeenCalledWith(MESSAGES.RESULT);
  });

  test('오류 감지 및 종료 기능', () => {
    const log = getPrintResult();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'D', 'Q']);
    const app = new App();
    app.play();
    
    const printLog = getOutput(log);
    expect(printLog).toMatch(/실패/);
  });
});
