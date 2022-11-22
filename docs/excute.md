> ### 🚀 Excute 객체 기능 구현        

<br>

- 메인 실행 메서드를 가지고 있는 객체.   

<br>  


- `input` 메서드   
  - `InputView`객체의 다리 길이를 입력하는 메서드를 이용해, 처음 다리를 만들고 
    이후 `move` 메서드로 이어주는 역할    

  <br>

  ```js
  input() {
    InputView.readBridgeSize()
      .then((bridgeData) => {
        let cnt = 1;   // 시행횟수를 담을 객체
        bridge = bridgeData;
        tmpBridge = this.deepCopy(bridge);
        const bridgeArr = [];
        this.move(bridge, tmpBridge, bridgeArr, cnt);
      });
  }
  ```
  <br>

- `move`, `checkBridge` 메서드   
  - 사용자가 선택한 방향과 다리의 방향이 일치하는지 아닌지 확인하고,
    `retry`메서드로 갈지, 게임을 끝낼지 결정하게 되는 역할   

  <br> 

  ```js
  move(bridge, tmpBridge, bridgeArr, cnt) {
    InputView.readMoving()
    .then((movingDirectionData) => {
        console.log(cnt);
        this.checkBridge(bridge, tmpBridge, movingDirectionData, bridgeArr, cnt);
      });
  },
  ```

  <br>

  ```js
    if (tmpBridge.length === 0 && bool) return OutputView.printResult(bridgeArr, bool, cnt);
    if (bridgeDirection === movingDirection) return this.move(bridge, tmpBridge, bridgeArr, cnt);
  }
  ``` 

  *위의 if문을 통해서 계속해서 진행할지 끝낼지를 정하는 모습*    

  <br>

- `retry` 메서드   
  - 사용자에게 재시도를 할지 종료할지를 받고, 그에 따른 결과를 나타내는 역할   

  <br>
  
  ```js
  retry(bridge, bridgeArr, cnt) {
    InputView.readGameCommand()
      .then((retryAnswer) => {
        if (retryAnswer === "R") {
          const bridgeArr = [];
          tmpBridge = this.deepCopy(bridge);
          cnt++;
          return this.move(bridge, tmpBridge, bridgeArr,cnt);
        }
        return OutputView.printResult(bridgeArr, false, cnt);
      });
  }
  ```