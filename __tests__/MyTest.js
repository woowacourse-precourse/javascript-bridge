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

describe('입력 받은 이동할 칸과 정답이 일치하는지 판별한다.', () => {
  test.each([[0], [1], [2]])(
    '입력 받은 이동할 칸과 정답이 일치하면 true 를 return 한다.',
    (count) => {
      const bridgeGame = new BridgeGame(count);
      const result = bridgeGame.move(['D', 'D', 'D'], 'D');

      expect(result).toEqual(true);
    }
  );

  test.each([[0], [1], [2]])(
    '입력 받은 이동할 칸과 정답이 불일치하면 false 를 return 한다.',
    (count) => {
      const bridgeGame = new BridgeGame(count);
      const result = bridgeGame.move(['D', 'D', 'D'], 'U');

      expect(result).toEqual(false);
    }
  );
});

describe('움직인 다리의 결과를 생성한다.', () => {
  test('처음으로 위 칸으로 정답을 맞춘 후 생성된 다리를 생성한다.', () => {
    const bridgeGame = new BridgeGame(0);
    bridgeGame.boolean = true;
    expect(bridgeGame.discernBridge('U', 0)).toEqual('[ O ]\n[   ]');
  });

  test('두번째로 아래 칸으로 정답을 맞춘 후 생성된 다리를 생성한다.', () => {
    const bridgeGame = new BridgeGame(1);
    bridgeGame.boolean = true;
    bridgeGame.upBridge = '[ O ]';
    bridgeGame.downBridge = '[   ]';

    expect(bridgeGame.discernBridge('D', 1)).toEqual('[ O |   ]\n[   | O ]');
  });

  test('세번째로 아래 칸으로 정답을 틀린 후 생성된 다리를 생성한다.', () => {
    const bridgeGame = new BridgeGame(2);
    bridgeGame.boolean = false;
    bridgeGame.upBridge = '[ O |   ]';
    bridgeGame.downBridge = '[   | O ]';

    expect(bridgeGame.discernBridge('D', 2)).toEqual(
      '[ O |   |   ]\n[   | O | X ]'
    );
  });
});

describe('정답이 틀린 후 재시작한다.', () => {
  test('재시작 하면 움직였던 기록을 초기화한다.', () => {
    InputView.bridgeGame = new BridgeGame();
    InputView.resetOutputBridge();
    expect(InputView.bridgeCount).toEqual(0);
    expect(InputView.bridgeGame.upBridge).toEqual('[');
    expect(InputView.bridgeGame.downBridge).toEqual('[');
  });
});
