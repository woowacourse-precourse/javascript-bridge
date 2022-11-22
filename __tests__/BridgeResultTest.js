const MissionUtils = require('@woowacourse/mission-utils')
const App = require('../src/App')

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
}

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
}

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
}

describe('최종 결과에 대한 단위테스트', () => {
  test('게임을 한번에 성공한 경우', () => {
    const logSpy = getLogSpy();

    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'U']);
    let app = new App();
    app.play();


    let indexForCompare = [
      logSpy.mock.calls.length - 1, //총 시도 횟수
      logSpy.mock.calls.length - 3, // 성공 여부
      logSpy.mock.calls.length - 5, // 그림 두번째 행
      logSpy.mock.calls.length - 6, // 그림 첫번째 행
    ];

    expect(logSpy.mock.calls[indexForCompare[0]].shift()).toEqual(1);
    expect(logSpy.mock.calls[indexForCompare[1]].shift()).toEqual('성공');
    expect(logSpy.mock.calls[indexForCompare[3]].shift()).toEqual('[ O |   | O ]');
    expect(logSpy.mock.calls[indexForCompare[2]].shift()).toEqual('[   | O |   ]');
  });

  test('게임을 2번 재시도하다가 성공한 경우', () => {
    const logSpy = getLogSpy();

    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'D','R','D','R','U', 'D', 'U']);
    let app = new App();
    app.play();

    let indexForCompare = [
      logSpy.mock.calls.length - 1, // 총 시도 횟수
      logSpy.mock.calls.length - 3, // 성공 여부
      logSpy.mock.calls.length - 5, // 그림 두번째 행
      logSpy.mock.calls.length - 6, // 그림 첫번째 행
    ];

    expect(logSpy.mock.calls[indexForCompare[0]].shift()).toEqual(3);
    expect(logSpy.mock.calls[indexForCompare[1]].shift()).toEqual('성공');
    expect(logSpy.mock.calls[indexForCompare[3]].shift()).toEqual('[ O |   | O ]');
    expect(logSpy.mock.calls[indexForCompare[2]].shift()).toEqual('[   | O |   ]');
  });

  test('2번의 재시도를 하다가 그만둔 경우 ', () => {
    const logSpy = getLogSpy();

    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'D','R','D','R','U', 'U', 'Q']);
    const app = new App();
    app.play();

    let indexForCompare = [
      logSpy.mock.calls.length - 1, //총 시도 횟수
      logSpy.mock.calls.length - 3, //성공 여부
      logSpy.mock.calls.length - 5, //그림 두번째 행
      logSpy.mock.calls.length - 6, //그림 첫번째 행
    ];

    expect(logSpy.mock.calls[indexForCompare[0]].shift()).toEqual(3);
    expect(logSpy.mock.calls[indexForCompare[1]].shift()).toEqual('실패');
    expect(logSpy.mock.calls[indexForCompare[3]].shift()).toEqual('[ O | X ]');
    expect(logSpy.mock.calls[indexForCompare[2]].shift()).toEqual('[   |   ]');
  });



})
