const { Size, Moving, GameCommand } = require('../src/Commands');
const { ERROR } = require('../src/utils/constants');

// Size 테스트
describe('숫자 이외의 값이 포함된 사이즈를 입력될 경우 예외가 발생되는지 테스트한다.', () => {
  test.each([['a'], ['abc'], ['test123'], ['123testing'], , ['0,0']])(
    '문자가 포함된 입력이라면 예외가 발생한다.',
    input => {
      expect(() => {
        const size = new Size(input);
      }).toThrow(ERROR.INVALID_BRIDGE_SIZE_ERROR);
    }
  );
  test.each([[''], [' '], ['  '], [' 123 '], [' 123'], ['123 '], ['123 456']])(
    '공백이 포함된 입력이라면 예외가 발생한다.',
    input => {
      expect(() => {
        const size = new Size(input);
      }).toThrow(ERROR.INVALID_BRIDGE_SIZE_ERROR);
    }
  );
  test.each([['3.0'], ['4.0'], ['10.0'], ['18.0'], ['20.0']])('소수 입력이라면 예외가 발생한다.', input => {
    expect(() => {
      const size = new Size(input);
    }).toThrow(ERROR.INVALID_BRIDGE_SIZE_ERROR);
  });
  test.each([['03'], ['04'], ['05'], ['06'], ['07']])('한 자리 숫자 앞에 0이 있다면 예외가 발생한다.', input => {
    expect(() => {
      const size = new Size(input);
    }).toThrow(ERROR.INVALID_BRIDGE_SIZE_ERROR);
  });
});

describe('숫자로만 이루어진 값의 사이즈를 입력될 경우 예외가 발생되지 않는지 테스트한다.', () => {
  test.each([['0'], ['1'], ['3'], ['4'], ['10'], ['19'], ['20']])(
    '숫자로만 이루어진 입력이라면 예외가 발생하지 않는다.',
    size => {
      expect(() => {
        const size = new Size(input);
      }).not.toThrow(ERROR.INVALID_BRIDGE_SIZE_ERROR);
    }
  );
});

// Moving 테스트
describe('유효하지 않은 이동할 칸 입력 시 예외가 발생되는지 테스트한다.', () => {
  test.each([['1'], ['12'], ['123'], ['1234'], ['0']])('숫자가 포함된 입력이라면 예외가 발생한다.', input => {
    expect(() => {
      const moving = new Moving(input);
    }).toThrow(ERROR.INVALID_MOVING_ERROR);
  });

  test.each([[''], [' '], ['  '], ['   ']])('공백 문자열이라면 예외가 발생한다.', input => {
    expect(() => {
      const moving = new Moving(input);
    }).toThrow(ERROR.INVALID_MOVING_ERROR);
  });

  test.each([['A'], ['B'], ['C'], ['X'], ['O']])('U 또는 D 이외의 문자라면 예외가 발생한다.', input => {
    expect(() => {
      const moving = new Moving(input);
    }).toThrow(ERROR.INVALID_MOVING_ERROR);
  });

  test.each([['UP'], ['Up'], ['up'], ['Down'], ['DOWN'], ['down']])('문자열 입력이라면 예외가 발생한다.', input => {
    expect(() => {
      const moving = new Moving(input);
    }).toThrow(ERROR.INVALID_MOVING_ERROR);
  });

  test.each([['u'], ['d']])('소문자 입력이라면 예외가 발생한다.', input => {
    expect(() => {
      const moving = new Moving(input);
    }).toThrow(ERROR.INVALID_MOVING_ERROR);
  });
});

describe('유효한 이동할 칸 입력 시 예외가 발생되지 않는지 테스트한다.', () => {
  test.each([['U'], ['D']])('U 또는 D가 입력된다면 예외가 발생하지 않는다.', input => {
    expect(() => {
      const moving = new Moving(input);
    }).not.toThrow(ERROR.INVALID_MOVING_ERROR);
  });
});

// GameCommand 테스트
describe('유효하지 않은 게임 커맨드 입력 시 예외가 발생되는지 테스트한다.', () => {
  test.each([['1'], ['12'], ['123'], ['1234'], ['0']])('숫자가 포함된 입력이라면 예외가 발생한다.', input => {
    expect(() => {
      const gameCommand = new GameCommand(input);
    }).toThrow(ERROR.INVALID_COMMAND_ERROR);
  });

  test.each([[''], [' '], ['  '], ['   ']])('공백 문자열이라면 예외가 발생한다.', input => {
    expect(() => {
      const gameCommand = new GameCommand(input);
    }).toThrow(ERROR.INVALID_COMMAND_ERROR);
  });

  test.each([['A'], ['B'], ['C'], ['X'], ['O']])('R 또는 Q 이외의 문자라면 예외가 발생한다.', input => {
    expect(() => {
      const gameCommand = new GameCommand(input);
    }).toThrow(ERROR.INVALID_COMMAND_ERROR);
  });

  test.each([['RETRY'], ['QUIT'], ['retry'], ['quit'], ['Retry'], ['Quit']])(
    '문자열 입력이라면 예외가 발생한다.',
    input => {
      expect(() => {
        const gameCommand = new GameCommand(input);
      }).toThrow(ERROR.INVALID_COMMAND_ERROR);
    }
  );

  test.each([['r'], ['q']])('소문자 입력이라면 예외가 발생한다.', input => {
    expect(() => {
      const gameCommand = new GameCommand(input);
    }).toThrow(ERROR.INVALID_COMMAND_ERROR);
  });
});

describe('유효한 게임 커맨드 입력 시 예외가 발생되지 않는지 테스트한다.', () => {
  test.each([['R'], ['Q']])('', input => {
    expect(() => {
      const gameCommand = new GameCommand(input);
    }).not.toThrow(ERROR.INVALID_COMMAND_ERROR);
  });
});
