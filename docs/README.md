## 기능 요구사항

1. BridgeGame
   - InputView, OutputView 사용 금지
2. BridgeMaker
   - 프로퍼티 추가 금지
   - 파일 경로 변경 금지
   - 타입 변경 금지
3. BridgeRandomNumberGenerator
4. InputView
   - 여기서만 입력 가능
5. OutputView
   - 출력 형식 지키기

- 함수 10라인 이내
- 파라미터 최대 3가지

---

6. BridgeUtil
   -BridgeGame class와 input / output 간 매개하는 함수들 정의 -유저 입력에 따른 결과 유효성 검사하는 함수 추가

## 예외사항처리

1. 사용자의 잘못된 입력
   1. 다리 생성 숫자(3~20 숫자)
   2. 라운드마다 입력(U or D)
   3. 게임 재시작 / 종료(R or Q)
