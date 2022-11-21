const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const InputView = require('../src/InputView');
const BridgeGame = require('../src/BridgeGame');

describe('입력값 예외 테스트', () => {
  test.each([['1'], ['31'], ['!'], ['A']])(
    '입력 받은 다리 길이가 3부터 30 사이의 숫자가 아니라면 예외가 발생한다.',
    (input) => {
      expect(() => {
        InputView.inputBridgeSizeException(input);
      }).toThrow('[ERROR]');
    }
  );

  test.each([['1'], ['0'], ['!'], ['A']])(
    "입력 받은 이동할 칸이 'U' 와 'D' 가 아니라면 예외가 발생한다.",
    (input) => {
      expect(() => {
        InputView.inputBridgeSizeException(input);
      }).toThrow('[ERROR]');
    }
  );

  test.each([['1'], ['#'], ['U'], ['A']])(
    "게임 종료, 재시작을 위해 입력한 값이 'Q' 와 'R' 가 아니라면 예외가 발생한다.",
    (input) => {
      expect(() => {
        InputView.inputBridgeSizeException(input);
      }).toThrow('[ERROR]');
    }
  );
});

describe('다리 길이를 입력하면 다리를 생성한다.', () => {
  test('입력 받은 다리 길이에 맞는 다리 건설한다.', () => {
    const size = 3;
    const answerArr = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    expect(answerArr.length).toEqual(3);
  });
});
