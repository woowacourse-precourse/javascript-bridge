# 미션 - 다리 건너기
## 구현할 기능 목록
### App
- play - 게임을 시작

### InputView
- readBridgeSize - 다리의 길이를 입력, 예외처리
- readBridgeSizeReadLineHandler - 입력받은 길이로 다리를 만들고 저장

### BridgeMaker
- makeBridge - 다리를 만듬

### BridgeGame
- setBridge - 다리를 저장

### InputView
- readMoving - 동작을 입력받음
- readMovingReadLineHandler - 입력받은 동작을 move로 전달, 예외처리

### BridgeGame
- move - 전달받은 move를 바탕으로 insertMoveMap을 호출하고 printMap을 요청 다음 동작을 결정
- insertMoveMap  - move를 저장

### OutputView
- printMap - moveMap를 출력

### InputView
- readGameCommand - 재시도 여부를 입력
- readGameCommandReadLineHandler - 재시도 여부를 바탕으로 다음 작업을 처리, 예외처리

### OutputView
- printResult - 결과를 출력 종료

### BridgeGame
- retry - 다리 초기화, 도전횟수 1증가 
- addAttemptCount - 도전횟수 1증가

### OutputView
- printResult - 결과를 출력