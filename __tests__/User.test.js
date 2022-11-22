const User = require('../src/User');

describe('user 클래스 테스트', () => {
  test('User 클래스의 position이 1씩 증가 되는지 테스트', () => {
    const user = new User();
    user.setPositionPlus();
    expect(user.position).toBe(1);
  });

  test('User 클래스의 round가 1씩 증가 되는지 테스트', () => {
    const user = new User();
    user.setRoundPlus();
    expect(user.round).toBe(2);
  });

  test('User 클래스의 position이 0이 되는지 테스트', () => {
    const user = new User();
    user.resetPosition();
    expect(user.position).toBe(0);
  });
});
