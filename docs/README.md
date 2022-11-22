# 🌉 다리 건너기 게임 기능 명세서

## 🛠 메서드

## 💽 Model

### BridgeGame

- `move()`: 움직임을 나타내는 메서드, 이동할 방향을 입력하면 현재까지 이동한 방향 기록에 입력한 방향을 추가
- `isSelectUpper()`: 위쪽 방향 'U'인지 확인하는 메서드
- `recordDirection()`: 입력한 이동 방향을 이동 기록에 추가하는 메서드
- `retry()`: 재시도 커맨드 입력 시 재시도 동작을 나타내는 메서드
- `addRetryCount()`: 재시도 횟수를 증가시키는 메서드
- `initRecords()`: 이동 기록을 초기화하는 메서드
- `getCurrentDistance()`: 현재까지 이동한 거리를 반환하는 메서드
- `isEndOfBridge()`: 다리의 끝에 도달했는지 확인하는 메서드
- `getRetryCount()`: 재시도 횟수를 반환하는 메서드
- `getGameResult()`: 다리 건너기 성공/실패 여부를 반환하는 메서드
- `isGameSuccess()`: 다리 건너기를 성공했는지 확인하는 메서드
- `isSameDirection()`: 입력한 이동 방향이 이동할 칸의 방향과 같은지 확인하는 메서드
- `isWrongDirection()`: 입력한 이동 방향이 이동할 칸의 방향과 다른지 확인하는 메서드, `isSameDirection()` 메서드로 구현
- `isCommandRetry()`: 입력된 커맨드가 재시도(R)인지 확인하는 메서드

### BridgeMap

- `create()`: 다리 맵을 생성하는 메서드
- `checkDirection()`: 입력 받은 칸의 방향이 현재 칸의 방향과 같은지 체크하는 메서드
- `markUpperBridge()`: 위쪽 다리에 O,X를 그리는 메서드
- `markDownerBridge()`: 아래쪽 다리에 O,X를 그리는 메서드
- `createPier()`: 다리의 중간 구분선(|)을 생성하는 메서드
- `closeBridge()`: 다리의 끝(])을 닫는 메서드
- `getBridge()`: 다리 맵 배열을 반환하는 메서드

## 📱 View

### InputView

- `readBridgeSize()`: 다리의 길이를 입력 받고 콜백함수를 실행하는 메서드
- `readMoving()`: 플레이어가 이동할 칸을 입력 받고 콜백함수를 실행하는 메서드
- `readGameCommand()`: 재시작/종료 여부를 입력 받고 콜백함수를 실행하는 메서드
- `repeatReadMoving()`: 예외처리로 다시 `readMoving()`을 실행하는 메서드
- `repeatReadCommand()`: 예외처리로 다시 `readGameCommand()`를 실행하는 메서드

### OutputView

- `printStartMessage()`: 게임 시작 문구를 출력하는 메서드
- `printMap()`: 다리 맵을 출력하는 메서드
- `printResult()`: 최종 결과를 출력하는 메서드

---

### 👨🏻‍💻 BridgeGameController

- `initGame()`: 다리 크기를 받아서 다리 건너기 게임을 초기화 하는 메서드
- `createGame()`: 다리 건너기 게임을 생성하는 메서드
- `moveNext()`: 다음 칸으로 이동하는 메서드
- `checkGameProcess()`: 게임 진행 상태를 체크하는 메서드(잘못된 방향인지/다리 끝에 도달했는지/다음 방향으로 이동하는지)
- `queryRetry()`: 재시작할건지 질의하는 메서드
- `checkRetry()`: 입력한 커맨드가 재시작(R)인지 확인하는 메서드
- `showBridge()`: 다리 건너기 게임의 현재 상태 다리 맵을 보여주는 메서드
- `showResult()`: 다리 건너기 게임의 최종 결과를 보여주는 메서드
- `quit()`: 다리 건너기 게임을 종료하는 메서드

## 🚀 구현 기능: To do

- [x] 다리의 길이를 입력 받고 다리 생성하기
- [x] 플레이어가 이동할 칸 선택하기(입력, U or D)
- [x] 다리를 건널 수 있는 경우 판단하기(위,아래)
- [x] 이동할 칸 입력 받고 만약 그 칸을 건널 수 있으면 O로 표시하기 그렇지 않으면 X로 표시하기
- [x] 다리를 끝까지 건너면 게임 종료하기
- [x] 게임 재시작하기(처음 만든 다리 재사용)
- [x] 게임 총 시도 횟수 계산하기
- [x] 다리 출력하기

---

## 프로그램 구조도 

![다이어그램](https://user-images.githubusercontent.com/62415600/203300379-af9913c5-f64b-483b-a9f8-9085f7b79f07.jpg)





## 🐞 주요 예외처리

- 생성할 다리 길이 범위: 3~20, 올바른 값 아니면 예외처리
- 라운드마다 플레이어가 이동할 칸: U or D, 올바른 값 아니면 예외처리
- 게임 재시작/종료 여부: R or Q, 올바른 값 아니면 예외처리

## 📝 적용할 피드백

- 객체의 상태 접근 제한하기
- 객체는 객체스럽게 사용하기
- 필드의 수 줄이기
- 예외 케이스(특히 경계값) 테스트 하기
- 테스트 코드에서는 순수 구현 코드로만 테스트 하기
- 단위 테스트가 쉽도록 코드 리팩터링하기
