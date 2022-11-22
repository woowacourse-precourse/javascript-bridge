## 구현 기능 목록

- [x] 프로그램 시작
    App.play()

- [x] 다리 생성
    - [x] 다리 길이에 따른 무작위 다리 생성
        BridgeMaker.makeBridge()
    - [x] 랜덤 숫자 추출
        BridgeRandomNumberGernerator.generate()

- [x] 게임 시작
    - [x] 플레이어 이동
        BridgeGame.move()
    - [x] 이동 성공 여부 판정

- [x] 게임 재시작
    - [x] 게임 재시작 여부 판정
    - [x] 게임 재시작

- [x] 검증
    - [x] 다리 길이 입력
    - [x] 이동할 칸 입력
    - [x] 게임 재시작 여부 입력

- [x] 출력
    - [x] 게임 시작 메시지
    - [x] 이동 결과
        - OutputView.printMap()
    - [x] 최종 게임 결과
        - OutputView.printResult()
        - [x] 최종 이동 결과
        - [x] 게임 성공 여부
        - [x] 총 시도한 횟수

- [x] 입력
    - [x] 다리 길이
        - InputView.readBridgeSize()
    - [x] 이동할 칸
        - InputView.readMoving()
    - [x] 게임 재시작 여부
        - InputView.readGameCommand()