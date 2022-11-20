## 객체 및 클래스 조건

### InputView 객체

- 파일 경로는 변경 가능
- 메서드의 인자 변경 가능
- 필요한 메서드 추가 가능

### OutputView 객체

- 파일 경로는 변경 가능
- 메서드의 이름은 변경 불가
- 인자는 추가 및 변경 가능
- 값 출력을 위한 메서드를 추가 가능

### BridgeGame 클래스

- 필드(인스턴스 변수) 추가 가능
- 파일 경로는 변경 가능
- 메서드의 이름 변경 불가
- 인자는 필요에 따라 추가하거나 변경 가능
- 게임 진행을 위한 메서드를 추가 및 변경 가능

### BridgeMaker 객체

- 프로퍼티 추가 불가
- 파일 경로 변경 불가
- 메서드의 시그니처(인자, 이름)와 반환 타입은 변경 불가

### BridgeRandomNumberGenerator 객체

- Random 값 추출은 제공된 `BridgeRandomNumberGenerator`의 `generate()`를 활용한다.
- `BridgeRandomNumberGenerator`의 코드는 변경 불가
