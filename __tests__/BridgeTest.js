const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('다리 건너기 기능 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '1', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'U', 'D']);
  });

  test('에러 테스트 : 다리 생성 테스트', () => {
    mockQuestions(['s']);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('다리 길이는 숫자만 입력할 수 있습니다.');
  });

  test('에러 테스트 : 다리 생성 테스트', () => {
    mockQuestions([21]);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('다리 길이는 3이상 20이하의 숫자입니다.');
  });
});
