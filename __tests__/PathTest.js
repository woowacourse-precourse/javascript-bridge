const Path = require('../src/Path');

describe('Path 클래스 단위 테스트', () => {
  test('플레이어가 U, D 이외에 다른 값을 입력하면 예외를 발생한다.', () => {
    expect(() => {
      const path = new Path();
      path.push('Q');
    }).toThrow('[ERROR]');
  });

  test('플레이어가 U, D 중 하나를 입력했을 때 테스트', () => {
    const path = new Path();
    const answers = ['U', 'D', 'U'];

    answers.forEach((answer) => {
      path.push(answer);
    });

    expect(path.getPath()).toEqual(answers);
  });

  test('플레이어가 U를 입력햇을 때, O 또는 X를 pathMap에 입력한다.', () => {
    const path = new Path();

    path.push('U');
    path.markU('O');

    const pathMap = path.getPathMap();

    expect(pathMap).toEqual([['O'], [' ']]);
  });

  test('플레이어가 D를 입력햇을 때, O 또는 X를 pathMap에 입력한다.', () => {
    const path = new Path();

    path.push('D');
    path.markD('O');

    const pathMap = path.getPathMap();

    expect(pathMap).toEqual([[' '], ['O']]);
  });
});
