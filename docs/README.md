## bridge

## 🌟 기능 목록

### BridgeGame (게임 진행)

- [x] App Class의 play()를 통해 실행한다
- [x] 게임 시작 문구 `다리 건너기 게임을 시작합니다`를 출력한다
- [x] `gameStart()`(게임 실행)
  - [x] `다리의 길이를 입력해주세요`를 출력한다
  - [x] 다리의 길이를 입력받는다
- [x] `makeBridge()` (다리 생성)
  - [x] `InputView` 클래스를 통해 다리 길이를 입력받는다(`readBridgeSize()`)
  - [x] `BridgeMaker` 클래스에 다리 길이를 전달한다
    - [x] 다리 길이 유효성 검사를 진행한다
    - [x] 3이상 20 이하의 숫자를 입력해야 한다
  - [x] 다리를 생성한다
- [] `userMove()` (사용자 이동)
  - [x] `InputView` 클래스를 통해 사용자가 이동할 칸을 입력받는다(`readMoving()`)
  - [x] `OutputView` 클래스를 통해 현재까지 이동한 다리의 상태를 출력한다
- [] `userMoveResult` (사용자 이동 결과)
  - [x] 이동할 수 있는 칸일 경우 `userMove()`를 재진행한다
  - [x] 이동할 수 없는 칸일 경우 `retryOrEnd()`를 호출한다
- [x] `retryOrEnd()` (다시 시도할지 여부 확인)
  - [x] `InputView` 클래스를 통해 사용자가 게임을 다시 시도할지 여부를 입력받는다
  - [x] `R`이 입력될 경우
    - [x] `#currentPosition`을 초기화시킨다
    - [x] `userMove()`를 실행시킨다
  - [] `Q`가 입력될 경우
    - [] `OutputView`의 `printResult()`을 이용해 결과를 출력한다
    - [x] 게임을 종료한다
- [x] 칸을 끝까지 이동했을 경우
  - [] `OutputView`의 `printResult()`을 이용해 결과를 출력한다
  - [x] 게임을 종료한다

### BridgeMaker (다리 생성)

- [] `makeBridge()`
  - [] `BridgeRandomNumberGenerator`을 이용해 랜덤 숫자를 생성한다
  - [] `bridgeString` 함수를 이용해 다리 모양을 만든다
  - [] size번 반복한다

### BridgeRandomNumberGenerator (다리 생성에 이용할 랜덤 숫자 생성)

### InputView (사용자의 input값을 읽어오는 class)

다리 길이, 이동할 칸 정보, 다시 시작 or 종료 여부를 읽어온다

### OutputView (결과를 출력하는 class)

다리 형식(game board), 최종 결과를 출력한다
