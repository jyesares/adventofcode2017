const mocha = require('mocha');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const day2 = require('../src/day2');

const input = fs.readFileSync(path.join(__dirname, "../puzzle-input/day2.txt"));

describe('Day 2', () => {
	it('should return 18 when input is ["5195","753","2468"]', done => {
		expect(day2("5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8")).to.be.eq(18);
		done();
	});
	it('should return 45351 when input is puzzle-input file for day2', done => {
		expect(day2(input.toString())).to.be.eq(45351);
		done();
	});
	
});