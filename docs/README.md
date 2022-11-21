## 구현 기능 목록

- [ ] 프로그램 시작
    App.play()

- [ ] 다리 생성
    - [ ] 다리 길이에 따른 무작위 다리 생성
        BridgeMaker.makeBridge()
    - [x] 랜덤 숫자 추출
        BridgeRandomNumberGernerator.generate()

- [ ] 게임 시작
    - [ ] 플레이어 이동
        BridgeGame.move()
    - [ ] 이동 성공 여부 판정

- [ ] 게임 재시작
    - [ ] 게임 재시작 여부 판정
    - [ ] 게임 재시작
        BridgeGame.retry()

- [ ] 검증
    - [ ] 다리 길이 입력
    - [ ] 이동할 칸 입력
    - [ ] 게임 재시작 여부 입력

- [ ] 출력
    - [ ] 게임 시작 메시지
    - [ ] 이동 결과
        - OutputView.printMap()
    - [ ] 최종 게임 결과
        - OutputView.printResult()
        - [ ] 최종 이동 결과
        - [ ] 게임 성공 여부
        - [ ] 총 시도한 횟수

- [ ] 입력
    - [ ] 다리 길이
        - InputView.readBridgeSize()
    - [ ] 이동할 칸
        - InputView.readMoving()
    - [ ] 게임 재시작 여부
        - InputView.readGameCommand()