const GameCommand = require('../../src/InputCheck/GameCommand');

describe('checkInput() ', () => {
  it('R 또는 Q를 입력하였을 경우 해당 값을 return', () => {
    // given
    let gameCommand = new GameCommand('R');

    // when
    // then
    expect(gameCommand.checkInput()).toBe('R');

    // given
    gameCommand = new GameCommand('Q');

    // when
    // then
    expect(gameCommand.checkInput()).toBe('Q');
  });

  it('[Error] 공백을 입력하였을 경우 예외 처리', () => {
    // given
    const gameCommand = new GameCommand('');

    // when
    // then
    expect(() => gameCommand.checkInput()).toThrow();
  });

  it('[Error] R 또는 Q가 중복으로 입력되었을 경우 예외 처리', () => {
    // given
    let gameCommand = new GameCommand('RR');

    // when
    // then
    expect(() => gameCommand.checkInput()).toThrow();

    // given
    gameCommand = new GameCommand('QQ');

    // when
    // then
    expect(() => gameCommand.checkInput()).toThrow();
  });

  it('[Error] R 또는 Q이외의 문자를 입력하였을 경우 예외 처리', () => {
    // given
    let gameCommand = new GameCommand('A');

    // when
    // then
    expect(() => gameCommand.checkInput()).toThrow();

    // given
    gameCommand = new GameCommand('23');

    // when
    // then
    expect(() => gameCommand.checkInput()).toThrow();
  });

  it('[Error] 소문자 r 또는 q를 입력하였을 경우 예외 처리', () => {
    // given
    let gameCommand = new GameCommand('r');

    // when
    // then
    expect(() => gameCommand.checkInput()).toThrow();

    // given
    gameCommand = new GameCommand('q');

    // when
    // then
    expect(() => gameCommand.checkInput()).toThrow();
  });
});
