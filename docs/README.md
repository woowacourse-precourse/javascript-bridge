# 문제 해결 과정



### Checking.js

- 입력값을 보고 예외를 발생 시킨다

```js
    // 기존 코드
		if (isNaN(bridge) === true) throw "[ERROR] 다리의 길이는 숫자로 입력해주세요"
	
		// 수정 코드
		bridgeNum (bridge) {
        if (isNaN(bridge) === true ) {
            MissionUtils.Console.print("[ERROR] 다리의 길이는 숫자로 입력해주세요")
            return "ERROR"
        }
    },
    
   // InputView.js
   if(Checking.bridgeNum(bridgeLength) === 'ERROR') { this.readBridgeSize() }
```

Throw 로 예외를 발생시킬 시 테스트 코드 오류가 생긴다.

-> ['"ERROR"'] 메시지를 출력 후 InputView.js 에서 ERROR 확인시 함수 재실행 하도록 설정



### 다리 출력 부분

```js
// App.js

  play() {
    OutputView.printStart()
    // 다리길이 입력받기
    let BRIDGE_LENGTH = InputView.readBridgeSize()
    // 다리 생성해야지
    let BRIDGE = BridgeMaker.makeTestBridge(BRIDGE_LENGTH)
    this.movePrint(BRIDGE,BRIDGE_LENGTH)
    
  }

// BrideMaker.js
  makeTestBridge(size){
    let BRIDGE = []
    let BRIDGE_U = []
    let BRIDGE_D = []
    for (let i = 0 ; i < size ; i ++) {
      this.bridgePush(BRIDGE_U,BRIDGE_D)
    }
    BRIDGE.push(BRIDGE_U, BRIDGE_D)
    return BRIDGE
  },
  
  bridgePush(u_array , d_array){
    const NUMBER = BridgeRandomNumberGenerator.generate()
    switch(NUMBER){
      case '1':
        u_array.push('U')
        d_array.push('X')
        return 
      case '0':
        u_array.push('X')
        d_array.push('D')
        return 
    }
  }
```

- 다리의 길이를 입력받고 랜덤으로 다리를 입력 받았습니다.
  - Number의 값에 따라 갈수 있는 곳은 'U' or 'D'
  - 갈 수 없는 곳은 'X' 로 표시하였습니다



```js
// App.js

	// 게임 시작
  movePrint(bridge,bridgeLength) {
    let BRIDGE = []
    const GAME = new BridgeGame()
    // 다리의 길이만큼 move 진행
    for (let i = 0 ; i < bridgeLength ; i++){
      OutputView.printMove()
      let USER_MOVE = InputView.readMoving()
      if (GAME.move(bridge,USER_MOVE,i) === 'X' ) return 		    this.xCase(BRIDGE,USER_MOVE,GAME.move(bridge,USER_MOVE,i))
      BRIDGE = this.printBridge(GAME.move(bridge,USER_MOVE,i))
    }
    this.finishGameSuccess(BRIDGE)
  }


  // true 출력
  printBridge(result) {
    BridgeBuild.makeBridge(result,this.BRIDGE_U,this.BRIDGE_D)
    return OutputView.printMap(this.BRIDGE_U,this.BRIDGE_D)
  }

  // retry
  xCase(bridge,userMove,result){
    bridge = this.askRetry(result,userMove)
    OutputView.printRetry()
    let USER_CHOICE = InputView.readGameCommand()
    this.failCase(USER_CHOICE,bridge)
  }

// BridgeGagme.js

  move(bridge, position , time) {
    if (position === 'U') {
      return this.checkBridge(bridge[0][time])
    }

    if (position === 'D'){
      return this.checkBridge(bridge[1][time])
    }
  }

  checkBridge(result){
    // X 인 경우 게임 종료 후 다시 할지 여부 파악
    if (result === 'X') {
      return 'X'
    }
    return result 
  }

// OutputView.js
  printMap(bridge_u , bridge_d) {  
    // bridge_u print
    let BRIDGE = []
    let BRIDGE_RESULT_U = this.printU(bridge_u)
    let BRIDGE_RESULT_D = this.printU(bridge_d)
    if (BRIDGE_RESULT_U === '[]') return "[ERROR]"
    MissionUtils.Console.print(`${BRIDGE_RESULT_U}`)

    // bridge_d print
    if (BRIDGE_RESULT_U === '[]') return "[ERROR]"
    MissionUtils.Console.print(`${BRIDGE_RESULT_D}`)

    BRIDGE.push(BRIDGE_RESULT_U , BRIDGE_RESULT_D)
    return BRIDGE

  },

  printU(status){
    let BRIDGE_TOTAL = '['
    let BRIDGE = ''
    let CNT = 0
    BRIDGE_TOTAL += this.stringBridge(status,BRIDGE,CNT)
    BRIDGE_TOTAL += ']'
    return BRIDGE_TOTAL
  },

  stringBridge(status,BRIDGE,CNT){
    for (let i of status ) {
      CNT += 1
      if (status.length === 1) return ` ${i} `
      if ( CNT === status.length ) { 
        BRIDGE += ` ${i} `
        continue
      } 
      BRIDGE += ` ${i} |`
    }
    return BRIDGE
  },
```

