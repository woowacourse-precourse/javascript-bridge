const {
  createPlayerState,
  PLAYER_STATE,
} = require("../src/presenter/stringsPresenter");

describe("Player State 테스트", () => {
  test.only("Player State 생성 테스트", () => {
    const playerState = createPlayerState(true, true);
    expect(playerState).toBe(PLAYER_STATE.SUCCESS);
  });
});
