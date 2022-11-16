const InputView = require('../src/InputView');
const { mockQuestions } = require('./ApplicationTest');

describe('입력 테스트', () => {
  test('다리길이 입력받기', () => {
    mockQuestions(['10']);
    const length = InputView.readBridgeSize();

    expect(length).toEqual(10);
  });
});
