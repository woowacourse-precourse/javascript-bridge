## 클래스 기능

- `App`은 어플리케이션 전반적인 운영과 관련이 있는 클래스입니다. `status` 프로퍼티와 `process` 메서드를 통해 다음에 실행할 함수 또는 메서드를 결정합니다.
- `BridgeGame`은 사용자 입력에 따라 이동을 기록하고 게임 결과를 반환, 이동 초기화의 역할을 하는 클래스입니다.
- `BridgeMaker`는 다리를 생성하는 객체입니다.
- `BridgeRandomNumberGenerator`는 다리를 만들기 위한 숫자를 생성하는 객체입니다.
- `InputView`는 사용자 입력을 담당하는 객체입니다.
- `OutputView`는 출력을 담당하는 객체입니다.

## 기능 목록

- [x] `App` 클래스
  - [x] `InputView`를 이용해 다리 길이를 입력 받는다. 이후 `BridgeGame` 클래스를 만들고 다음 `status`를 반환한다. - `setBridgeGame`
  - [x] `InputView`를 이용해 플레이어 이동을 입력 받는다. `BridgeGame`의 `move`를 호출한 뒤 다음 `status`를 반환한다. - `addBridgeGameMove`
  - [x] `InputView`를 이용해 재시작 옵션을 입력 받는다. `BridgeGame`의 `retry`를 호출한 뒤 다음 `status`를 반환한다. - `retryOrQuit`
  - [x] 게임이 종료되면 `OutputView`를 이용해 결과를 출력한다.
- [x] `BridgeGame` 클래스
  - [x] 게임 결과에 따라 다음 `status`를 반환한다. - `getStatus`
  - [x] 사용자 이동 경로를 추가한다. - `move`
  - [x] 재시작한다. - `retry`
- [x] `BridgeMaker`
  - [x] 다리 길이에 따라 랜덤한 다리를 생성한다. - `makeBridge`
- [x] `BridgeRandomNumberGenerator`
  - [x] 랜덤한 다리 한 칸을 생성한다. - `generate`
- [x] `InputView`
  - 예외 사항 시 에러 문구를 출력한다.
  - [x] 다리 길이를 입력 받는다. 다리 길이는 3 이상 20 이하의 정수만 입력 가능하다. - `readBridgeSize`
  - [x] 이동할 칸을 입력 받는다. 대문자 'U'와 'D'만 입력 가능하다. - `readMoving`
  - [x] 게임 재시작/종료 여부를 입력 받는다. 대문자 R'과 'Q'만 입력 가능하다. - `readGameCommand`
- [x] `OutputView`
  - [x] 현재까지 이동한 다리의 상태를 출력한다. - `printMap`
    - 이동할 수 있는 칸을 선택한 경우 'O'으로 표시한다.
    - 이동할 수 없는 칸을 선택한 경우 'X'으로 표시한다.
    - 선택하지 않은 칸은 ' '으로 표시한다.
    - 다리의 시작은 '[', 다리의 끝은 ']'으로 표시한다.
    - 다리 칸의 구분은 ' | ' 문자열로 구분한다.
    - 현재까지 건넌 다리를 모두 출력한다.
  - [x] 성공 여부, 총 시도 횟수를 담은 게임 결과를 출력한다. - `printResult`
