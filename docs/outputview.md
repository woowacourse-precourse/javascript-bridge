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


<br>


- 마지막 최종 결과 출력을 위한 메서드   

  ```js
  printResult(bridgeArr, bool, cnt) {
    const [upString, downString] = this.printScript(bridgeArr);
    MissionUtils.Console.print(`${Script.RESULT}`);
    MissionUtils.Console.print(`${upString.join('')}`);
    MissionUtils.Console.print(`${downString.join('')}\n`);
    MissionUtils.Console.print(`${Script.BOOL}${BOOLEAN[bool]}`);
    MissionUtils.Console.print(`${Script.CNT}${cnt}`);
    MissionUtils.Console.close();
  },
  ```
  *최종 결과(실패, 성공)을 담고있는 bool과 시행횟수를 담고있는 cnt를 이용*   
  

<br>

- 최대한 `if문`을 줄이기 위한 객체   

  ```js
  const UPANDDOWN = {
  D: 1,
  U: 0
  }
  const BOOLEAN = {
    true: "성공",
    false: "실패"
  }
  ```




