# 다리 건너기

## Model(Domain) 로직

### BridgeGame 로직 
- [x] 입력 받은 다리 길이로 다리를 생성한다. - BridgeGame#generateBridge()
- [x] 입력 받은 이동할 칸과 다리를 비교한다. - BridgeGame#match()
- [x] 입력 받은 이동 칸에 대한 이동 성공여부를 확인한다. - BridgeGame#move()
- [x] 이동할 다리가 얼마나 남았는지 확인한다. - BridgeGame#checkRemainBridge()
- [x] 재시작 시 bridgeIndex를 초기화 시킨다. - BridgeGame#retry()

### 예외 처리 로직

사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

- [x] 다리길이가 3에서 20사이인지 확인한다. - Validation#checkBridgeLength()
- [x] 이동할 칸 입력이 U 또는 D인지 확인한다. - Validation#checkMoveInput()
- [x] 개임 재시작 혹은 종료 여부 입력이 R 또는 Q인지 확인한다. - Validation#checkRestartInput()

## View(UI) 로직

### InputView 로직
- [x] 입력을 실행하고 입력 받으면 callback을 실행한 뒤 callback에서 에러가 있으면 에러를 출력하고 입력을 다시 실행한다. - InputView#getUserInput()
- [x] 다리의 길이를 입력 받는다 - InputView#readBridgeSize()
- [x] 이동할 칸을 입력 받는다. - InputView#readMoving()
- [x] 게임 재시작 여부를 입력받는다 - InputView#readGameCommand()

### OutputView 로직
- [x] 게임 시작 문구를 출력한다. - OutputView#printStart()
- [x] 이동결과를 출력한다. - OutputView#printMap()
  - 이동하고 난 결과를 출력하기 위해 다리 모양을 만든다. - OutputView#parseResult()
    - 건너는데 성공했으면 ' O '를 반환하고 실패했으면 ' X '를 반환한다 - OutputView#toSuccessOrFail()
    -  moveResult 결과에 따라 toSuccessOrFail의 반환 값을 각 다리에 저장한다. OutputView#parseUpbridge(), OutputView#parseDownBridge()
- [x] 출력 데이터를 초기화한다. - OutputView#resetPrintData()
- [x] 다리를 끝까지 건너면 게임의 최종 결과를 정해진 형식에 맞춰 출력한다. - OutputView#printResult()

## 기능 요구 사항

위아래 둘 중 하나의 칸만 건널 수 있는 다리를 끝까지 건너가는 게임이다.

- 위아래 두 칸으로 이루어진 다리를 건너야 한다.
  - 다리는 왼쪽에서 오른쪽으로 건너야 한다.
  - 위아래 둘 중 하나의 칸만 건널 수 있다.
- 다리의 길이를 숫자로 입력받고 생성한다.
  - 다리를 생성할 때 위 칸과 아래 칸 중 건널 수 있는 칸은 0과 1 중 무작위 값을 이용해서 정한다.
  - 위 칸을 건널 수 있는 경우 U, 아래 칸을 건널 수 있는 경우 D값으로 나타낸다.
  - 무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.
다리가 생성되면 플레이어가 이동할 칸을 선택한다.
  - 이동할 때 위 칸은 대문자 U, 아래 칸은 대문자 D를 입력한다.
  - 이동한 칸을 건널 수 있다면 O로 표시한다. 건널 수 없다면 X로 표시한다.
- 다리를 끝까지 건너면 게임이 종료된다.
- 다리를 건너다 실패하면 게임을 재시작하거나 종료할 수 있다.
  - 재시작해도 처음에 만든 다리로 재사용한다.
  - 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낸다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.