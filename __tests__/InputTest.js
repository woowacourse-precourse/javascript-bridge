const { BRIDGE_INPUT_ERROR } = require('../src/MESSAGES/InputMessage');
const InputError = require('../src/InputErrorView');

test('다리 입력 오류 테스트', () => {
  const inputlog = [
    '41123213123421',
    '123',
    '2',
    '21',
    '',
    '-2',
    '-5',
    '문자열',
  ];
  inputlog.forEach((eachlog) => {
    expect(() => {
      InputError.bridgeSizeError(eachlog);
    }).toThrow();
  });
});

test('게임 재시작,종료 입력 유효 테스트', () => {
  const regameinputlog = ['', 'RR', 'C', 'Z', '', 'WOWOWOWOW', 'CC', 'QQ'];
  regameinputlog.forEach((eachlog) => {
    expect(() => {
      InputError.reGameError(eachlog);
    }).toThrow();
  });
});
test('게임 재시작:R,게임종료 :Q 유효 테스트', () => {
  expect(InputError.reGameError('R')).toBe(true);
});

test('게임 재시작:R,게임종료 :Q 유효 테스트', () => {
  expect(InputError.reGameError('Q')).toBe(true);
});

test('이동할 칸 입력 유효 테스트', () => {
  const inputlog = [
    '41123213123421',
    '123',
    '2',
    '21',
    '',
    '-2',
    '-5',
    '문자열',
    'u',
    'UU',
    'UUU',
    'd',
    'DDD',
    'DD',
  ];
  inputlog.forEach((eachlog) => {
    expect(() => {
      InputError.movingError(eachlog);
    }).toThrow();
  });
});
