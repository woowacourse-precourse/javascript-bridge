/* eslint-disable */
const BridgeGame = require('../src/domain/BridgeGame');
const Trimmer = require('../src/Trimmer');
const BridgeMaker = require('../src/BridgeMaker');
const { MOVE_RESULT } = require('../src/constant/Constant');

const mockFunction = BridgeMaker.makeBridge;
jest.mock('../src/BridgeMaker');

describe('[BridgeGame] 올바른 데이터만이 입력으로 주어질 때, 게임 결과를 올바르게 반환하여야 한다.', () => {
  test('', () => {
    mockFunction.mockReturnValueOnce(['U', 'D', 'U']);
    const bridgeGame = new BridgeGame(3);

    bridgeGame.move('U');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O ]
        [   ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 1,
    });

    bridgeGame.move('D');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O |   ]
        [   | O ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 1,
    });

    bridgeGame.move('U');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O |   | O ]
        [   | O |   ]`),
      roundResult: MOVE_RESULT.CLEAR,
      attempt: 1,
    });
  });

  test('', () => {
    mockFunction.mockReturnValueOnce(['U', 'D', 'D', 'D', 'U']);
    const bridgeGame = new BridgeGame(5);

    bridgeGame.move('U');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O ]
        [   ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 1,
    });

    bridgeGame.move('U');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O | X ]
        [   |   ]`),
      roundResult: MOVE_RESULT.FAIL,
      attempt: 1,
    });

    bridgeGame.retry();
    bridgeGame.move('D');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [   ]
        [ X ]`),
      roundResult: MOVE_RESULT.FAIL,
      attempt: 2,
    });

    bridgeGame.retry();
    bridgeGame.move('U');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O ]
        [   ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 3,
    });

    bridgeGame.move('D');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O |   ]
        [   | O ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 3,
    });

    bridgeGame.move('D');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O |   |   ]
        [   | O | O ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 3,
    });

    bridgeGame.move('D');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O |   |   |   ]
        [   | O | O | O ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 3,
    });

    bridgeGame.move('U');
    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O |   |   |   | O ]
        [   | O | O | O |   ]`),
      roundResult: MOVE_RESULT.CLEAR,
      attempt: 3,
    });
  });

  test('', () => {
    mockFunction.mockReturnValueOnce([
      'U',
      'U',
      'U',
      'U',
      'U',
      'U',
      'U',
      'U',
      'U',
      'U',
      'D',
      'D',
      'U',
      'U',
      'D',
      'U',
      'D',
      'U',
      'D',
      'D',
    ]);
    const bridgeGame = new BridgeGame(20);

    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');

    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O | O | O | O | O | O |   ]
        [   |   |   |   |   |   | X ]`),
      roundResult: MOVE_RESULT.FAIL,
      attempt: 1,
    });

    bridgeGame.retry();
    bridgeGame.move('D');
    bridgeGame.retry();
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.retry('D');
    bridgeGame.move('D');
    bridgeGame.retry();
    bridgeGame.move('U');

    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O ]
        [   ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 5,
    });

    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('D');

    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O | O | O | O | O | O | O | O | O | O |   |   | O | O |   | O |   | O |   ]
        [   |   |   |   |   |   |   |   |   |   | O | O |   |   | O |   | O |   | O ]`),
      roundResult: MOVE_RESULT.OK,
      attempt: 5,
    });

    bridgeGame.move('U');

    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O | O | O | O | O | O | O | O | O | O |   |   | O | O |   | O |   | O |   | X ]
        [   |   |   |   |   |   |   |   |   |   | O | O |   |   | O |   | O |   | O |   ]`),
      roundResult: MOVE_RESULT.FAIL,
      attempt: 5,
    });

    bridgeGame.retry();
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('D');

    expect(bridgeGame.getGameResult()).toEqual({
      bridge: Trimmer.templateTrim(`
        [ O | O | O | O | O | O | O | O | O | O |   |   | O | O |   | O |   | O |   |   ]
        [   |   |   |   |   |   |   |   |   |   | O | O |   |   | O |   | O |   | O | O ]`),
      roundResult: MOVE_RESULT.CLEAR,
      attempt: 6,
    });
  });
});
