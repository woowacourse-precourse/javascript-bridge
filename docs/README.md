# 미션 - 다리 건너기

## 🚀 기능 구현 목록
[x] BridgeGame.js 구현
	[x] move 구현
		[x] 인자로 moving을 받는다
		[x] 해당 부분을 실제 다리와 비교한다
		[x] 비교한 것에 따라 `'O'`, `'X'`, `' '`의 경우와 윗줄 아랫줄로 나누어 저장한다
		[x] 발판이 몇 번째인지 정보를 갱신한다
		[x] 반환 값으로 존재하는 발판을 선택했는지, 발판을 고른 결과를 윗줄 아랫줄로 나누어 반환한다
	[x] 현재 진행상황을 저장하는 필드를 가지고 있다
		[x] 다리의 윗줄, 아랫줄 따로 저장한다
		[x] 정답 다리 정보도 가지고 있다
		[x] 시도 횟수 정보도 가지고 있다
		[x] 현재 몇 번째 발판인지 정보도 가지고 있다
	[x] retry 구현
		[x] 인자로 command를 받는다
		[x] 다시 시도하면 현재 진행상황을 지우고 시도한 회수를 1회 추가한다
		[x] 재시작을 하는지 하지 않는지 boolean 값으로 반환한다

[x] BridgeMaker.js 구현
	[x] makeBridge 구현

[x] InputView.js 구현
	[x] readBridgeSize 구현
	[x] readMoving 구현
	[x] readGameCommand 구현

[ ] OutputView.js 구현
	[ ] printMap 구현
	[ ] printResult 구현

[ ] Constants.js 구현
	[x] MESSAGE 구현
	[x] PAD 구현
	[x] COMMAND 구현

[ ] Validation.js 구현
	[ ] isValidBridgeSize 구현
	[ ] isValidMoving 구현
	[ ] isValidGameCommand 구현

## 기능 구현 방향

이번 과제는 미리 구조가 짜여있어 해당 구조에 맞게 코딩을 하면 된다.

각 클래스나 객체의 의존성 또한 요구사항에 들어 있어 이 부분을 잘 고려해야겠다. 아마 그동안 다른 지원자 분들이 말씀하신 MVC 패턴을 적용한 것이 아닌가 생각해본다.

* "`BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다." 는 내용에 따라 App.js에서 호출을 하거나 다른 파일 내에서 호출 해야할 것 같다.

우선 가장 쉬운 InputView를 구현한 뒤에 이미 구현된 BridgeRandomNumberGenerator를 사용하게될 BridgeMaker를 구현해야겠다.

메시지들을 상수화 하기로 결정하고 Constants.js 파일을 만들었음

InputView와 OutputView간에 의존성을 없애기 위해 유효성 검사는 App에서 진행하기로 하였음

문제는 BridgeGame을 어떻게 구현하는 것인가 인데 생각하기 어려우니 잘게 쪼개서 생각해보도록 함

* 우선 위인지 아래인지 입력을 받는다 -> 이건 inputView에서 진행
* 입력을 받으면 해당 부분을 저장한다 -> move함수에 인자로 'U', 'D'를 받도록 하자
* 저장을 하기 위해선 현재까지 진행한 상황을 저장하는 필드가 있어야 한다 -> 이걸 추가하자

>  그런데 여기서 출력을 또 생각해보면 출력에는
>
> * 윗줄 아랫줄 계산해서 각각 출력해야 된다
> * 그리고 마지막은 틀렸는지 안 틀렸는지도 확인해야한다
> * 그럼 현재 진행 상황을 윗줄, 아랫줄 따로 저장하도록 필드를 만들면 되겠다

* BridgeGame이 다리 건너기 게임을 관리하는 클래스 이므로, 정답 다리 정보도 갖고 있는 것이 좋겠다
* 그럼 constructor를 추가해서 아예 여기서 다리를 생성하도록 하자 -> 그럼 contructor에 인자로 다리의 길이를 받자
* 가는 길이 틀려서 retry하게 되면 현재 기록을 지우고 시도한 회수를 1 추가하는 것으로 하자

