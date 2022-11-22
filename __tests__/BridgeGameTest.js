const BridgeGame = require("../src/BridgeGame")

describe('다리 건너기 게임 움직임 테스트', () =>{
    let bridgeGame;
  beforeEach(() => {
    bridgeGame = new BridgeGame(['U', 'D', 'U'])
  })
  test('맞는 방향을 선택했을 때 성공이라는 문자열을 반환해야 한다.', () =>{
    const gameOutcome = bridgeGame.decideMoveOrStop('U')
    expect(gameOutcome).toBe('성공')
  })
  test('틀린 방향을 선택했을 때 실패라는 문자열을 반환해야 한다.', () => {
    const gameOutcome = bridgeGame.decideMoveOrStop('D')
    expect(gameOutcome).toBe('실패')
  })
  test('끝까지 정답을 맞추었을 때 최종 성공이라는 문자열을 반환해야 한다.', () =>{
    bridgeGame.decideMoveOrStop('U')
    bridgeGame.decideMoveOrStop('D')
    const gameOutcome = bridgeGame.decideMoveOrStop('U')
    expect(gameOutcome).toBe('최종 성공')
  })
})