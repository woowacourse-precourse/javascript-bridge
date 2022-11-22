const Bridge = require('../src/Bridge');
const { STATUS } = require('../src/utils/const');

describe('Bridge 클래스 단위 테스트', () => {
  // TODO: 테스트 코드 리팩토링 필요 (코드 중복)
  test('path와 bridge의 현재 값이 동일한 값인지 비교하여 일치하는지를 반환한다.', () => {
    const input = ['U', 'D', 'U'];
    const path = ['U', 'D', 'U'];

    const bridge = new Bridge(input);

    expect(bridge.isCorrect(path)).toBeTruthy();
  });

  test('path와 bridge의 길이가 같은지 비교하여 플레이어 입력이 마지막임을 반환한다.', () => {
    const input = ['U', 'D', 'U'];
    const path = ['U', 'D', 'U'];

    const bridge = new Bridge(input);

    expect(bridge.isLast(path)).toBeTruthy();
  });

  test('path와 bridge의 길이가 같은지 비교하여 플레이어 입력이 마지막임을 반환한다.', () => {
    const input = ['U', 'D', 'U'];
    const paths = [
      ['U', 'D'],
      ['U', 'D', 'U'],
      ['U', 'D', 'D'],
    ];

    const answer = [STATUS.CONTINUE, STATUS.SUCCESS, STATUS.FAILURE];

    const bridge = new Bridge(input);

    paths.forEach((path, index) => {
      expect(bridge.compare(path)).toEqual(answer[index]);
    });
  });
});
