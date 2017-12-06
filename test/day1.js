const mocha = require('mocha');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const day1 = require('../src/day1');

const input = fs.readFileSync(path.join(__dirname, "../puzzle-input/day1.txt"));

describe('Day 1', () => {
	it('should return 3 when input is 1122', done => {
		expect(day1('1122')).to.be.eq(3);
		done();
	});
	it('should return 4 when input is 1111', done => {
		expect(day1('1111')).to.be.eq(4);
		done();
	});
	it('should return 0 when input is 1234', done => {
		expect(day1('1234')).to.be.eq(0);
		done();
	});
	it('should return 9 when input is 91212129', done => {
		expect(day1('91212129')).to.be.eq(9);
		done();
	});
	it('should return 1119 when input is puzzle-input for day 1 puzzle', done => {
		expect(day1(input.toString())).to.be.eq(1119);
		done();
	});
});