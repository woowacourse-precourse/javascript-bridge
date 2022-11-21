const User = require('../src/User');
const Bridge = require('../src/Bridge');

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
