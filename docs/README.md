## 구현해야할 기능목록

- InputView (InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.)
- OutputView
- BridgeGame (BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.)
- BridgeMaker 

  1. 자동으로 생성할 다리 길이를 사용자에게 입력받는다 (3 이상 20 이하의 숫자를 입력 가능 그외 예외처리 )
  2. 다리가 생성되었는지 확인한다
  3. 라운드 마다 플레이어가 이동할 칸을 입력 받는다 ( 'D' / 'U' 문자열만 입력 가능 그외 예외처리)
  4. 입력 받은 값으로 현재 라운드 성공,실패 여부 판단
  5. 성공 실패 값에 따라 게임 결과 출력
---

## 도메인 로직에 단위 테스트를 구현 필요
단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외


