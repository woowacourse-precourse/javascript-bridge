# 다리 건너기

## 기능 목록 리스트

- [x] `게임 시작 문구를 출력한다.` - OutputView.js # printStartMessage()

- [x] `사용자에게 다리 길이 입력을 요청한다.` - InputView.js # readBridgeSize() <- BridgeGame.js # start() 에서 호출

- [x] `다리 길이 입력의 유효성을 검사한다.` - Validation.js # checkBridgeLength()

  - [x] `입력 값이 있는가`
  - [x] `숫자인가`
  - [x] `3 이상 20 이하의 숫자인가`

- [x] `다리를 생성한다.` - BridgeMaker.js # makeBridge()

  - [x] `다리 길이 만큼, 0과 1 둘 중 하나로 이루어진 배열을 반환한다.`
  - [x] `배열의 요소가 0일 경우 아래칸(D), 1일 경우 위 칸(U)을 반환한다.` - BridgeMaker.js # getSpace()
  - [x] `이동할 수 있는 칸의 정보(U, D)를 담은 다리를 생성한다.`

- [x] `사용자에게 이동할 칸 선택 입력을 요청한다.` - InputView.js # readMoving() <- BridgeGame.js # inputSpace() 에서 호출

- [x] `이동할 칸 입력 유효성 검사` - Validation.js # checkSpace()

  - [x] `입력 값이 있는가`
  - [x] `U 와 D 둘 중 하나에 해당하는 값인가`

- [x] `다리 건너기 결과 배열을 얻는다.` - BridgeGame.js # checkSpace()

  - [x] `이동할 수 있는 칸을 선택한 경우 O, 이동할 수 없는 칸을 선택한 경우 X, 선택하지 않은 칸은 ' '(공백)으로 배열에 표시한다.` - BridgeGame.js # addResultInRow()
  - [x] `이동할 수 있는 칸을 맞힐 때마다 배열 끝에 '|' 파티션을 표시한다.` - BridgeGame.js # addPartition()

- [x] `다리 건너기 결과 배열을 출력한다.` - GameManager.js # printRow()

- [x] `이동할 수 없는 칸을 선택헀는 지 체크 한다.` - BridgeGame.js # checkBridge()

- [x] `이동할 수 없는 칸을 선택한 경우, 사용자에게 재시도 여부를 요청한다.` - InputView.js # readMoving() - BridgeGame.js # inputRetry() 에서 호출

- [x] `재시도 여부 입력 유효성 검사` - Validation.js # checkSpace()

  - [x] `입력 값이 있는가`
  - [x] `R 과 Q 둘 중 하나에 해당하는 값인가`

- [x] `재시도 입력값이 R인지 Q인지 체크한다.` - BridgeGame.js # checkRetry()

- [x] `R을 입력한 경우 다시 이동할 칸 선택 입력을 요청한다.` - BridgeGame.js # retry()

- [x] `Q를 입력한 경우 게임을 종료하고 결과를 출력한다.` - BridgeGame.js # printFinalResult()

- [x] `모두 맞힌 경우 게임을 종료하고 결과를 출력한다.` - BridgeGame.js # finish()
