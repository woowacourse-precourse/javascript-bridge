const BridgePlay = require("../src/BridgePlay");
const InputView = require("../src/view/InputView");
const OutputView = require("../src/view/OutputView");

describe("게임 플레이 클래스 테스트", () => {
  const bridgePlay = new BridgePlay(['U','D','D']);

  test("이동 후의 현재 이동 상태를 출력 함수로 전달한다.", () => {
    const spyPrintMap = jest.spyOn(OutputView, 'printMap');
    bridgePlay.bridgeGame.move = jest.fn().mockImplementation((moving)=>{
      const moved = ['U'];
      moved.push(moving);
      return moved;
    })
    const moving = 'D';
    bridgePlay.playRound(moving);

    expect(spyPrintMap).toBeCalledWith(bridgePlay.bridge,['U','D'])
  })

  test("넘겨받은 이동 결과에 해당하는 다음단계를 진행한다. - case 0", () => {
    const spyReadCommand = jest.spyOn(InputView, 'readGameCommand');
    bridgePlay.bridgeGame.status = jest.fn().mockReturnValue(0);

    bridgePlay.playNext();

    expect(spyReadCommand).toBeCalledTimes(1);
  });

  test("넘겨받은 이동 결과에 해당하는 다음단계를 진행한다. - case 1", () => {
    const spyNewRound = jest.spyOn(bridgePlay, 'newRound');
    bridgePlay.bridgeGame.status = jest.fn().mockReturnValue(1);
  
    bridgePlay.playNext();

    expect(spyNewRound).toBeCalledTimes(1);
  });

  test("입력받은 종료 옵션에따라 게임을 종료 또는 진행한다.", () => {
    const spyPlayEnd = jest.spyOn(bridgePlay, 'playEnd');
    bridgePlay.bridgeGame.retry = jest.fn();

    bridgePlay.endOrRetry('Q');

    expect(spyPlayEnd).toBeCalledTimes(1);
  });

  test("게임 종료 시 게임 정보를 결과 출력 함수로 전달한다.", () => {
    const spyPrintResult = jest.spyOn(OutputView, 'printResult');
    const userBridge = {moved:['U'], attempts:2};
    bridgePlay.bridgeGame.get = jest.fn().mockReturnValue(userBridge);

    bridgePlay.playEnd();

    expect(spyPrintResult).toBeCalledWith(bridgePlay.bridge, ['U'], 2);
  })
});