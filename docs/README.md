## 3주차 피드백 📣

1. 객체를 객체스럽게 사용하기 ⭕️
   => 객체가 일해서 값을 내놓도록하자 컨트롤러에서 값을 받아 일하는 것이 아니다.

- 모든 멤버변수의 getter를 막자! ⭕️

2. 필드의 수를 최소화하자

- 3개만 사용!! ⭕️

3. 테스트 코드 작성시 성공 케이스 뿐 아니라 예외에 대한 테스트도 실행할것 ⭕️

- test(each()) 사용해볼것!! ⭕️

4. 테스트 코드도 리팩토링이 필요하다 ⭕️

- 더 나은 테스트 코드로 리팩토링필요

5. 구현코드 = 테스트 코드 즉, 구현하고자하는 코드에 어떤 함수가 추가되거나 축소되는 건 지양하자 ⭕️

6. 함수와 단위테스트는 가장한 작게! ⭕️

## 4주차 미션 : 오징어게임 다리건너기 🦑

## 프로그래밍 요구 사항 🎯

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다. ⭕️

- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라. ⭕️

- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다. ⭕️

- else를 지양한다. ⭕️

- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다. ⭕️

- 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다. ⭕️

- 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다. ⭕️

- 메서드의 파라미터 개수는 최대 3개까지만 허용한다. ⭕️

- InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다. ⭕️

- BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다. ⭕️

## 기능 목록 📚

⭕️ - 테스트 코드로 통과한 기능
🔵 - 게임 실행으로 통과한 기능

1. 사용자에게 다리길이 입력받기 🔵

2. 입력값 타당성 검사 ⭕️ 🔵

🚨 유저가 3~20 사이의 숫자를 입력했는지 확인 ⭕️ 🔵
🚨 유저가 숫자만 입력 했는지 확인 ⭕️ 🔵
🚨 오류 발생 후 그 시점에서 다시 입력받기 ⭕️ 🔵

3. 입력 받은 다리길이와 랜덤 변수를 활용하여 다리 생성 ⭕️ 🔵

4. 사용자에게 이동할 칸 입력받기 🔵

5. 입력값 타당성 검사 ⭕️ 🔵

🚨 대문자로 작성했는지 확인 ⭕️ 🔵
🚨 U 또는 D만 입력했는지 확인 ⭕️ 🔵
🚨 U 또는 D 한 알파벳만 입력했는지 확인 ⭕️ 🔵
🚨 오류 발생 후 그 시점에서 다시 입력받기 🔵

6. 유저의 이동의 통과/실패 판단 후 결과를 배열에 저장 ⭕️ 🔵

🚨 이동 결과는 boolean 타입으로 판단 ⭕️ 🔵
🚨 유저의 움직임에 따라 통과면 "O" 실패면 "X"를 이중 배열에 저장 ⭕️ 🔵

7. 유저의 다리 이동 결과에 따라 출력 🔵

🚨 유저의 이동이 통과/실패 상관 없이 최근 이동한 결과를 출력 🔵
🚨 유저가 마지막 다리 이동에 성공 했을 때 게임 결과 출력 및 종료 🔵

7. 유저의 이동이 통과 일 때 다음 이동 칸 입력받기 🔵

- 입력값 타당성 검사 5.번과 동일 ⭕️ 🔵

8. 유저의 이동이 실패 일 때 유저에게 재시작/종료 입력받기 🔵

9. 입력값 타당성 검사 ⭕️ 🔵

🚨 대문자로 작성했는지 확인 ⭕️ 🔵
🚨 R 또는 Q만 입력했는지 확인 ⭕️ 🔵
🚨 R 또는 Q 한 알파벳만 입력했는지 확인 ⭕️ 🔵

10. 입력값에 따라 재시작/종료 판단 ⭕️ 🔵

🚨 Boolean 타입으로 반환 ⭕️ 🔵

11. 게임 재시작 시 게임 환경 리셋(⭕️) 및 사용자에게 이동할 칸 입력받기 🔵

12. 게임 종료 시 게임 최종 결과, 게임성공여부 및 시도 횟수 출력 🔵

13. 인스턴스 종료 🔵

