> ### 🚀 OutputView 객체 기능 구현       

<br>


- 배열로 지금 선택한 다리를 근거로, O, X 표시 하기.    

  ```js
  createPrintBridge(bridgeDirection, movingDirection, bigBridgeArr) {
    const bridgeArr = Array.from(Array(ROW), () => Array());
    if (bridgeDirection === movingDirection) {
      bridgeArr[UPANDDOWN[bridgeDirection]].push(SAME);
      bigBridgeArr.push(bridgeArr);
      return bigBridgeArr;
    }
    bridgeArr[UPANDDOWN[movingDirection]].push(DIFFERENT);
    bigBridgeArr.push(bridgeArr);
    return bigBridgeArr;
  }
  ```   
  <br>

  - 다리 방향과 선택한 방향이 맞으면 O, 틀리면 X를 배열에 넣는다.   

  ```js
  if (bridgeDirection === movingDirection) {
      bridgeArr[UPANDDOWN[bridgeDirection]].push(SAME);
      bigBridgeArr.push(bridgeArr);
      return bigBridgeArr;
    }
    bridgeArr[UPANDDOWN[movingDirection]].push(DIFFERENT);
    bigBridgeArr.push(bridgeArr);
  ```
  *UPANDDOWN객체는 if문을 줄이기 위한 객체*   

  <br>  


- 출력 양식에 맞추기 위한 반복문 구현   

  ```js
  printScript(bigBridgeArr) {
      let [upString, downString] = [['[ '], ['[ ']];
      bigBridgeArr.map((bridge) => {
        let [up, down] = [bridge[0].length === 1 ? bridge[0] : " ", bridge[1].length === 1 ? bridge[1] : " "];
        upString.push(...up, ' | ');
        downString.push(...down, ' | ');
      })
      upString.splice(-1, 1, ' ]');
      downString.splice(-1, 1, ' ]');
      return [upString, downString];
    }
  ```   
  *뛰어쓰기에 유의하며, 배열을 추가하였음.*     


<br>

- 위 두 메서드를 이용하여, 메인 메서드에 출력값 표시   

  ```js
  printMap(bridgeDirection, movingDirection, bigBridgeArr) {
    bigBridgeArr = this.createPrintBridge(bridgeDirection, movingDirection, bigBridgeArr);
    const [upString, downString] = this.printScript(bigBridgeArr);
    MissionUtils.Console.print(`${upString.join('')}`);
    MissionUtils.Console.print(`${downString.join('')}`);
    return bigBridgeArr;
  }
  ```   




