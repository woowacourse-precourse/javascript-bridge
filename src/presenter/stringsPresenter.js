const PLAYER_STATE = {
  RETRY: "retry",
  CONTINUE: "continue",
  SUCCESS: "success",
};
const PLAYER_STATE_ARRAY = [
  PLAYER_STATE.RETRY,
  PLAYER_STATE.CONTINUE,
  PLAYER_STATE.RETRY,
  PLAYER_STATE.SUCCESS,
];

const createPlayerState = (isFinish, isMove) => {
  const state = (isFinish << 1) | isMove;
  return PLAYER_STATE_ARRAY[state];
};

const PLAYER_STATE_FN = {
  retry(gamePresenter) {
    gamePresenter.getGameCommand();
  },
  continue(gamePresenter) {
    gamePresenter.getPlayerMove();
  },
  success(gamePresenter) {
    gamePresenter.quit();
  },
};

const INPUT_TRY_FN = {
  size(gamePresenter, size) {
    gamePresenter.createBridge(size);
  },
  moving(gamePresenter, selectedMove) {
    gamePresenter.checkmove(selectedMove);
  },
  gameCommand(gamePresenter, retry) {
    gamePresenter.checkRetryInput(retry);
  },
};

const INPUT_CATCH_FN = {
  size(gamePresenter) {
    gamePresenter.getBridgeSize();
  },
  moving(gamePresenter) {
    gamePresenter.getPlayerMove();
  },
  gameCommand(gamePresenter) {
    gamePresenter.getGameCommand();
  },
};

const RETRY_FN = {
  R(gamePresenter) {
    gamePresenter.bridgeGameModel.retry();
  },
  Q(gamePresenter) {
    gamePresenter.quit();
  },
};

module.exports = {
  PLAYER_STATE,
  createPlayerState,
  PLAYER_STATE_FN,
  INPUT_CATCH_FN,
  INPUT_TRY_FN,
  RETRY_FN,
};
