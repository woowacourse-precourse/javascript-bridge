const InputView = require('../src/view/InputView');
const { mockQuestions } = require('./ApplicationTest');

describe('입력 테스트', () => {
  test('다리길이 입력받기', () => {
    mockQuestions(['10']);
    const length = InputView.readBridgeSize();

    expect(length).toEqual(10);
  });

  test('이동할 칸 입력받기', () => {
    mockQuestions(['D']);
    expect(InputView.readMoving()).toEqual('D');
  });
});
