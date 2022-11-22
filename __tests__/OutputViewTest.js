const OutputView = require('../src/OutputView');

describe('OutputView 테스트', () => {
  it('getBridgeRows 메서드는 원소가 U일 때 0번 행에 O를 담은 2차원 배열을 반환한다.', () => {
    const input = [
      { direction: 'U', correct: true },
      { direction: 'U', correct: true },
      { direction: 'U', correct: true },
      { direction: 'U', correct: true },
    ];
    const answer = [
      ['O', 'O', 'O', 'O'],
      [' ', ' ', ' ', ' '],
    ];

    const result = OutputView.getBridgeRows(input);

    expect(result).toStrictEqual(answer);
  });

  it('getBridgeRows 메서드는 원소가 D일 때 1번 행에 O를 담은 2차원 배열을 반환한다.', () => {
    const input = [
      { direction: 'D', correct: true },
      { direction: 'D', correct: true },
      { direction: 'D', correct: true },
      { direction: 'D', correct: true },
    ];
    const answer = [
      [' ', ' ', ' ', ' '],
      ['O', 'O', 'O', 'O'],
    ];

    const result = OutputView.getBridgeRows(input);

    expect(result).toStrictEqual(answer);
  });

  it('getBridgeRows 메서드는 correct가 false일 때 X를 반환한다.', () => {
    const input = [
      { direction: 'U', correct: true },
      { direction: 'U', correct: true },
      { direction: 'U', correct: true },
      { direction: 'U', correct: false },
    ];
    const answer = [
      ['O', 'O', 'O', 'X'],
      [' ', ' ', ' ', ' '],
    ];

    const result = OutputView.getBridgeRows(input);

    expect(result).toStrictEqual(answer);
  });
});
