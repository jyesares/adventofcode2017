/* global expect, fs, path */

const day6 = require('../src/day6');


const input = fs.readFileSync(path.join(__dirname, "../puzzle-input/day6.txt"));
const input2 = fs.readFileSync(path.join(__dirname, "../puzzle-input/day6-2.txt"));

describe('Day 6', () => {
	it('should return 5 steps when data input is 0 2 7 0', done => {
		expect(day6(input)).to.be.eq(5);
		done();
	});
	it('should return 5042 steps when data input is day6-2 file', done => {
		expect(day6(input2)).to.be.eq(5042);
		done();
	});
});