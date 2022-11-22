/* eslint-disable import/no-useless-path-segments */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
const { Console } = require('@woowacourse/mission-utils');
const { BridgeSize, Moving, GameCommand, Map } = require('../model');
const { InputView, OutputView } = require('../view');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGameControl {
  #inputView;

  #outputView;

  #bridgeGame;

  #entireMap;

  #map;

  constructor() {
    const inputView = Object.create(InputView);
    this.#inputView = inputView;
    const outputView = Object.create(OutputView);
    this.#outputView = outputView;
    const bridgeGame = new BridgeGame();
    this.#bridgeGame = bridgeGame;
  }

  recoverMap() {
    const upMap = this.#entireMap
      .split('\n')[0]
      .replace(/\[|\]|\s/g, '')
      .split('|');
    this.#map.setRecoverMap(upMap);
  }

  bridgeSizeCallback(input) {
    const bridgeSize = new BridgeSize(input);
    const bridgeMaker = Object.create(BridgeMaker);
    this.#entireMap = bridgeMaker.makeBridge(bridgeSize.getBridgeSize(), BridgeRandomNumberGenerator);

    const map = new Map(bridgeSize.getBridgeSize());
    this.#map = map;
    this.recoverMap();
    this.move();
  }

  make() {
    this.#inputView.readBridgeSize(this.bridgeSizeCallback.bind(this));
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  movingCallback(input) {
    const moving = new Moving(input);
    this.#bridgeGame.importMap(this.#map);

    this.#bridgeGame.move();
    this.#bridgeGame.matchResult(moving.getMoving());

    this.#outputView.printMap(this.#map, this.#bridgeGame.getCurrentPosition());
    // this.#outputView.printMap(moving.getMoving(), this.#bridgeGame.getCurrentPosition());
    this.retry();
  }

  move() {
    this.#inputView.readMoving(this.movingCallback.bind(this));
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    const gameCommandCallback = (input) => {
      const gameCommand = new GameCommand(input);
      Console.print(gameCommand.getGameCommand());
      Console.close();
    };
    this.#inputView.readGameCommand(gameCommandCallback);
  }
}

module.exports = BridgeGameControl;
