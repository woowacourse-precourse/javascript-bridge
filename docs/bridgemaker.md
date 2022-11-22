> ### 🚀 BridgeMaker 객체 기능 구현       

<br>

- 랜덤한 수를 생성하는 객체를 이용하여, 랜덤한 다리를 생성하는 객체.   

<br>

```js
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = []; 
    for (let idx = 0; idx < size; idx++){
      const number = generateRandomNumber.generate();
      if (number === 1) {
        bridge.push("U");
        continue;
      }
      bridge.push("D");
    }
    return bridge;
  },
};
```    

<br>

```js
const number = generateRandomNumber.generate();
```
*`BridgeRandomNumberGenrate` 객체를 이용하여 랜덤한 1,0 수를 생성하는 부분*   

<br>

```js
if (number === 1) {
        bridge.push("U");
        continue;
      }
      bridge.push("D");
```   
*`if문`을 이용하여 최대한 짧게 표현한 코드 (더 생각해 보기)*   

