# 다리 건너기

> 우아한 테크코스 프리코스 4주차 - 프론트엔드

## 기능목록

- [x] feat1. (`App`) `App.play()`하면 새로운 게임 시작
- [x] feat2. (`InputView`) 다리의 길이를 입력받는다.
  1. 3 이상 20 이하 숫자.
  2. 예외처리 - numberrange, type
- [x] feat3. (`BridgeMaker`) 입력 받은 다리 길이를 토대로 다리를 만든다.
- 1 attempt
  - [x] feat4. (`App`) 시도횟수 카운트
  - 1 round
    - [x] feat5. (`InputView`) 플레이어가 이동할 칸을 입력 받는다.
      1. `U` or `D`
      2. 예외처리 - U, D가 아니면 에러
    - [x] feat6. (`BridgeGame`) 에서 `move()`로 이동시킴
    - [x] feat7. (`OutputView`) `OutputView.printmap()`으로 결과 출력
    - [x] feat8. (`BridgeGame`) 에서 결과 확인 - 게임이 끝났는지 안 끝났는지
- feat8의 결과에 따라서
  - [x] feat9. 게임 오버 - `BridgeGame.retry()`
  - [x] feat10. 게임 성공 - `App.quit()`
  - [x] feat11. 게임 계속 - 새 라운드 돌리기
- [x] feat12. (`BridgeGame`) `BridgeGame.retry()`로 `BridgeGame.quit()`, `App.makeAttempt()` 인지 선택!

## 구현 객체

### App

- `play()`: 안내 메세지 출력, 시작-결과 출력-종료
- `#startGame()`: 게임 시작하며 다리 생성
  - `#getAndSetBridgeSize()`: 다리 길이 입력 관리 및 생성 로직
- `#makeAttempt()`: 시도 수 관리
  - `#playRounds()`+ `#playRound()`: 라운드 진행하면서 커맨드 입력 받기 및 이동 결과 확인
- `#readReplyAndCheckRetry()`: 시도가 실패로 끝날 시 다음 진행 관리
- `#getGameResult()`: 게임 결과 반환
- `#end()`: 게임 결과 반환 및 출력
- `#tryCatch()`: 반복되는 코드를 줄이기 위해 try-catch 를 함수로 관리함

### BridgeGame

- `move()`: 커맨드의 유효성 검증 및 이동 가능 여부 확인
- `retry()`: 커맨드의 유효성 검증 및 재시도 여부 확인
- `setSize()`: 다리 길이 값 저장
- `makeBridge()`: 다리 생성
- `#isMovalbe()`: 커맨드 입력한 칸으로 이동 가능한지 확인

### InputView

- `readBridgeSize()`: 다리 길이 입력 처리
- `readMoving()`: 이동 입력 처리
- `readGameCommand()`: 재시도 또는 종료 입력 처리
- `#readLine()`: `Console.readLine()`의 비동기 처리용 함수

### OutputView

- `printStartMessage()`: 시작 문구 출력
- `printError()`: 에러 출력
- `makeGameMap()`: 출력 형식에 맞춰 게임 지도 반환
- `printMap()`: 지도 출력
- `printResult()`: 결과 출력
- `close()`: 콘솔창 닫기
