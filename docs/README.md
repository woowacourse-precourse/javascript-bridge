# 미션 - 다리 건너기

## 기능 목록

- [x] 0과 1 중 무작위 값을 생성한다. - BridgeRandomNumberGenerator#generate()
- [x] 특정 길이의 다리를 생성한다. - BridgeMaker#makeBridge()
- [x] 1, 0을 각각 U, D로 변환한다. - Converter#convertToUpDown()
- [x] 특정 칸이 건널 수 있는지 확인한다. - Checker#checkSpaceCanCross()
- [x] 다리 끝까지 건넜는지 판단한다. - Checker#checkCrossBridge()
- [ ] 게임 성공 여부를 판단한다. - Judge#judgeGameSuccess()
- [ ] 게임 시도 횟수를 센다. - Counter#countTry()
- [ ] 이동 정보를 다리 결과로 변환한다. - Converter#convertToBridgeMap()
- [ ] 다리의 정보를 출력한다. - OutputView#printMap()
- [ ] 게임 결과를 출력한다. - OutputView#printResult()
- [x] 게임 시작 메세지를 출력한다. - OutputView#printGameStart()
- [x] 다리의 길이를 입력받고 전달한다. - InputView#readBridgeSize()
- [x] 사용자가 이동할 칸을 입력받고 전달한다. - InputView#readMoving()
- [x] 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받고 전달한다. - InputView#readGameCommand()

---

## 예외 상황

### BridgeMaker

- [x] 숫자 이외의 값이 입력될 경우 - Validator#validateNumber()
- [x] 3 미만 20 초과의 숫자가 입력될 경우 - Validator#validateNumberRange()

### BridgeGame

- [x] 라운드마다 U와 D 이외의 값이 입력될 경우 - Validator#validateMove()
- [x] 게임 재시작 시 R과 Q 이외의 값이 입력될 경우 - Validator#validateRetry()
