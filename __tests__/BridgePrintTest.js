const MissionUtils = require('@woowacourse/mission-utils')
const BridgeGame = require('../src/BridgeGame')
const OutputView = require('../src/OutputView')
const App = require('../src/App')

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print')
  logSpy.mockClear()
  return logSpy
}

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn()
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input)
    })
  }, MissionUtils.Console.readLine)
}

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn()
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number)
  }, MissionUtils.Random.pickNumberInRange)
}

describe('다리 현황 출력 테스트', () => {
  test('모든 경로가 정답일 경우의 다리를 그려낸다', () => {
    const logSpy = getLogSpy()

    let gameStatus = {
      playerLocation: 0,
      bridgeStatus: {
        up: [],
        down: [],
      },
      wrongFlag: false,
    }
    let generatedBridge = ['U', 'D']

    new BridgeGame().move('U', generatedBridge, gameStatus)
    new BridgeGame().move('D', generatedBridge, gameStatus)
    OutputView.printMap(gameStatus)

    expect(logSpy.mock.calls[0].shift()).toEqual('[ O |   ]')
    expect(logSpy.mock.calls[1].shift()).toEqual('[   | O ]')
  })

  test('중간에 틀린 곳을 갔을 경우 재시도 하지 않고 종료한 경우의 다리를 그려낸다', () => {
    const logSpy = getLogSpy()

    mockRandoms(['1', '0', '1'])
    mockQuestions(['3', 'U', 'D', 'D', 'Q']) //마지막에 오답, 게임종료 선택
    let app = new App()
    app.play()
    app.printBridge()

    /**
     * 지도를 현재 Console.print()로 출력하고 있고
     *     테스트 또한 logSpy.mock.calls를 통해 비교하고 있으므로
     * 마지막에 지도를 한번 더 출력한 다음 이 결과를 가지고 테스트를 하게 됩니다
     */

    let indexForPrintTest = [
      logSpy.mock.calls.length - 2,
      logSpy.mock.calls.length - 1,
    ]

    expect(logSpy.mock.calls[indexForPrintTest[0]].shift()).toEqual(
      '[ O |   |   ]',
    )
    expect(logSpy.mock.calls[indexForPrintTest[1]].shift()).toEqual(
      '[   | O | X ]',
    )
  })

  test('중간에 틀린 곳을 갔을 경우, 재시도를 선택했을 때의 다리를 그려낸다', () => {
    const logSpy = getLogSpy()
    mockRandoms(['1', '0', '1'])
    mockQuestions(['3', 'U', 'D', 'D', 'R', 'U', 'D', 'U'])
    let app = new App()
    app.play()
    app.printBridge()

    /**
     * 지도를 현재 Console.print()로 출력하고 있고
     *     테스트 또한 logSpy.mock.calls를 통해 비교하고 있으므로
     * 마지막에 지도를 한번 더 출력한 다음 이 결과를 가지고 테스트를 하게 됩니다
     */

    let indexForPrintTest = [
      4,
      5,
      logSpy.mock.calls.length - 2,
      logSpy.mock.calls.length - 1,
    ]

    expect(logSpy.mock.calls[indexForPrintTest[0]].shift()).toEqual(
      '[ O |   |   ]',
    )
    expect(logSpy.mock.calls[indexForPrintTest[1]].shift()).toEqual(
      '[   | O | X ]',
    )
    expect(logSpy.mock.calls[indexForPrintTest[2]].shift()).toEqual(
      '[ O |   | O ]',
    )
    expect(logSpy.mock.calls[indexForPrintTest[3]].shift()).toEqual(
      '[   | O |   ]',
    )
  })
})
