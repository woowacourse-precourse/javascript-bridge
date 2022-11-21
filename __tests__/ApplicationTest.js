const BridgeMaker = require('../src/BridgeMaker')
const BridgeGame = require('../src/BridgeGame')
const {
  mockQuestions,
  mockRandoms,
  getLogSpy,
  getOutput,
  runException,
  expectBridgeOrder,
  expectLogContains,
} = require('./lib/utils')
const { step } = require('../src/lib/constants')

describe('다리 생성 테스트', () => {
  const randomNumbers = [1, 0, 0]

  test(`[${randomNumbers.map(
    (number) => step[number]
  )}]를 생성해야 한다`, () => {
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number)
    }, jest.fn())
    const bridge = BridgeMaker.makeBridge(3, mockGenerator)

    expect(bridge).toEqual(['U', 'D', 'D'])
  })
})

describe('다리 게임 테스트', () => {
  test('false 값이 아닌 매개변수와 같이 호출되면 moves 길이가 증가해야 한다.', () => {
    const bridgeGame = new BridgeGame()

    bridgeGame.move('U')
    expect(bridgeGame.moves).toHaveLength(1)

    bridgeGame.move('U')
    expect(bridgeGame.moves).toHaveLength(2)
  })
})

describe('다리 건너기 테스트', () => {
  test('기능 테스트', () => {
    const logSpy = getLogSpy()
    mockRandoms([1, 0, 1])
    mockQuestions(['3', 'U', 'D', 'U'])

    const app = new App()
    app.play()

    const log = getOutput(logSpy)
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ])
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]')
  })

  test('예외 테스트', () => {
    runException(['a'])
  })
})
