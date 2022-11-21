# 기능 목록

BridgeGame

- 다리 길이를 숫자로 입력받는다. (InputView.readBridgeSize)
  - 다리 길이 유효성 검증 (BridgeSize.js)
  - 입력 받은 숫자 길이 만큼 다리를 생성한다. (BridgeMaker.makeBridge)
  - 이동할 칸을 입력받는다. : U 또는 D (InputView.readMoving)
    - 이동할 칸 유효성 검증(Moving.js)
    - 이동한 칸을 출력한다. (OutputView.printMap)
    - 실패시 재시작하는지 종료하는지 입력받는다. R 또는 Q (InputView.readGameCommand)
      - 재시작 및 종료 입력 유효성 검증(GameCommand.js)
      - Q 라면 게임 결과를 출력한다. (OutputView.printResult)
