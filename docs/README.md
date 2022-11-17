# 게임 진행 순서

1. 게임 시작 문구 
  - "다리 건너기 게임을 시작합니다."

2. 다리 길이 입력
  - "다리의 길이를 입력해주세요."
  - inputView.readBridgeSize()
  - 3 이상 20 이하가 아니면 예외처리
  - "[ERROR] 3 이상 20 이하인 숫자를 입력해주세요."

3. 다리 생성
  - BridgeRandomNumberGenerator.generate()
  - BridgeMaker.makeBridge()

4. 이동할 칸 선택
  - 이동할 칸을 선택해주세요. (위: U, 아래: D)
  - InputView.readMoving()
  - BridegeGame.move()
  - OutputView.printMap()
  - U 또는 D가 아닐시 예외처리
  - "[ERROR] U(위) 또는 D(아래)를 입력해주세요."

5. 틀렸을 때
  - 게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
  - R 또는 Q가 아닐시 예외처리
  - "[ERROR] R(재시도) 또는 Q(종료)를 입력해주세요."
  - InputView.readGameCommand()
  - 재시도 시 BridgeGame.retry()

6. 맞았을 때
  - OutputView.printResult()  
