# 미션 - 다리 건너기

## 기능 목록

- [x] 0과 1 중 무작위 값을 생성한다. - BridgeRandomNumberGenerator#generate()
- [ ] 특정 길이의 다리를 생성한다. - BridgeMaker#makeBridge()
- [ ] 특정 칸이 건널 수 있는지 확인한다. - Checker#checkSpaceCanCross()
- [ ] 다리 끝까지 건넜는지 판단한다. - Checker#checkCrossBridge()
- [ ] 게임 성공 여부를 판단한다. - Judge#judgeGameSuccess()
- [ ] 게임 시도 횟수를 센다. - Counter#countTry()
- [ ] 다리의 정보를 출력한다. - OutputView#printMap()
- [ ] 게임 결과를 출력한다. - OutputView#printResult()
- [ ] 게임 시작 메세지를 출력한다. - OutputView#printGameStart()

---

## 예외 상황

### BridgeMaker

- [ ] 숫자 이외의 값이 입력될 경우 - Validator#validateNumber()
- [ ] 3 미만 20 초과의 숫자가 입력될 경우 - Validator#validateNumberRange()

### BridgeGame

- [ ] 라운드마다 U와 D 이외의 값이 입력될 경우 - Validator#validateMove()
- [ ] 게임 재시작 시 R과 Q 이외의 값이 입력될 경우 - Validator#validateRetry()
