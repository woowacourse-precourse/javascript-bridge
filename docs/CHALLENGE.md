## 이번 과제 도전 항목

- [] 리드미에 정리한 요구사항 및 입출력 양식을 잘 지키면서 구현한다.
- [] 구현 후 제출 전 요구사항 및 입출력 양식을 따라가면서 지켰는지 확인한다.
- [] 통합 테스트를 구현한다.
- [] 피어리뷰 때 보았던 좋은 코드들을 적용한다.

  - [] 김의천님의 `printTemplate` 메소드
    - 탬플릿 형태로 문자열 출력할 때 들여쓰기 처리를 해주는 메소드
    - [깃허브 링크](https://github.com/wzrabbit/javascript-lotto/blob/d93a23c43316dcac3fd0df07b2fe66c35b58a778/src/lib/BetterConsole.js#L4)
  - [] 고동현님의 `에러 처리를 forEach로 한번에 하기` 로직

    - 예시

      ```js
      const validations = {
        TYPE: CostValidator.#isNumber,
        MIN: CostValidator.#isGreaterThanOrEqualLottoPrice,
        MAX: CostValidator.#isLessThanOrEqualMaxSafeInteger,
        UNIT: CostValidator.#isDividedByLottoPrice,
      };

      Object.entries(validations).forEach(([key, validateFunc]) => {
        CostValidator.#validate(cost, validateFunc, ERROR_MESSAGE.COST[key]);
      });
      ```

    - [깃허브 링크](https://github.com/brad-go/javascript-lotto/blob/brad-go/src/validators/CostValidator.js#L5)

- [] 클래스 문법을 잘 이용하자.
- [] 주말까지 구현후 월~화요일은 리펙토링을 하자.

- [] 3주차 우아한 테크코스 공통 피드백을 잘 지키자.
  - [] 비즈니스 로직과 UI 로직을 분리한다
    - [] MVC 패턴을 적용하자.
  - [] 객체의 상태 접근을 제한한다
    - [] 필드는 private class 필드로 구현한다
  - [] 객체는 객체스럽게 사용한다
    - [] 데이터를 꺼내지(get) 말고 메시지를 던지도록 구조를 바꿔 데이터를 가지는 객체가 일하도록 한다.
  - [] 필드의 수를 줄이기 위해 노력한다
  - [] 성공하는 케이스 뿐만 아니라 예외에 대한 케이스도 테스트한다
  - [] 테스트를 위한 코드는 구현 코드에서 분리되어야 한다
  - [] 단위 테스트하기 어려운 코드를 단위 테스트하기
