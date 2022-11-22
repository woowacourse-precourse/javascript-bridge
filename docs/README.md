## 기능목록

### checklist

- [x] feat1. (`App`) `App.play()`하면 새로운 게임 시작
- [x] feat2. (`InputView`) 다리의 길이를 입력받는다.
  1. 3 이상 20 이하 숫자.
  2. 예외처리 - numberrange, type
- [x] feat3. (`BridgeMaker`) 입력 받은 다리 길이를 토대로 다리를 만든다.
- 1 attempt
  - [ ] feat4. (`BridgeGame`) 시도횟수 카운트
  - 1 round
    - [x] feat5. (`InputView`) 플레이어가 이동할 칸을 입력 받는다.
      1. `U` or `D`
      2. 예외처리 - U, D가 아니면 에러
    - [ ] feat6. (`BridgeGame`) 에서 `move()`로 이동시킴
    - [ ] feat7. (`OutputView`) `OutputView.printmap()`으로 결과 출력
    - [ ] feat8. (`BridgeGame`) 에서 결과 확인 - 게임이 끝났는지 안 끝났는지
- feat8의 결과에 따라서
  - [ ] feat9. 게임 오버 - `BridgeGame.retry()`
  - [ ] feat10. 게임 성공 - `BridgeGame.quit()`
  - [ ] feat11. 게임 계속 - 새 라운드 돌리기
- [ ] feat12. (`BridgeGame`) `BridgeGame.retry()`로 `BridgeGame.quit()`, ``BridgeGame.makeAttempt()` 인지 선택!