## 구현 기능 목록 📖

### 🧠 Controller 역할을 하는 `BridgeContoller`에서 필요한 기능을 종합하여 실행하도록 한다,

- `gameStart()` 함수는 유저에게 게임 시작을 알리는 함수(`OutputView.bridgeGameStart()`)와 유저에게 다리 길이를 입력받고 타당성 검사 함수를 호출 하는 함수(`getUserBridgeSize()`)를 호출한다.

- `getUserBridgeSize()` 함수는 다리 길이를 입력받는 함수(`InputView.readBridgeSize()`)와 입력값에 대한 타당성을 검사하는 함수(`checkBridgeLength()`)를 호출 후 타당성 검사가 통과되면 유저에게 이동 입력값을 받는 함수를 호출하는 함수((`this.getUserMove()`))를 호출한다.

- `checkBridgeLength()` 함수는 다리 길이에 대한 타당성 검사를 실행하는 함수 (`Validation.checkBridgeLength()`)를 호출하고 에러가 발생했을 때 다시 다리 길이를 입력받는 함수를 호출한다.(`getUserBridgeSize()`)

- `creatBridge()` 함수는 다리를 만드는 함수를 호출(`BridgeMaker.makeBridge()`)하여 다리를 생성한다.

- `JudgementAndShow()` 함수는 유저 이동의 Pass/fail 을 판단하는 함수(`bridgeGame.move()`)와 유저의 이동 결과를 가져오는 함수(`bridgeGame.getResult()`)를 호출 한 뒤 유저에게 결과를 보여주는 함수(`OutputView.printMap()`)를 호출한다 이때 만약 마지막 다리를 건너는 경우가 아니면 성공/실패했을 때 유저에게 행보를 물어보는 함수(`passOrNot()`)를 호출한다.

- `completeGame()` 함수는 유저가 마지막 다리 건너기를 성공했을 때 게임 최종 결과를 출력하는 함수(`gameEnd()`)를 호출한다.

- `passOrNot()` 함수는 유저가 다리 건너기에 통과했을 때는 유저의 이동 입력값을 받는 함수 (`getUserMove()`)를 호출하고 실패했을 때는 재시작/종료를 선택하는 함수 (`getUserRetry()`)를 호출한다.

- `checkUserRetry()` 함수는 재시작/종료 입력값의 타당성을 검사하는 함수 (`Validation.checkRetry()`)를 호출하고 에러 발생시 에러를 출력하고 다시 재시작/ 종료 입력값을 받는 함수 (`getUserRetry()`)를 호출한다.

- `getUserRetry()` 함수는 유저에게 재시작/종료를 입력받는 함수 (` InputView.readGameCommand()`)를 호출하고 에러가 발생하지 않으면 유저의 선택을 판단하는 함수 (`judgementRetry()`)를 호출한다.
  재시작을 선택하면 `getRetry()` 함수를 종료를 선택하면 `gameGiveUp()`함수를 호출한다.

- `gameRetry()` 함수는 게임의 초기 상태로 리셋 시키는 함수 `bridgeGame.reset()`를 호출 후 유저의 이동을 입력받는 함수 (`getUserMove()`)를 호출한다.

- `gameGiveUp()` 함수는 게임이 종료된 시점의 게임 결과와 시도횟수를 출력한 후 인스턴스를 종료하는 함수 `OutputView.printResult()`를 호출한다.

### 🗂 Model 역할을 하는 `BridgeGame.js` , `BridgeMaker`, `BridgeRandomNumberGenerator`, `Validation`은 bridgeGame에서 필요한 데이터를 호출받고 전달해주는 역할을 한다.

- `BridgeGame.js` 는 3개의 필드를 갖는다. #indexCount , #gameResult, #tryCount . 이중 indexCount는 get되지 않고 클래스 내부에서 메세지만 던진다. gameResult와 tryCount는 setter를 통해 값이 변경되어 getResult 메서드와 getTryCount 메서드를 통해 클래스 외부에서 get된다.

- `BridgeGame.js` 의 `pass()`함수는 유저의 움직임이 "U"이면 이중배열 [0]에 "O" 를 넣고 이중배열[1]에 " " 을 집어 넣는다.
  움직임이 "D"이면 이중배열[1]에 "O"를 집어넣고 이중배열[0]에 " "를 집어 넣는다.

