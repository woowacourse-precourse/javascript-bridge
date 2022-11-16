## 🧱 설계 사항

### BridgeGame 클래스

#### start 메서드

- [x] InputView로부터 size를 받아 할당.

#### makeRandomNumber 메서드

- [x] 다리 입력 받은 길이만큼 BridgeRandomNumberGenerator를 실행하여 `#bridge`에 결과를 push.

#### move 메서드

- [x] U,D 판단 후 일치시 `matchCount`증가
- [x] 일치 여부 상관없이 진행 시 U,D 판단 위해 `progressIdx` 증가.

#### retry 메서드

- [x] 게임 진행 횟수 `#gameCount` 계산.
- [x] 재시작, 종료 구현.

### InputView

- [x] 다리의 길이 입력 받기.
- [x] [예외 처리] 3~20 사이의 숫자가 아닌 경우.

- [x] 사용자 입력으로 다리의 배치와 비교.
- [x] [예외 처리] U D 이외의 문자가 입력된 경우.

- [x] 사용자 입력으로 재시작 혹은 종료를 결정.
- [x] [예외 처리] R Q 이외의 문자가 입력된 경우.

- [x] `BridgeGame`의 `crossBridgeCompletely`가 true인 경우 클리어

- [ ] `exitGame` 추후 출력 관련 구현 예정.

### BridgeMaker

- [x] 인자로 받은 배열의 0은 D, 1은 U로 변경하여 리턴.
