/* global expect, fs, path */

const day4 = require('../src/day4');


const input = fs.readFileSync(path.join(__dirname, "../puzzle-input/day4.txt"));

describe('Day 4', () => {
	it('should return 386 valid parapharasses for the data input', done => {
		expect(day4(input.toString().split('\n'))).to.be.eq(386);
		done();
	});
});