- `BridgeGame.js` 의 `fail()`함수는 `pass()` 함수와 동일한 로직으로 "O" 대신 "X"를 이중배열에 각각 집어넣는다.

-`BridgeGame.js` 의 `move()`함수는 다리 배열의 원소와 유저의 움직임이 일치하면 pass() 함수를 호출하고 indexCount를 1 높인 뒤
true를 리턴한다.
일치하지 않는다면 fail() 함수를 호출하고 false를 리턴한다.

`BridgeGame.js` 의 `retry()` 함수는 유저가 "R"을 입력하면 true를 리턴하고 "Q"를 입력하면 false를 리턴한다.

`BridgeGame.js` 의 `reset()` 함수는 gameResult와 indexCount를 초기상태로 리셋하고 tryCount를 1 높인다.

`BridgeGame.js` 의 `getResult()`함수와 `getTryCount()`함수는 getter로써 gameResult와 tryCount를 controller에 내보내 그 값을 출력되게한다.

`BrideMaker.js` 의 `makeBridge()` 메서드는 size와 generateRandomNumber를 이용해 size 길이의 "U" ,"D" 가 담긴 랜덤 다리 배열을 리턴한다.

`BridgeRandomNumberGenerator.js`의 BridgeRandomNumberGenerator객체의 `generate()` 메서드는 0 또는 1을 랜덤으로 리턴한다.

`Validation.js` 의 `checkBridgeLength()` 메서드는 다리 길이에 대한 유저의 입력값 타당성 검사를 진행한다.

- 🚨 유저가 3~20 사이의 숫자를 입력했는지 확인
- 🚨 유저가 숫자만 입력 했는지 확인

`Validation.js` 의 `checkMove()` 메서드는 유저의 움직임에 대한 입력값 타당성 검사를 진행한다.

- 🚨 대문자로 작성했는지 확인
- 🚨 U 또는 D만 입력했는지 확인
- 🚨 U 또는 D 한 알파벳만 입력했는지 확인

`Validation.js` 의 `checkRetry()` 메서드는 유저의 재시작/종료 입력값 타당성 검사를 진행한다.

- 🚨 대문자로 작성했는지 확인
- 🚨 R 또는 Q만 입력했는지 확인
- 🚨 R 또는 Q 한 알파벳만 입력했는지 확인

### 👀 View 역할을 하는 `InputView.js`, `OutputView.js` 는 유저에게 입력값을 받고 출력해주는 역할을 한다.

`InputView.js`의 `readBridegeSize()` 메서드는 유저에게 다리 길이에 대한 입력값을 받아온다.

`InputView.js`의 `readMoving()` 메서드는 유저에게 다리를 움직일 칸에 대한 입력값을 받아온다.

`InputView.js`의 `readGameCommand()` 메서드는 유저에게 재시작/종료에 대한 입력값을 받아온다.

`OutputView.js`의 `lineBreak()` 메서드는 출력 문에서 한 줄 띄워주는 역할을 한다.

`OutputView.js`의 `bridgeGameStart()` 메서드는 게임 시작을 알리는 안내문구를 출력한다.

`OutputView.js`의 `convertToStandard()` 메서드는 배열을 출력 양식에 알맞게 전환시켜준다.

`OutputView.js`의 `printMap()` 메서드는 게임 결과를 출력 양식에 맞게 전환하여 유저에게 결과를 출력한다.

`OutputView.js`의 `printResult()` 메서드는 게임이 끝났을 때 최종 결과를 안내하는 멘트를 출력한다.

## MVC 패턴

![MVC 패턴 🗂](../img/MVCPattern.jpg)

## 게임 실행 결과

![BridgeGame 실행 😁](../img//BridgeGame.gif)

## 작성자

우아한 테크코스 프론트엔드 지원자 박상하 👨🏽‍💻

프리코스 기간 동안 많이 배워갈 수 있었습니다!! 이런 기회를 주셔서 정말 감사드립니다

그리고 고생많으셨습니다!! 🙇🏻‍♂️
