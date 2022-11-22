const { STEPS } = require('../utils/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
	#state = {
		answerBridge: null,
		trials: 1,
		isAlive: true,
		currentLocation: 0,
		currentUserBridge: {
			up: [],
			down: [],
		},
	};

	get state() {
		return this.#state;
	}

	setState(nextState) {
		this.#state = { ...this.#state, ...nextState };
	}

	/**
	 * 사용자가 칸을 이동할 때 사용하는 메서드
	 * <p>
	 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	move(directionInput) {
		const { answerBridge, currentLocation } = this.state;
		const isAnswer = directionInput === answerBridge[currentLocation];
		this.updateStatus(isAnswer);
		this.generateCurrentUserBridge(isAnswer, directionInput);
	}

	generateCurrentUserBridge(isAnswer, directionInput) {
		const answer = isAnswer ? 'ANSWER' : 'WRONG';
		const [newUp, newDown] = STEPS[answer][directionInput];

		this.setState({
			currentUserBridge: {
				up: [...this.state.currentUserBridge.up, newUp],
				down: [...this.state.currentUserBridge.down, newDown],
			},
		});
	}

	updateStatus(isAnswer) {
		const newCurrentLocation = (this.state.currentLocation += 1);
		const newSurvivalStatus = isAnswer ? true : false;

		this.setState({ currentLocation: newCurrentLocation, isAlive: newSurvivalStatus });
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	retry() {
		this.setState({
			trials: this.state.trials + 1,
			isAlive: true,
			currentLocation: 0,
			currentUserBridge: { up: [], down: [] },
		});
	}
}

module.exports = BridgeGame;
