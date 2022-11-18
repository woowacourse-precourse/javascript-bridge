# 🚀 구현

## 🧾 구현 목록 체크리스트

### 🚨 체크리스트

- [o] **App play 구현** App #play
- [o] **시작 문구 출력** OutputView #printResult
- [o] **생성할 다리 길이를 입력 받는다.** InputView #readBridgeSize
  - [ ] **3 이상 20 이하의 숫자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.**
  - [o] **입력 받은 다리를 생성한다** InputView #readBridgeSize - BridgeMaker #makeBridge
- [v] **라운드마다 플레이어가 이동할 칸을 입력 받는다. U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.** - 예외처리 나중에 InputView #readMoving

  - [o] **입력 받는 값에 맞게 이동한다.**BridgeGame #move

    - [o] **기존 다리와 유저 인풋값을 활용하여 새로운 다리 반환한다.** BridgeMaker #makeUserBridge
    - [o] **새로운 다리를 출력한다.** OutputView #printMap
    - [o] **기존 다리와 유저 다리를 비교한 후 맞으면 다시 진행, 틀리면 재시작/종료 문구 실행하는 판단** BridgeMaker #isNext

    - [o] **게임 재시작/종료 여부를 입력 받는다. R(재시작)과 Q(종료) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.** InputView #readGameCommand
    - [o] **재시작해도 처음에 만든 다리로 재사용한다.** InputView #readMoving
    - [ ] **도착 할 때 까지 다시 물어보기 반복**InputView #readMoving

- [o] **다리를 끝까지 건너면 게임이 종료된다.** OutputView #printResult
- [o] **게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낸다.** OutputView #printResult

- [ ] **사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.**

# 🚀 공부

## 🧾 공부 목록

콜백 함수를 동기적으로 처리하는 방법은?

### 🚨 체크리스트

- [ ] ***
- [ ] ***

### 요구 사항

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
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
