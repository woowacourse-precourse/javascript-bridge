### 기능정리

- 다리를 생성한다.
  - 다리 길이를 숫자로 입력받는다.(3 ≤ x ≤ 20)
  - 입력한 칸만큼의 위/아래칸을 0,1 중 무작위 값을 이용해 정한다.
  - 위 칸이 건널 수 있으면 “U”, 아래 칸이 건널 수 있으면 “D”
  - 무작위 값 0이 아래칸, 1이 위칸이다.
- 플레이어가 이동할 칸을 선택한다.
  - 위 칸을 건너려면 “U”, 아래 칸을 건너려면 “D” 입력
  - 현재 칸에서 이동한 칸을 건널 수 있다면 O 표시, 없다면 X 표시
    - 현재까지 이동했던 모든 칸의 O,X 정보를 보여준다.
  - O일 경우, 다음 다리를 건너는 입력을 받는다.
  - X일 경우 재시작/종료여부를 입력을 받는다.
- 다리를 건너지 못했다면, 재시작/종료가 가능하다.
  - 재시작은 R, 종료는 Q를 입력한다.
  - 재시작하면, 처음에 만든 다리가 재사용된다.
- 다리를 끝까지 건거나 Q가 입력되면, 게임을 종료한다.
  - 최종 게임 결과와 성공여부, 시도횟수를 출력한다.
  - 게임결과에서 총 시도횟수는 첫시도~종료할 때 까지 시도횟수다.
- 잘못된 값 입력시 예외 처리한다.
  - throw 문으로 예외를 발생시키고, [[ERROR] 메시지 내용]을 출력한다.
  - 메시지 출력 후 입력을 다시 받는다.

### 요구사항

- `InputView` 에서만 `MissionUtils`의 `Console.readLine()` 을 이용해 사용자의 입력을 받을 수 있다.
- `BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다.

**공통사항**

- 제공된 객체 및 클래스를 활용해 구현해야 한다.

### **InputView 객체**

- `InputView`의 파일 경로는 변경할 수 있다.
- `InputView`의 메서드의 인자는 변경할 수 있다.
- 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

```
const InputView = {
  readBridgeSize() {},

  readMoving() {},

  readGameCommand() {},
};
```

### **OutputView 객체**

- `OutputView`의 파일 경로는 변경할 수 있다.
- `OutputView`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 값 출력을 위해 필요한 메서드를 추가할 수 있다.

```
const OutputView = {
  printMap() {},

  printResult() {},
};
```

### **BridgeGame 클래스**

- `BridgeGame`에 필드(인스턴스 변수)를 추가할 수 있다.
- `BridgeGame`의 파일 경로는 변경할 수 있다.
- `BridgeGame`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

```
class BridgeGame {
  move() {}

  retry() {}
}
```

### **BridgeMaker 객체**

- `BridgeMaker`에 프로퍼티를 추가할 수 없다.
- `BridgeMaker`의 파일 경로는 변경할 수 없다.
- `BridgeMaker`의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

```
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {},
};
```

### **BridgeRandomNumberGenerator 객체**

- Random 값 추출은 제공된 `BridgeRandomNumberGenerator`의 `generate()`를 활용한다.
- `BridgeRandomNumberGenerator`의 코드는 변경할 수 없다.
