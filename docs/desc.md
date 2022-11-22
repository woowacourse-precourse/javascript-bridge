## 클래스

### App - 다리 건너기 게임 컨트롤러

- play : 다리 건너기 게임 시작
- initBridge : 다리 길이 입력, 입력된 길이의 랜덤 다리 생성
- start(생성 다리) : 다리 건너기 게임 객체 생성, 이동 입력 요청
- movePlayer : 플레이어 이동 위치 입력, 이동 결과를 확인해 다음 결과 예측, 이동 경로 출력
- guessNext : 다음 액션 실행 (플레이어 이동, 게임 재시작, 게임 종료)
- guessRetry : 게임 재시작 커멘드 입력후 해당하는 액션 실행
- retry : 다리 건너기 게임 재시작
- end : 다리 건너기 게임 종료, 최종 결과 출력

### InputView

- readBridgeSize: 다리 길이 입력
- readMoving : 이동할 칸 입력
- readGameCommand : 게임 재시작 여부 입력
- readLine(입력 메시지, 입력 값으로 실행할 콜백 함수, 검증 함수) : 입력값을 검증 후에 검증에 실패하면 재입력, 그렇지 않으면 콜백 함수 실행

### OutputView

- printMap: 다리 경로 출력
- printResult : 최종 결과 출력 (최종 다리 경로, 게임 성공 여부, 시도 횟수)

### BridgeGame

- move(이동 위치) : 해당 위치로 이동한 후, 이동 결과 반환
- retry : 다리 건너기 게임 재시작, 시도 횟수 증가, 경로 초기화
- getIsClear : 다리 건너기 게임 성공 여부 반환
- getResult : 다리 건너기 결과 반환 (시도횟수, 이동한 경로, 게임 성공여부)

### Bridge

- getIsMoveable(이동 경로) : 해당 경로로 이동 가능 여부 반환
- getIsClear(이동 경로) : 해당 경로로 이동하였을 때, 게임 성공 여부 반환
- getMoveResult(이동 경로) : 이동 결과 반환 (게임 성공, 이동 가능, 이동 실패)

### Path

- move(이동 위치, 이동 가능여부) : 경로 업데이트
- #mark(이동 가능 여부) : 현재 위치에, 이동 가능 여부에 따라 'O', 'X'를 마킹
- #getCurrentPath() : 현재 위치 반환, paths의 마지막 요소
- #markU('O' | 'X') : 위칸 이동 경로 마킹
- #markD('O' | 'X') : 아래칸 이동 경로 마킹

### BridgeMaker

- makeBridge(다리 길이, 랜덤 값 생성 함수) : 'U','D'로 이루어진 다리 생성해 반환

### BridgeRandomNumberGenerator

- generate() : Random 값 추출
