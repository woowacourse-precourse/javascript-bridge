🚀 기능 목록
위아래 둘 중 하나의 칸만 건널 수 있는 다리를 끝까지 건너가는 게임이다.

- [x] 시작 문구 출력
- [x] 다리 길이 입력 받기
  - [x] 위, 아래 두칸으로 이루어진 입력받은 다리길이만큼 생성
  - [x] 0, 1로 건널 수 있는칸과 건널 수 없는 칸 지정
- [x] 이동할 칸을 U와 D로 입력 받기
- [x] 다리를 건널 수 있으면 해당 칸에 O 표시 & 다른 칸에는 ' '
- [x] 다리를 건널 수 없으면 해당 칸에 X 표시 & 다른 칸에는 ' '
- [x] 한번 움직인 후, 게임 종료됐는지, 건널 수 없는지, 아니면 게임 진행이 가능한지 확인
- [x] 출력
  - [x] 이동할 칸 입력 후 게임 진행 상황 출력
  - [x] 다리 끝까지 건너면 게임 종료
  - [x] 중간에 건널 수 없는 칸을 선택하면 게임 종료 혹은 재시작 가능
- [x] 게임 재시작 시 처음에 만든 다리 재사용
- [x] 총 시도한 횟수 : 첫 시도부터 게임이 끝날 때 까지 시도한 횟수
- [x] 잘못된 값 입력 시 throw를 통해 예외 발생
  - [x] 에러 메시지 출력 후 그 부분부터 입력 다시 받기
    - [x] 다리 길이 입력: 3 이상 20 이하의 숫자가 아닌 경우
    - [x] 다리 길이 입력 : 숫자가 아닌 경우
    - [x] 플레이어가 이동할 칸 입력: U/D 외의 입력
    - [x] 게임 재시작/종료 여부 입력: R/Q 외의 입력


- [x] test 코드 작성
  - [x] 다리 생성 테스트(BridgeCreateTest.js)
  - [x] 게임 재시작 테스트(RetryGameTest.js)
  - [ ] 에러 테스트(ErrorTest.js)
    - [x] 다리 길이 입력 에러
    - [x] 플레이어 이동할 칸 입력 에러
    - [x] 재시작/종료 여부 입력 에러
---

## 추가된 요구사항
- [x] 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
- [x] 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다.
- [x] 메서드의 파라미터 개수는 최대 3개까지만 허용한다.
- [x] 아래 있는 InputView, OutputView, BridgeGame, BridgeMaker 클래스(또는 객체)의 요구사항을 참고하여 구현한다.
- [x] 각 클래스(또는 객체)의 제약 사항은 아래 클래스별 세부 설명을 참고한다.
- [x] 이외 필요한 클래스(또는 객체)와 메서드는 자유롭게 구현할 수 있다.
- [x] InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
- [x] BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.

---

### 코드 컨벤션
- [x] 상수명은 SNAKE_CASE & 대문자
- [x] 문자열은 single quotes('') 사용
- [x] 문자열 생성 시 template strings 사용
- [x] 모듈 require 보다 import/export 사용 -> 주어진 부분 수정 x
- [x] == 보다 === 사용
- [x] 중괄호{} 앞에는 스페이스 1개 사용
- [x] if, for, while 등의 제어구문의 소괄호 () 앞에 스페이스 1개 사용. 함수 선언 및 호출시에는 x
- [x] 소괄호 () 안쪽에 스페이스 추가x
- [x] 대괄호 [] 안쪽에 스페이스 추가x
- [x] 중괄호 {} 안쪽에 스페이스 추가o
- [x] 세미콜론 쓰기

---
### InputView 객체
- 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
```
const InputView = {
  readBridgeSize() {},
  readMoving() {},
  readGameCommand() {},
};
```

### OutputView 객체
- 값 출력을 위해 필요한 메서드를 추가할 수 있다.
```
const OutputView = {
  printMap() {},
  printResult() {},
};
```

### BridgeGame 클래스
- 필드(인스턴스 변수)를 추가할 수 있다.
- 게임 진행을 위해 필요한 메서드를 추가하거나 변경할 수 있다.
```
class BridgeGame {
  move() {}
  retry() {}
}
```

### BridgeMark 객체
- 프로퍼티를 추가할 수 없다.
- 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
```
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {},
};
```

### BridgeRandomNumberGenerator 객체
- Random 값 추출은 재공된 BridgeRandomNumberGenerator의 generate()를 활용한다.
- BridgeRandomNumberGenerator의 코드는 변경할 수 없다.
- 사용 예시: 다리 칸을 생성하기 위한 Random 값은 아래와 같이 추출한다.
```
const number = generateRandomNumber();
```

---

### JavaScript의 주석
JS는 type이 불명확하기에 문서화를 통해 상세정보 남길 필요가 있다.
주석을 통해 소스코드와 일원화된 방식으로 문서화 가능.
// @param {number} size 다리의 길이
이처럼 data type이 number인 변수명이 size인 주석을 작성할 수 있다.

---

### Error
중간에 문제가 생겨 repository를 다시 fork했는데 local의 node_modules 파일이 지워지지 않았다.
https://diveforme.github.io/deleteNodemodule/
이 블로그를 통해 문제 해결