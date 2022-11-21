const Validator = {
	isNumber(number) {
		return !(/[^0-9]/.test(number));
	},
	isInRange(min, max, number) {
		return !(number < min || number > max);
	},
	
}

module.exports = Validator;
