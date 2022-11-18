## 요구사항 정리

- Controller
  - [x] `InputView.readBridgeSize`를 위한 콜백함수 만들기
  - [x] `InputView.readMove`를 위한 콜백함수 만들기
  - [x] `InputView.readGameCommand`를 위한 콜백함수 만들기
  - [x] `BridgeGame.move`결과에 따른 선택적 함수 실행을 위한 메서드 만들기
  - [x] `BridgeGame.retry`결과에 따른 선택적 함수 실행을 위한 메서드 만들기

- InputView
  - [x] 다리길이 입력값 받기.
    - [x] 유효성 테스트 하기
  - [x] 다리 건너는 방향 입력 받기.
    - [x] 유효성 테스트 하기
- OutputView
  - [x] bride와 inputs 받아서 다리 출력하는 `printMap`함수 만들기
    - [x] 위, 아래 다리 나누어서 문자열 만들기
    - [x] 각각 프린트 하기
  - [x] bridge와 inputs 받아서 결과 리턴하는 `printResult`함수 만들기
    - [x] `printMap`재활용해서 다리 출력
    - [x] 성공 여부 출력하는 `printIsSuccess`만들기
    - [x] 게임 시행횟수 출력하는 `printGameCount`만들기
- Validation
  - [x] 다리 길이 입력 값 유효성 테스트 하기.
    - [x] 숫자만 입력 유효성 테스트.
    - [x] 숫자 범위 유효성 테스트
  - [x] 다리 건너는 방향 입력 받기.
    - [x] `U`나 `D`만 받게 유효성 테스트
- errorHandler
  - [x] 오류가 나면 오류를 출력하고 다시 입력받게 구현

### 어려웠던 점

- 입력값에 유효하지 않은 값이 들어오면 `thorw`문을 던지고 에러 메시지 출력 그리고 재입력 받아야 합니다. 근데 `throw`문을 더졌는데 어케 에러메시지를 출력하고 다시 입력받지?

  아! `try - catch`를 사용해서 해결 하였습니다.

- `BridgeGame` 클래스 내에 `InputView`와 `OutputView`를 사용하지 않게 끔 설계하라는 것을 확인 했습니다.

  여태까지 잘못 만들고 있었습니다. 어떤 식으로 구조를 바꾸어야 할지 고민해야 할 것 같습니다.
  
  **구현 방법**
  
  - BridgeGame에서 모든 게임을 진행합니다.
    - move와 retry 메서드는 `Console.readLine`의 콜백 함수로 만들었습니다.
      - curry를 이용하여 move, retry메서드를 `errohandling` 메서드로 래핑하여서 오류가 나더라도 프로그램이 종료되지 않고 계속 진행할 수 있게 하였습니다.
    - start는 게임이 시작되면서 다리길이를 결정하는 메서드입니다.
  
  이 방법을 이용하지 않게 하려는 이유가 무엇일까?
  
  - 각 클래스의 역할이 명확하지 않은 것 같다.
  
    InputView에서 재귀적으로 일련의 게임 과정이 진행 되는데 `BridgeGame`의 `메서드`는 게임을 진행하지만 `read`그리고`retry`는 그저 콜백 함수의 역할 만을 하기 때문입니다.
  
  - 그럼 어떤 식으로 구현 형식을 바꾸면 좋을까?
  
    `BridgeGame`클래스는 중요한 변수들을 저장하면서 어떠한 입력값에 따른 상태를 전달하는 그런 클래스로 만들면 좋을거 같다는 생각이 들었습니다.
  
  - 그리고 `View`와 `BridgeGame`이 서로너무 외존적이라고 생각이 듭니다.
  
    이런식이라면 나중에 리팩토링 할때 하나의 클래스만 리팩토링하는 것이 아닌 각각의 클래스를 모두 들여봐야하는 안좋은 상황이 생길 수 있다고 생각합니다.
  
    그래서 Controller라는 클래스를 새로이 만들어서 컨트롤러가 각각의 클래스를 사용하는 식으로 만들면 좋을거 같습니다.
  
- 클래스 리팩토링 하기

  - Controller 

    `InputView`와 `OutputView`그리고 `BridgeGame`을 관리할 수 있는 클래스

  - BridgeGame (Model)

    게임에 필요한 정보를 저장하고 핸들링하는 클래스

  - InputView

    입력 View를 관리하는 클래스

    - 컨트롤러를 통해 전달 받은 메서드를 에러핸들링 함수를 래핑하여 실행

  - OutputView

    `Controller`를 통해서 전달 받은 `BridgeGame`에 대한 정보를 출력하는 클래스

  `MVC`패턴을 이용하려고 노력하였습니다.

  `InputView`, `OutputView`는 `BridgeGame`에 대해 알지 못하고 `Controller`를 통해 전달 받는 정보만을 이용해 입력 혹은 출력 동작을 합니다.

  `BridgeGame`또한 `InputView`에 대해 알지 못하고 `Controller`를 통해 전달 받는 입력 값 만으로 데이터 핸들링을 합니다.

- 에러 핸들링하는 함수 만들기

  에러 핸들링을 하기 위해서는 입력 값을 핸들링하는 콜백 함수를 래핑할 필요성이 있다고 느꼈습니다. 하지만 저는 콜백 함수를 전달해야했습니다. 그러면 `InputView`의 메소드 내에서 `try ... catch`문을 삽입할 수 밖에 없는데 그렇게 된다면 메서드의 길이가 너무 길어진다는 단점이 있었습니다.

  그래서 저는 에러 핸들링을 위해 콜백함수를 래핑하는 함수를 만들고 그 함수를 `curry`를 통해서 쉽게 `input`값 만을 받는 콜백 함수로 만들 수 있었습니다.

- 현재 `BridgeGame.retry`혹은 `BridgeGame.move`의 결과에 따라 `switch`문을 이용해 함수 실행을 하고 있는데 이 메서드가 길이가 길어서 좀 더 줄일 수 있는 방법이 있을지 고민하고 있습니다.
