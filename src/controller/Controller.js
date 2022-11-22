const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { Console } = require('@woowacourse/mission-utils');
const { GAME_GUIDE_MESSAGES, COMMAND } = require('../utils/constants');
const {
	lengthInputValidation,
	directionInputValidation,
	commandInputValidation,
	validation,
} = require('../utils/validation');

class Controller {
	constructor() {
		this.model = new BridgeGame();
		this.view = {
			output: OutputView,
			input: InputView,
		};
	}

	start() {
		this.view.output.printMessage(GAME_GUIDE_MESSAGES.START);
		this.createBridge();
	}

	createBridge() {
		this.view.input.readBridgeSize(sizeInput => {
			const size = validation(sizeInput, lengthInputValidation, this.createBridge.bind(this));
			const answerBridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
			this.model.setState({ answerBridge });
			this.playRound();
		});
	}

	playRound() {
		this.view.input.readMoving(directionInput => {
			const direction = validation(directionInput, directionInputValidation, this.playRound.bind(this));
			if (!direction) return;
			this.model.move(direction);

			const { isAlive, currentLocation, answerBridge, currentUserBridge } = this.model.state;
			const isEnd = currentLocation === answerBridge.length;

			this.view.output.printMap(currentUserBridge);
			this.chooseNextStep(isAlive, isEnd);
		});
	}
	chooseNextStep(isAlive, isEnd) {
		if (!isAlive) {
			this.chooseRetryOrEnd();
		} else if (isEnd) {
			this.endGame();
		} else {
			this.playRound();
		}
	}

	chooseRetryOrEnd() {
		this.view.input.readGameCommand(commandInput => {
			const command = validation(commandInput, commandInputValidation, this.chooseRetryOrEnd.bind(this));

			if (command === COMMAND.QUIT) {
				this.endGame();
			} else if (command === COMMAND.RESTART) {
				this.model.retry();
				this.playRound();
			}
		});
	}

	endGame() {
		this.view.output.printResult(this.model.state);
		Console.close();
	}
}

module.exports = {
	Controller,
};
