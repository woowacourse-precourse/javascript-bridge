# 다리건너기

### App.js
- play()

### BridgeGame.js
- move() : 칸 이동 기능
- retry() : 게임 재시도

### BridgeMaker.js
- makeBridge(size, generateRandomNumber) : 다리모양을 리턴한다.
- @param {number} size 다리의 길이
- @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
- @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.

### BridgeRandomNumberGenerator.js
- generate() : 무작위 숫자 생성

### InputView.js
- readBridgeSize() : 다리 길이 입력 받기
- readMoving() : 사용자가 이동할 칸 입력받기
- readGameCommand() : 사용자의 게임 재시도 여부 입력 받기.

### OutputView.js
- printMap() : 현재까지 이동한 다리의 상태를 정해진 형식에 맞추어 출력
- printResult() : 게임의 최종 결과를 정해진 형식에 맞추어 출력

BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.

## JavaScript - Bridge 구현 기능 목록

### InputView 클래스
사용자 입력을 받는 부분은 InputView 클래스로 관리한다. 구현할 메소드 목록은 아래와 같다.


1. ```readBridgeSize()```: 다리의 길이를 입력받는다.
   - 예외처리 by ```validateBridgeSizeInput()``` throws ```IllegalArgumentException```
      - 숫자가 아닐 때 (문자, 기호, 공백)
      - 3 이상 20 이하의 숫자가 아닐 때

2. ```readMoving()```: 이동할 칸을 입력받는다.
   - 예외처리 by ```validateMoveCommand()``` throws ```IllegalArgumentException```
      - 문자 U 나 D 가 아닐 때

3. ```readGameCommand()```: 게임을 재시도할지 종료할지 입력받는다.
   - 예외처리 by ```validateGameCommand()``` throws ```IllegalArgumentException```
      - 문자 R 이나 Q 가 아닐 때


### OutputView 클래스
사용자에게 출력하여 보여주어야 하는 부분은 OutputView 클래스로 관리한다. 구현할 메소드 목록은 아래와 같다.


1. ```printMap()```: 사용자가 입력한 다리의 길이와 이동한 칸에 따라 전체 다리의 모습을 출력한다.
   위와 아래 다리를 따로 출력해주기 위해 ```printLine()``` 함수를 호출한다.
   - 파라미터:
      - result: 유저가 입력한 답에 대한 결과가 저장되어 있는 Result 클래스의 instance

2. ```printLine()```: 결과값에 기반하여 위 혹은 아래 다리의 모습을 출력한다.
   - 파라미터:
      - partialBridge: 위 혹은 아래 다리에 해당하는 결과값

3. ```printResult()```: 정답과 유저 입력값이 표기된 최종적인 다리의 모습을 출력해준다.
   - 파라미터:
      - result: 유저가 입력한 답에 대한 결과가 저장되어 있는 Result 클래스의 instance


### GameManager 클래스
게임 진행 시 input 과 output 을 관리한다. 구현할 메소드 목록은 아래와 같다.


1. ```generateBridgeAnswer()```: 유저에게 다리 길이를 입력받고 그에 따라 다리를 생성핟다.

2. ```getValidatedMoveCommand()```: 유저가 유효한 move command 값을 입력할 때까지 반복해서 입력을 받고, 유효한 값을 반환한다.

3. ```getValidatedGameCommand()```: 유저가 유효한 game command 값을 입력할 때까지 반복해서 입력을 받고, 유효한 값을 반환한다.

4. ```guessResult()```: 유저가 한 칸씩 답을 입력할 때마다 그 답을 출력해준다.
   - 파라미터:
      - result: 유저가 입력한 답에 대한 결과가 저장되어 있는 Result 클래스의 instance

5. ```finalResult()```: 유저가 게임에 성공하거나 quit 한 경우에 최종 결과를 출력해준다.
   - 파라미터:
      - result: 유저가 입력한 답에 대한 결과가 저장되어 있는 Result 클래스의 instance
      - isSuccess: 성공 여부
      - attempts: 시도 횟수


### Result 클래스
사용자가 입력한 정답과 그 결과를 저장하고 관리한다. 구현할 메소드 목록은 아래와 같다


1. ```calculateResult()```: 유저의 move command 와 실제 정답을 비교하여 같으면 "O", 다르면 "X" 를 반환한다.
   - 파라미터:
      - actualAnswer: 생성된 다리의 n번째 정답 요소
      - userMoveCommand: 유저가 입력한 정답

2. ```addResult()```: 유저가 입력한 move command 의 정답 여부에 따라 위의 다리와 아래 아래 다리에 그 결과값을 저장한다.
   - 파라미터:
      - moveCommand: 유저가 입력한 답
      - result: 유저가 입력한 답의 정답 여부

3. ```clearResult()```: 유저가 재시도할 경우에 저장되어 있는 결과값들을 초기화한다.



### BridgeGame 클래스
게임을 진행하는 것과 관련된 부분은 BridgeGame 클래스로 관리한다. 구현할 메소드는 아래와 같다.

1. ```start()```: 게임의 시작을 알리고 다리를 생성하여 저장한다.

2. ```play()```: 답을 입력받고 그 결과를 출력하는 과정을 게임이 종료될 때까지 반복한다.

3. ```move()```: 다리의 실제 정답과 유저 입력값을 비교하여 그 결과를 result 인스턴스에 저장해주고 그 result 를 반환한다.
   - 파라미터:
      - actualAnswer: 실제 다리의 정답 요소
      - userMoveCommand: 유저가 입력한 답

4. ```wrongGuess()```: 유저가 틀린 답을 입력했을 때 "R" 을 입력받으면 재시도를, "Q" 를 입력받으면 게임을 종료한다.

5. ```retry()```: 시도 횟수를 1 증가시키고 저장해두었던 결과값을 초기화 한 후 ```play()``` 를 호출한다.
6. ```quit()```: 게임을 종료하며 manager 의 ```finalResult()``` 를 호출하여 최종 결과를 출력한다.
   - 파라미터:
      - isSuccess: 다리 추론 성공 여부


### BridgeMaker 클래스

1. ```makeBridge()```: ```BridgeRandomNumberGenerator``` 클래스의 ```generate()``` 함수를 통해 사용자가 입력한 다리 길이 만큼의 다리를 생성한다.
   - 파라미터
      - size: 사용자가 입력한 다리 길이 
   