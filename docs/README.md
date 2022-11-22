## 다리 건너기 게임 구현 문서

# 게임 흐름대로 짜보자

# APP

play
OutputView.outputGameStart 호출
InputView.readBridgeSize 호출 후 다리 사이즈 입력 값 받아오기
받아 와서 this.handleBridgeSize 호출

handleBridgeSize == readBridgeSize에서 받은 값
BridgeGame에 다리사이즈 전달
InputView.readMoving호출 했을때 handleBridgemove호출

handleBridgeMove == readMoving에서 받은 값

BridgeGame.move 호출 하고 진행조건, 다리 상태,사용자 상태, 총 시도 횟수를 리턴으로 받는다.

OutputView.printMap 에 다리 상태,사용자 상태 보내기

다리 상태,사용자 상태 맞고 안끝나면 InputView.readMoving 호출,
다시 handleBridgeMove 로 사용자 입력값 받기

다리 상태,사용자 상태 맞고 끝나면 OutputView.printResult 호출,
다리상태, 사용자 상태, 게임 성공여부, 총 시도 횟수 전달

다리 상태,사용자 상태 틀리면 InputView.readGameCommand 호출

handleBridgeCommand === readGameCommand에서 받은 값
값이 "R" = BridgeGame.retry 호출,
InputView.readMoveing
값이 "Q" = OutputView.printResult 호출 후 종료

# InputView

readBridgeSize
인자로 callback 받음
Console.readLine 호출 '다리의 길이를 입력해주세요.\n' 출력 후
인자로 받은 callback 전달

readMoving
인자로 callback 받음
Console.readLine 호출 '이동할 칸을 선택해주세요. (위: U, 아래: D)\n' 출력 후
인자로 받은 callback 전달

readGameCommand
인자로 callback 받음
Console.readLine 호출 '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)' 출력 후
인자로 받은 callback 전달

# BridgeGame

constructor
BridgeMaker.makeBridge에 다리 사이즈, BridgeRandomNumberGenerator.generate의 랜덤 값 보내기

BridgeMaker.makeBridge에서 생성한 다리를 변수에 지정,
유저 이동값 만들 Array 변수에 지정

move
사용자 이동값 받았음
이동 값 검증 U,D 맞는지 ,
유저 이동값 만들 Array 변수에 push
유저 이동값,다리 생성한 값 비교해서 결과 및 총 시도 횟수 리턴

retry
사용자 입력 값 = 빈 []
게임 재 시작값 +1

# BridgeMaker

BridgeGame에서 받은 다리 사이즈, 랜덤 값으로
다리 생성 해서 리턴
