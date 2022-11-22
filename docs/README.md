# 미션 - 다리 건너기

## 🚀 기능 구현 목록
[ ] BridgeGame.js 구현

​	[ ] move 구현

​	[ ] retry 구현

[ ] BridgeMaker.js 구현

​	[ ] makeBridge 구현

[ ] InputView.js 구현

​	[ ] readBridgeSize 구현

​	[ ] readMoving 구현

​	[ ] readGameCommand 구현

[ ] OutputView.js 구현

​	[ ] printMap 구현

​	[ ] printResult 구현



## 기능 구현 방향

이번 과제는 미리 구조가 짜여있어 해당 구조에 맞게 코딩을 하면 된다.

각 클래스나 객체의 의존성 또한 요구사항에 들어 있어 이 부분을 잘 고려해야겠다. 아마 그동안 다른 지원자 분들이 말씀하신 MVC 패턴을 적용한 것이 아닌가 생각해본다.

* "`BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다." 는 내용에 따라 App.js에서 호출을 하거나 다른 파일 내에서 호출 해야할 것 같다.

우선 가장 쉬운 InputView를 구현한 뒤에 이미 구현된 BridgeRandomNumberGenerator를 사용하게될 BridgeMaker를 구현해야겠다.

