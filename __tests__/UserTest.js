const User = require('../src/model/User');

describe('🎮 User 클래스 테스트', () => {
  test('⭐ 현재 유저의 위치와 맵 사이즈가 같은지 비교 : 유저 위치 : 0, 게임 맵 사이즈 : 5일 때 false를 반환합니다.', () => {
    const user = new User();
    const gameMapLength = 5;

    expect(user.isArrival(gameMapLength)).toBeFalsy();
  });

  test('⭐ 현재 유저의 위치와 맵 사이즈가 같은지 비교 : 유저 위치 : 5, 게임 맵 사이즈 : 5일 때 true를 반환합니다.', () => {
    const user = new User();
    const increaseCount = 5;
    for (let i = 0; i < increaseCount; i++) {
      user.increaseLocation();
    }
    const gameMapLength = 5;

    expect(user.isArrival(gameMapLength)).toBeTruthy();
  });
});
