1. 게임 총체(App.js/play())

2. 게임 셋팅
* 2-1) 게임 길이 input 받기(App.js < InputView.js/readBridgeSize())
* 2-2) 게임 길이만큼 map 만들기 (Bridgegame.js < BridgeMaker.js/makeBridge(size,generateRandomNumber))

3. 게임 시도 횟수 (BridgeGame.js) 
* 3-1) 게임 횟수 count하기 
* 3-2) 현재 위치 기재된 변수를 0으로 만들기

4. user 전진 
* 4-1) 전진 input 받기(R/D) (App.js < InputView.js/readMoving())
* 4-2) 현 위치 다음 칸들 중 선택한 칸이 갈 수 있는지 확인하기 (App.js < BridgeGame/move)
* 4-3) 이동결과(map) print하기 (App.js < OutPutView.js/printMap())
 
5. 전진 여부에 따라 상황 나누기(전진 가능(도달 성공))
* 5-1) 도달 전/ 현재 위치를 +1하기 > 4번으로 돌아감 
* 5-2) 도달 완료/ 성공 메세지 print > 종료 (BridgeGame.js/success()  //  App.js < OutPutView.js/printResult())

5. 전진 여부에 따라 상황 나누기(전진 불가능(도달 실패))
* 5-1)  6으로 연결

6. 재시작/종료 묻기 
* 6-1) 재시작/종료 input받기 (InputView.js/readGameCommand())
* 6-2) 재시작 > 3으로 돌아감 (BridgeGame/retry)
* 6-3) 종료 > 종료
    

