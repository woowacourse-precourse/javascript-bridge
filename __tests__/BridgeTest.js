const MissionUtils = require('@woowacourse/mission-utils')
const BridgeGame = require('../src/BridgeGame')
const OutputView = require('../src/OutputView')

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print')
  logSpy.mockClear()
  return logSpy
}

describe('다리 이동 테스트', () => {
  test('정답 유무에 따른 다리 출력 테스트', () => {
    const logSpy = getLogSpy()

    let gameStatus = {
      playerLocation: 0,
      bridgeStatus: {
        up: [],
        down: [],
      },
      wrongFlag: false,
    }
    new BridgeGame().move('U', ['U', 'D'], gameStatus)
    new BridgeGame().move('U', ['U', 'D'], gameStatus)

    OutputView.printMap(gameStatus)
    //위에 한번
    //아래 한번

    //   console.log(logSpy.mock.calls[0])
    //   console.log(logSpy.mock.calls[1])

    expect(logSpy.mock.calls[0].shift()).toEqual('[ O | X ]')
    expect(logSpy.mock.calls[1].shift()).toEqual('[   |   ]')
  })
})