- TestCase의 출력부분과 일치시키기 위해 BRIDGE_TOTAL 이라는 변수를 출력 부분과 똑같은 형식으로

  저장하였습니다.

  - 현재 brige의 상태의 따라 길이가 1인 경우 , 마지막 인덱스인경우 , 중간 값인 경우로 나눠

    각각 다른 형태로 BRIDGE_TOTAL 변수에 더해지도록 설정 하였습니다.



### 출력문 리팩토링

> 기존 코드

```js
// App.js
      if (GAME.move(bridge,USER_MOVE,i) === 'X' ) return this.xCase(BRIDGE,USER_MOVE,GAME.move(bridge,USER_MOVE,i))
      BRIDGE = this.printBridge(GAME.move(bridge,USER_MOVE,i))
    }
    this.finishGameSuccess(BRIDGE)
  }

  // true 출력
	@@ -80,7 +80,7 @@ class App {
  failCase(userChoice,bridge){
    switch(userChoice){
      case 'Q':
        return this.finishGameFail(bridge)
      case 'R':
        this.TRY_TIME += 1
        return this.movePrint()
	@@ -92,16 +92,10 @@ class App {
    return OutputView.printMap(this.BRIDGE_U,this.BRIDGE_D)
  }

  finishGameSuccess(bridge){
    if (bridge.length === 0) return'[ERROR]'
    if (bridge === '[ERROR]') return '[ERROR]'
    OutputView.printResult('SUCCESS',bridge,this.TRY_TIME)
  }

  finishGameFail(bridge) {
    if (bridge.length === 0) return'[ERROR]'
    if (bridge === '[ERROR]') return '[ERROR]'
    OutputView.printResult('FAIL',bridge,this.TRY_TIME)
  }
}
    
// OutputView
printResult(RESULT , bridge , try_time) {
    if (RESULT === 'SUCCESS') { this.printSuccess(bridge,try_time) }
    if (RESULT === 'FAIL') {this.printFail(bridge,try_time)}
  },

  printSuccess(bridge,try_time){
    MissionUtils.Console.print("최종 게임 결과")
    MissionUtils.Console.print(`${bridge[0]}`)
    MissionUtils.Console.print(`${bridge[1]}`)
    MissionUtils.Console.print("게임 성공 여부: 성공")
    MissionUtils.Console.print(`총 시도한 횟수: ${try_time}`)

  },

  printFail(bridge,try_time){
    MissionUtils.Console.print("최종 게임 결과")
    MissionUtils.Console.print(`${bridge[0]}`)
    MissionUtils.Console.print(`${bridge[1]}`)
    MissionUtils.Console.print("게임 성공 여부: 실패")
    MissionUtils.Console.print(`총 시도한 횟수: ${try_time}`)
  },
```



> 변경 코드



```js
// App.js
      if (GAME.move(bridge,USER_MOVE,i) === 'X' ) return this.xCase(BRIDGE,USER_MOVE,GAME.move(bridge,USER_MOVE,i))
      BRIDGE = this.printBridge(GAME.move(bridge,USER_MOVE,i))
    }
    this.finishGame(BRIDGE,'성공')
  }

  // true 출력
	@@ -80,7 +80,7 @@ class App {
  failCase(userChoice,bridge){
    switch(userChoice){
      case 'Q':
        return this.finishGame(bridge,'실패')
      case 'R':
        this.TRY_TIME += 1
        return this.movePrint()
	@@ -92,16 +92,10 @@ class App {
    return OutputView.printMap(this.BRIDGE_U,this.BRIDGE_D)
  }

  finishGame(bridge,result) {
    if (bridge.length === 0) return'[ERROR]'
    if (bridge === '[ERROR]') return '[ERROR]'
    OutputView.printResult(result,bridge,this.TRY_TIME)
  }
}
    
// OutputView.js
  printResult(RESULT , bridge , try_time) {
    MissionUtils.Console.print("최종 게임 결과")
    MissionUtils.Console.print(`${bridge[0]}`)
    MissionUtils.Console.print(`${bridge[1]}`)
    MissionUtils.Console.print(`게임 성공 여부: ${RESULT}`)
    MissionUtils.Console.print(`총 시도한 횟수: ${try_time}`)
  },
```

- 기존 코드의 출력문에서는 게임 결과에 따라 '성공' || '실패' 로 나누어서 출력문을 따로 설정하였습니다.

  그 결과 코드가 중복이 되었고 재사용성이 떨어지는 단점을 확인하였습니다

  게임의 결과를 변수로 두어 사용함으로써, 나누어져있던 코드를 합치고 재사용성을 키울 수 있었습니다.





# 기능 테스트 만들기

```js
// - 기존 코드 성공 확인


test("기능 테스트 2", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "1", "1"]);
    mockQuestions(["3", "U", "U", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O | O | O ]",
      "[   |   |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O | O | O ]", "[   |   |   ]");
  });
```

```js
// 게임 성공 실패 테스트

test("기능 테스트 3", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "1", "1"]);
    mockQuestions(["3", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O | X ]",
      "[   |   ]",
      "게임 성공 여부: 실패",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });
```

