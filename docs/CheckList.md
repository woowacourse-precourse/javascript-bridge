### 체크리스트

- [ ] 발생할 수 있는 예외 상황에 대해 고민한다. EX)번호가 소수점, 구매 금액이 음수
- [ ] 객체의 상태 접근을 제한한다.
- [ ] 객체는 객체스럽게 사용한다.
- [ ] 필드의 수를 줄이기 위해 노력한다.
- [ ] 성공하는 케이스 뿐만 아니라 예외에 대한 케이스도 테스트한다.
- [ ] 테스트 코드도 반복적으로 하는 부분을 중복되지 않게 해야 한다.
  ```
    test.each([["999"], ["0"], ["-123"]])("천원 미만의 금액에 대한 예외 처리",    (input) => {
      expect((input) => {
      const app = new App(input);
      app.play();
    }).toThrow();
   }
  );
  ```
- [ ] 올바른 함수명을 지으려고 노력하였는가?

  ```
  함수는 동작 하나만 담당해야 합니다.

  "show"로 시작하는 함수는 대개 무언가를 보여주는 함수입니다.
  "get…" – 값을 반환함
  "calc…" – 무언가를 계산함
  "create…" – 무언가를 생성함
  "check…" – 무언가를 확인하고 불린값을 반환함

   + 동사

  showMessage(..)     // 메시지를 보여줌
  getAge(..)          // 나이를 나타내는 값을 얻고 그 값을 반환함
  calcSum(..)         // 합계를 계산하고 그 결과를 반환함
  createForm(..)      // form을 생성하고 만들어진 form을 반환함
  checkPermission(..) // 승인 여부를 확인하고 true나 false를 반환함
  ```

- [ ] 출력할 때 출력 함수를 한번만 호출하려고 노력하였는가?
- [ ] callback을 따로 함수로 변환해서 바인딩하는 방식으로 작성을 하였는가?
- [ ] Set 혹은 Map을 이용해 확장 가능성과 성능을 올리려는 노력을 하였는가?
- [ ] import 시 모듈을 알파벳 순으로 정렬하였는가?
- [ ] 파일명을 통일성 있게 만들었는가? 파스칼 규칙
- [ ] 상수를 이용하여 문자열 ,숫자를 관리하였는가?
- [ ] 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현하였는가?
- [ ] 올바른 변수명을 사용하였는가?
- [ ] JavaScript 코드 컨벤션을 지키면서 프로그래밍 하였는가?
- [ ] 클래스를 분리하였는가?
- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현하였는가?
- [ ] 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현하였는가?
- [ ] else를 지양하였는가?
- [ ] 도메인 로직에 단위 테스트를 구현하였는가? 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.
- [ ] 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분하였는가?
- [ ] ApplicationTest의 모든 테스트가 성공하였는가?
- [ ] Jest를 이용하여 본인이 만든 기능 목록을 테스트 하였는가?
- [ ] 메서드의 파라미터 개수는 최대 3개가 넘어가지 않도록 하였는가?
- [ ] single quotes를 사용하였는가?
- [ ] InputView 에서만 MissionUtils의 Console.readLine() 을 이용하였는가?
- [ ] BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않도록 하였는가?
- [ ] InputView 객체
  - [ ] 제공된 InputView 객체를 활용해 구현해야 한다.
- [ ] OutputView 객체

  - [ ] 제공된 OutputView 객체를 활용해 구현해야 한다.
  - [ ] OutputView의 메서드의 이름은 변경할 수 없다.

- [ ] BridgeGame 클래스

  - [ ] 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
  - [ ] BridgeGame의 메서드의 이름은 변경할 수 없다.

- [ ] BridgeMaker 객체

  - [ ] 제공된 BridgeMaker 객체를 활용해 구현해야 한다.
  - [ ] BridgeMaker에 프로퍼티를 추가할 수 없다.
  - [ ] BridgeMaker의 파일 경로는 변경할 수 없다.
  - [ ] BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

- [ ] BridgeRandomNumberGenerator 객체

  - [ ] Random 값 추출은 제공된 BridgeRandomNumberGenerator의 generate()를 활용한다.
  - [ ] BridgeRandomNumberGenerator의 코드는 변경할 수 없다.
  - [ ] 다리 칸을 생성하기 위한 Random 값은 아래와 같이 추출한다.

    ```
    const number = generateRandomNumber();
    ```

- [ ] 올바른 커밋 메세지 컨벤션을 사용하였는가?
  - ```
    feat (feature)
    fix (bug fix)
    docs (documentation)
    style (formatting, missing semi colons, …)
    refactor
    test (when adding missing tests)
    chore (maintain)
    ```
