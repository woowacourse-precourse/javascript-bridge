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
    new App().play()

    let lastTwoIndex = [
      logSpy.mock.calls.length - 2,
      logSpy.mock.calls.length - 1,
    ]

    expect(logSpy.mock.calls[lastTwoIndex[0]].shift()).toEqual('[ O |   |   ]')
    expect(logSpy.mock.calls[lastTwoIndex[1]].shift()).toEqual('[   | O | X ]')

    
  })

  test('중간에 틀린 곳을 갔을 경우 재시도를 선택한 경우의 다리를 그려낸다', () => {
    const logSpy = getLogSpy()

    mockRandoms(['1', '0', '1'])
    mockQuestions(['3', 'U', 'D', 'D', 'R', 'U', 'D', 'U']) //마지막에 오답, 재시도 선택
    new App().play()

    console.log(logSpy.mock.calls)
    let lastTwoIndex = [
      logSpy.mock.calls.length - 2,
      logSpy.mock.calls.length - 1,
    ]

    expect(logSpy.mock.calls[lastTwoIndex[0]].shift()).toEqual('[ O |   | O ]')
    expect(logSpy.mock.calls[lastTwoIndex[1]].shift()).toEqual('[   | O |   ]')
  })

  //최종 결과를 테스트
  //test('최종 결과를 테스트한다',()=>{})
})
