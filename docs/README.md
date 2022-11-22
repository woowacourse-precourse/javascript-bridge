# 우테코 3주차 다리 건너기

우아한형제들 테크코스 3주차 다리 건너기 게임을 구현한 레포입니다.

## 3주차 요구사항

아래 요구사항에 맞춰 구현하였습니다. 코딩 컨벤션의 경우 AirBnb Java Style Guide를 따르도록 노력하였습니다.

```
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
- else를 지양한다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
- 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다.
- 메서드의 파라미터 개수는 최대 3개까지만 허용한다.
- 아래 있는 `InputView`, `OutputView`, `BridgeGame`, `BridgeMaker` 클래스(또는 객체)의 요구사항을 참고하여 구현한다.
  - 각 클래스(또는 객체)의 제약 사항은 아래 클래스별 세부 설명을 참고한다.
  - 이외 필요한 클래스(또는 객체)와 메서드는 자유롭게 구현할 수 있다.
  - `InputView` 에서만 `MissionUtils`의 `Console.readLine()` 을 이용해 사용자의 입력을 받을 수 있다.
  - `BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다.
```
## 클래스 설계 - 기능 목록

### InputView

- 사용자의 입력을 받는다.
- `MissionUtils`의 `Console.readLine()` 을 이용해 사용자의 입력을 받는다.

- readBridgeSize() : 다리 길이를 입력 받는다.
- readMoving() : 플레이어가 이동할 칸을 입력 받는다.
- readGameCommand() : 게임 재시작/종료 여부를 입력 받는다.

- 기존의 readline()은 2번째 인자로 callback함수를 받지 않아서 함수의 기능 분리 및 가독성을 위해 readline()을 재정의하였다.

### OutputView

- 사용자에게 출력을 보여준다.
- `MissionUtils`의 `Console.print()` 을 이용해 사용자에게 출력을 보여준다.

- printStartMessage() : 게임 시작 메시지를 출력한다.
- printMap() : 다리를 출력한다.
- printResult() : 게임 결과를 출력한다.
- printErrorMessage(message) : 에러 메시지를 출력한다.

### BridgeGame

- 사다리 게임을 진행한다.
- `InputView`, `OutputView` 를 사용하지 않는다.

#### 필드

- #bridge : 랜덤 생성된 다리의 배열 ex) ['U' , 'D', 'U']
- #bridgeMap : 게임에서 출력될 다리의 Map
- #currentPostion : 플레이어의 현재 위치
- #numberOfAttempts : 게임을 진행한 횟수

#### 메소드

- setBridge(bridgeSize) : 다리를 설정한다.
- setBridgeMap() : 다리를 출력할 Map을 설정한다.
- getNumberOfAttempts() : 게임을 진행한 횟수를 반환한다.
- getCurrentPostion() : 플레이어의 현재 위치를 반환한다.
- getBridgeMap() : 다리를 출력할 Map을 반환한다.
- move() : 플레이어를 이동시킨다.
- fail() : 실패했을 경우 플레이어의 맵을 나타낸다.
- retry() : 게임을 재시작할 때 횟수를 더하고 위치를 초기화한다.
- isFinish() : 게임이 종료되었는지 확인한다.
- isMoveFail(direction) : 플레이어가 이동할 수 있는지 확인한다.
- insertCorrectBridge(up, down, answerDirection) : 플레이어가 이동할 수 있을 때 다리를 추가한다.
- insertFailBridge(up, down, answerDirection) : 플레이어가 이동할 수 없을 때 다리를 추가한다.
- shallWeQuit() : 게임을 종료할지 확인한다.

### Validator

- 입력값의 유효성을 검사한다.

- isValidBridgeSize(bridgeSize) : 다리 길이의 유효성을 검사한다.
  - 다리 길이는 3 이상의 20이하의 정수여야 한다.
- isValidMoving(moving) : 플레이어가 이동할 칸의 유효성을 검사한다.
  - 플레이어는 'U', 'D'만 입력할 수 있다.
- isValidGameCommand(gameCommand) : 게임 재시작/종료 여부의 유효성을 검사한다.
  - 게임 재시작/종료 여부는 'Q', 'R'만 입력할 수 있다.
