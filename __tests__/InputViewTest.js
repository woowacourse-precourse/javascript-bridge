const { describe, expect, test } = require('@jest/globals');
const { Console } = require('@woowacourse/mission-utils');
const InputView = require('../src/View/InputView');

const readLineSpy = jest.spyOn(Console, 'readLine');

describe('readBridgeSize 메서드 테스트', () => {
  test('문구 출력 테스트', () => {
    InputView.readBridgeSize((size) => {});

    expect([...readLineSpy.mock.calls].join('')).toEqual(
      expect.stringContaining('다리의 길이를 입력해주세요.\n')
    );

    readLineSpy.mockClear();
  });
});

describe('readMoving 메서드 테스트', () => {
  test('문구 출력 테스트', () => {
    InputView.readMoving('', (direction) => {});

    console.log([...readLineSpy.mock.calls].join(''));

    expect([...readLineSpy.mock.calls].join('')).toEqual(
      expect.stringContaining('이동할 칸을 선택해주세요. (위: U, 아래: D)\n')
    );
  });
});
