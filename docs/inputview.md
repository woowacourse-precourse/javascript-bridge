> ### 🚀 InputView 객체 기능 구현      

<br>



- 다리의 길이를 입력 받아 다리 생성.    
<br> 

  ```js
    readBridgeSize() {
      return new Promise(resolve => {
      MissionUtils.Console.readLine(`${Script.BRIDGELENGTHINPUT}\n`, (answer) => {
        const bridge = BridgeMaker.makeBridge(answer, BridgeRandomNumberGenerator);
        resolve(bridge);
      })
    })
  }
  ```
  *다리의 길이를 입력받고, 그 길이로 BridgeMaker 객체를 이용해 다리를 생성.*  
  

<br>   


- 이동할 칸을 입력받는 메서드   
<br>

  ```js
  readMoving() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine(`\n${Script.CHOICEBRIDGE}\n`, (movingDirection) => {
        resolve(movingDirection);
      })
    })
  }
  ```   



<br>

- 다시 게임을 할지 말지 물어보는 메서드
<br>


  ```js
  readGameCommand() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine(`${Script.RETRY}\n`, (answer) => {
        resolve(answer);
      })
    })
  },
  ```   

  *세 메서드 모두 Promise를 이용하였다.*    

  
  


