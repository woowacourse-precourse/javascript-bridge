const MapMaker = {
	up: [],
	down: [],
	makeMap(move, isCorrect, isFinish = false) {
		if (isCorrect && isFinish) return this.styleMap();
		if (move === 'U') this.fillUp(isCorrect);
		if (move === 'D') this.fillDown(isCorrect);
		const map = this.styleMap();
		if (!isCorrect) this.clean();
		return map;
	},
	fillUp(isCorrect) {
		const fill = isCorrect ? 'O' : 'X';
		this.up.push(fill);
		this.down.push(' ');
	},
	fillDown(isCorrect) {
		const fill = isCorrect ? 'O' : 'X';
		this.up.push(' ');
		this.down.push(fill);
	},
	styleMap() {
		return this.closeBracket(this.up) + '\n' + this.closeBracket(this.down);
	},
	closeBracket(map) {
		return '[ ' + map.join(' | ') + ' ]';
	},
	clean() {
		this.up = this.up.slice(0, -1);
		this.down = this.down.slice(0, -1);
	},
};

module.exports = MapMaker;
