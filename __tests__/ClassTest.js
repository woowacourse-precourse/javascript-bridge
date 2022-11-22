const User = require('../src/User');
const Bridge = require('../src/Bridge');
const validator = require('../src/utils');

describe('User 테스트', () => {
  test('user.setRoute()를 통해 필드에 데이터가 추가 되어야 한다.', () => {
    const user = new User();

    user.setRoute('U');
    user.setRoute('D');
    user.setRoute('D');

    expect(user.getRoute()).toEqual(['U', 'D', 'D']);
  });

  test('user.clear()는 필드 값을 초기화 해준다.', () => {
    const user = new User();

    user.setRoute('U');
    user.setRoute('D');
    user.clear();

    expect(user.getRoute()).toEqual([]);
  });

  test('user.getIndex()는 마지막 인덱스를 반환한다.', () => {
    const user = new User();

    user.setRoute('U');
    user.setRoute('D');

    expect(user.getIndex()).toEqual(1);
  });
});

describe('Bridge 테스트', () => {
  test('Bridge 를 생성하며 값을 설정한다.', () => {
    const bridge = new Bridge(['U', 'D', 'D']);

    expect(bridge.getRoute()).toEqual(['U', 'D', 'D']);
  });
});

describe('validator 테스트', () => {
  test('사이즈 최댓값 초과하면 true', () => {
    const input = 21;

    expect(validator.isOverSize(input)).toEqual(true);
  });

  test('사이즈는 정수여야 한다.', () => {
    const input = 5.5;

    expect(validator.isInteger(input)).toEqual(false);
  });

  test('유효한 입력값만 받아야 한다.', () => {
    const input = 'Q';

    expect(validator.isNotUorD(input)).toEqual(true);
  });

  test('유효한 입력값만 받아야 한다.', () => {
    const input = 'r';

    expect(validator.isNotRorQ(input)).toEqual(true);
  });
});
