## 결과물 다이어그램
![image](https://user-images.githubusercontent.com/78866590/202894017-b3d1a855-20fe-4f79-b2fd-3900a3401bed.png)

<br/>

## 고민점
### 싱글톤패턴
-BridgeGame은 클래스이고, 여러군대서 접근하기 때문에 new로 생성될 때마다 생성이 되면 곤란하다고 생각됐습니다.
그렇기 때문에 싱글톤패턴을 이용해서 어디서 접근하더라도 하나의 인스턴스가 리턴되게 설정했습니다.

```javascript
constructor() {
    if (instance) return instance;
    this.#bridge = [];
    this.#gameTryCount = 1;
    this.#gameComplete = false;
    this.init();
  }
```

### Input과 Output, 그리고 내부 로직처리가 MVC패턴과 유사하다고 생각했습니다.
- 초기 개발을 할 때, 순환참조로 인해 발생하는 이슈가 있었고, 이로 인해 분리를 고민하게 되었습니다.
- 나름의 학습을 통해 MVC패턴에 대해서 배우게 되었고, 분리해보았습니다.

### 테스트코드 자체를 공부하게 되었습니다.
- 이번 미션도 초기에는 error를 throw하였지만 테스트가 통과가 되지 않았고, 이를 해결하기 위해 Jest의 홈페이지를 들어가 공부했습니다.
stringContaining을 보고 출력을 해야함을 알았고, 이를 인지하고 코드를 수정했습니다.
- 처음에 비동기 처리를 위해 async, await, promise를 활용한 비동기 처리를 사용하여 프로그래밍을 진행하였습니다.
그러나 테스트 코드가 실행되지 않는 현상이 발생했고, 테스트 코드가 주어진 상황의 TDD를 경험해보고자 테스트 코드에 맞추어 
순환 형태의 함수를 작성하게 되었습니다.
- 이밖에도 이전에 BridgeMaker에서 바로 BridgeGame에 접근하여 변수를 set해주었는데, 테스트를 보고 리턴으로 바꾸는 등,
기존에 코드에 테스트를 맞췄던 안좋은 습관에서 벗어나, 테스트 코드에 알맞는 코드를 작성하는 방법에 대해서 배웠습니다.
즉, TDD에 대한 흐름을 조금 더 이해하게 되었습니다.

## 기능 요구 사항
### 위 아래 두 칸으로 이루어진 다리를 건넌다.
- [x] 왼쪽에서 오른쪽으로 다리를 건넌다.
- [x] 위 아래 둘 중 하나의 칸 만 건널 수 있다. (예외처리)
### 다리 생성 
- [x] 각 다리의 칸은 0과 1로 상태 값이 정의된다.
- [x] 0인 경우 아래칸을 건널 수 있고, 1인 경우 위 칸으로 건널 수 있다.
- [x] 위 칸을 건널 수 있는 경우 U,  건널 수 없는 경우 D로 나타낸다.
### 플레이어 이동
- [x] 다리가 생성되면 플레이어가 이동할 칸을 선택한다.
- [x] 이동은 '대문자' U or D로 입력 받는다.
- [x] 이동 후 건널 수 있다면 O, 건널 수 없다면 X로 표시된다.
### 종료
- [x] 다리를 끝까지 건너면 게임이 종료된다.
- [x] 다리를 건너다 실패 시 재시작하거나 종료할 수 있다.
- [x] 종료 시, 총 시도한 횟수를 나타낸다.
### 재시작
- [x] 재시작시 다리를 재설정한다.
###  예외처리
- [x] U, D 외의 다른 커멘드를 입력하면 예외를 발생시킨다.
- [x] 재시작시 R or Q 외의 다른 커맨드를 입력하면 예외를 발생시킨다.

## 프로그래밍 요구 사항
- [x] 컨밴션 준수
- [x] process.exit() 호출 x
- [x] test 성공
- [x] indent 3 이내
- [x] 함수의 책임 분리
- [x] else 지양
- [x] 단위 테스트 확인
- [x] 함수의 길이가 10라인 이하
- [x] 메서드의 파라미터 개수 3개 이하
- [x] InputView에서만 readLine을 사용
- [x] BridgeGame에서 input Output 사용불가

## 객체관련
- [x] InputView 기능 구현
- [x] OutputView 기능 구현
- [x] BridgeGame 기능 구현
- [x] BridgeMaker 기능 구현
- [x] BridgeRandomNumberGenerator 사용

## 참고자료
- [expect.stringContaining](https://jestjs.io/docs/expect#expectstringcontainingstring)
- [service와 dto](https://www.kurien.net/post/view/24)

## 문제 해결 자료
- [순환 참조](https://stackoverflow.com/questions/64713565/accessing-non-existent-property-padlevels-of-module-exports-inside-circular-de)

