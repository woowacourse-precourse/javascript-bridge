const MapMaker = require('../src/MapMaker');

describe('맵 메이커 테스트', () => {
	test('위 칸', () => {
		const move = 'U';
		const isCorrect = true;
		const map = MapMaker.makeMap(move, isCorrect);
		expect(map).toEqual('[ O ]\n[   ]');
	});
	test('위 칸 → 아래 칸', () => {
		const move = 'D';
		const isCorrect = true;
		const map = MapMaker.makeMap(move, isCorrect);
		expect(map).toEqual('[ O |   ]\n[   | O ]');
	});
	test('위 칸 → 아래 칸 → 위 칸(틀림)', () => {
		const move = 'U';
		const isCorrect = false;
		const map = MapMaker.makeMap(move, isCorrect);
		expect(map).toEqual('[ O |   | X ]\n[   | O |   ]');
	});
});
