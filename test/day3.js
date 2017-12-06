/* global expect, fs, path */

const day3 = require('../src/day3');

describe('Day 3', () => {
	it('should return 0 steps when data from square at 1', done => {
		expect(day3(1)).to.be.eq(0);
		done();
	});
	it('should return 3 steps when data from square at 12', done => {
		expect(day3(12)).to.be.eq(3);
		done();
	});
	it('should return 2 steps when data from square at 23', done => {
		expect(day3(23)).to.be.eq(2);
		done();
	});
	it('should return 31 steps when data from square at 1024', done => {
		expect(day3(1024)).to.be.eq(31);
		done();
	});
});