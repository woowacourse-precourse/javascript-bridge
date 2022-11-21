const MissionUtils = require('@woowacourse/mission-utils');

const Bridge = require('../src/model/Bridge');
const { ERROR } = require('../src/utils/constants');

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('다리 길이 범위에 어긋나는 값 입력 시 예외가 발생되는지 테스트한다.', () => {
  test.each([['-10'], ['-8'], ['-5'], ['-3'], ['-1'], ['0'], ['1'], ['2']])(
    '3 미만의 입력이라면 예외가 발생한다.',
    size => {
      expect(() => {
        const bridge = new Bridge(size);
      }).toThrow(ERROR.INVALID_BRIDGE_SIZE_ERROR);
    }
  );

  test.each([['21'], ['22'], ['30'], ['35'], ['40']])('20 초과의 입력이라면 예외가 발생한다.', size => {
    expect(() => {
      const bridge = new Bridge(size);
    }).toThrow(ERROR.INVALID_BRIDGE_SIZE_ERROR);
  });
});

describe('유효한 다리의 길이 입력 시 예외가 발생되지 않는지 테스트한다.', () => {
  test.each([['3'], ['4'], ['10'], ['19'], ['20']])('3 이상 20 이하의 입력이라면 예외가 발생하지 않는다.', size => {
    expect(() => {
      const bridge = new Bridge(size);
    }).not.toThrow(ERROR.INVALID_BRIDGE_SIZE_ERROR);
  });
});

describe('해당 위치가 건널 수 있는 위치인지 테스트한다.', () => {
  const randomNumbers = ['0', '1', '1', '0'];
  mockRandoms(randomNumbers);

  const bridge = new Bridge(4);

  test.each([
    [0, 'D'],
    [1, 'U'],
    [2, 'U'],
    [3, 'D'],
  ])('건널 수 있는 위치라면 true를 반환한다.', (positionNumber, moving) => {
    expect(bridge.isAccessiblePosition(positionNumber, moving)).toEqual(true);
  });

  test.each([
    [0, 'U'],
    [1, 'D'],
    [2, 'D'],
    [3, 'U'],
  ])('건널 수 없는 위치라면 false를 반환한다.', (positionNumber, moving) => {
    expect(bridge.isAccessiblePosition(positionNumber, moving)).toEqual(false);
  });
});

describe('해당 위치가 다리의 마지막 위치인지 테스트한다.', () => {
  const randomNumbers = ['0', '1', '1', '0'];
  mockRandoms(randomNumbers);

  const bridge = new Bridge(4);

  test.each([[0], [1], [2], [3]])(
    '다음 라운드에 이동할 위치가 마지막 위치가 아니라면 false를 반환한다.',
    positionNumber => {
      expect(bridge.isEndOfBridge(positionNumber)).toEqual(false);
    }
  );

  test('다음 라운드에 이동할 위치가 마지막 위치라면 true를 반환한다.', () => {
    expect(bridge.isEndOfBridge(4)).toEqual(true);
  });
});
