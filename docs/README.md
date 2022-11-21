# 🌈다리 건너기

## 요구 사항 분석

---

MVC 패턴의 관점으로 BridgeGame의 move 메소드를 분석하면 다음과 같다.
<br/>
InputView에서 input으로 사용자가 입력한 "U", "D"가 입력되고 Controller는 Model인 BridgeGame에 input을 전달한다.  
BridgeGame은 input을 바탕으로 로직을 수행한 다음 데이터에 로직이 수행된 결과를 Controller에 반환한다.  
Controller는 그 결과를 다시 OutputView로 전달하고 OutputView는 결과를 출력한다.

## 기능 목록

---

1. 다리의 길이를 입력받는다.
2. BridgeMaker를 사용해서 입력받은 길이 만큼의 다리를 생성한다. BridgeMaker는 BridgeRandomNumberGenerator를 사용해서 생기는 난수를 바탕으로 upBridge와 downBridge 둘 중 하나의 다리를 건널 수 있는 다리로 설정한다.

```javascript
makeBridge(size, generateRandomNumber) {
    let currentSize = 0;
    let bridge = [];

    while (currentSize < size) {
      const randomNumber = generateRandomNumber();
      bridge.push(this.convertRandomNumbertoUpDown(randomNumber));
      currentSize++;
    }

    return bridge;
  },

  convertRandomNumbertoUpDown(randomNumber) {
    if (randomNumber === 1) return Constant.UP;
    return Constant.DOWN;
  },
```

3. 어떤 다리를 고를 것인지 입력을 받는다.
4. 사용자가 고른 다리가 갈 수 있는 다리인지 아닌지 확인한 다음 사용자가 고른 다리에는 "O"나 "X"를 전달하고 고르지 않은 다리에는 공백을 전달한다.
5. UpBridge와 DownBridge는 스택으로 볼 수 있다. 게임이 첫번째 시행이라면 createBridge로

```
"[" + " O ]" <- 한번에 괄호를 닫아준다.
```

6. 첫번째 시행이 아니라면 extendBridge로 _마지막 괄호를 제거한 후_ "|"를 더해준다. 그 다음 "O", "X" 와 닫는 괄호를 더해준다.

```
"[ O " + "|"
그 다음
"[ O |" + " O ]"
```

7. 사용자가 틀리면 재시작 여부를 묻고 재시작하거나 종료한다. 재시작을 할 때 bridgeMaker로 이미 생성된 정답 다리는 그대로 유지된다.
8. move를 통해서 사용자가 만들어나가는 다리의 길이가 사용자가 처음에 입력한 다리의 최종 길이와 같아질 때 까지 틀리지 않는다면 게임은 성공이고 최종 게임 결과를 출력한다.
9. 게임 성공 여부와 게임을 시도한 횟수를 출력한다.

## 예외 처리

---

이번 미션에서 예외 처리는 이전과 같이 throw문을 사용해서 에러를 알린다.  
하지만 다른 점은 throw new Error()를 사용해서 프로그램을 종료시키면 안된다는 것이다.  
이 부분을 구현하기 위해서는 throw와 try/catch를 사용해야 한다.

```javascript
const { Console } = require("@woowacourse/mission-utils");

const bridgeGame = {
  size: 0,
};

const exception = (input) => {
  if (isNaN(input)) {
    throw "[ERROR] 숫자를 입력해주세요.";
  }
};

const saveSize = (input) => {
  try {
    exception(input);
    bridgeGame.size = input;
  } catch (err) {
    Console.print(err);
  }
};

const inputSize = (callback) => {
  Console.readLine("다리 길이를 입력해주세요.", callback);
};

inputSize(saveSize);
```

이런 식으로 구현을 해야 한다.  
그리고 이 방법으로 사용자가 예외 처리 되는 입력을 했을 때 그 부분부터 다시 입력을 받아서 로직을 수행하는 것 까지 가능하다.

### 예외 처리 목록

1. 사용자가 다리의 길이를 입력할 때 숫자가 아닌 문자를 입력하면 `isNaN`을 사용해서 예외 처리를 한다.
2. 사용자가 위쪽 다리와 아래쪽 다리 둘 중 하나를 선택해야 할 때 `U` 나 `D`가 아니면 예외 처리를 한다.
3. 사용자가 재시작 여부에 대답을 할 때 `Q` 나 `R`이 아니면 예외 처리를 한다.

## PROGRAMMING PLAN

---

주어진 객체를 활용해야 하지만 BridgeGame에서 move를 하는 것과 BridgeMaker 의 메소드가 size를 인자로 받는 것이 어떤 의미인지 이해가 잘 되지 않는다.  
우선 생각이 드는 로직으로 구현을 마친 후에 주어진 제약에 맞게 리팩토링하는 것으로 한다.
그리고 직접 실행해보면서 확인한 다음 테스트 코드를 작성하지 않고 실행여부를 바로 테스트 코드로 확인한다.
BridgeMaker가 size를 받는 이유는 게임을 재시작 하더라도 이전의 updown의 결과는 그대로 유지되어야 한다는 요구사항에 맞춰서 어떤 다리가 건너도 되는 다리인지는 정해져있어야하기 때문인 것 같다.  
문제를 이해하는 데에 생각보다 오래 걸렸고 기존에 생각했던 것을 많이 수정해야할 것 같다.

## TEST

---

테스트 코드를 작성하는데 난수를 생성하는 generate는 숫자를 반환한다.  
그런데 ApplicationTest에서 mock함수는 문자로 0과 1을 반환하도록 해놓았다. 그렇게 직접 작성한 테스트 코드를 수정했더니 makeBridge가 빈 배열을 하나 더 반환하는 것으로 나오는데 이 이유는 무엇일까?  
makeBridge에서의 0과 1인지 확인하는 부분을 타입 비교를 하지 않도록 바꿔서 해결했지만 여전히 ApplicationTest에서는 통과가 되지 않는다.  
이전 미션에서도 기능의 완성이 온전히 다 되기 전까지 ApplicationTest에서는 통과가 되지 않았던 부분이 있기 때문에 일단 지금 확인 가능한 테스트에서 통과가 된다면 기능의 완성을 우선으로 하자.  
test가 잘 되지 않았던 이유는 요구 사항이 throw문을 사용해서 error를 출력하고 입력을 그 부분부터 다시 받으라고 되어있었는데 그 부분을 정확히 이해하지 못했기 때문이다.  
우선 ExceptionHandler에서는 throw로 예외 처리를 한다. 그런데 내보내는 것은 new Error()가 아니라 문자열이다.  
그리고 이것을 처리하려면 GameController.js 에서는 try/catch 구문을 사용해야 한다.  
이렇게 하면 throw를 사용한 에러 문구 출력과 에러가 일어난 시점부터 다시 입력을 받아 게임을 진행하는 것이 가능하고 테스트에서는 예외처리 부분을 toThrow("[ERROR]")로 테스트를 할 수 있다.
새롭게 변경된 사항은 bridgeMaker의 test에서 문자열이 아니라 숫자가 맞았던 것이고 적용시켰다.
