const PLAYER_STATE = {
  NEXT: "NEXT",
  FINISH: "FINISH",
  RETRY: "RETRY",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
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

module.exports = { PLAYER_STATE, INPUT_CATCH_FN, INPUT_TRY_FN, RETRY_FN };
