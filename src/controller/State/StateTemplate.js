/** @abstract */
class StateTemplate {
	constructor(game) {
		this.game = game;
	}
	
	/** @abstract */
	run(command) {}
	
	/** @abstract */
	getInputHandler(command) {}

	next() {
		const input = this.getInputHandler();
		input((command) => {
			const isNext = this.run(command);
			if (isNext)
				this.game.next();
		})
	}
}

module.exports = StateTemplate;