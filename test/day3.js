/* global expect, describe, it */

const day3 = require('../src/day3');

describe('Day 3', () => {
  it('should return 0 steps when data from square at 1', (done) => {
    expect(day3(1)).to.be.eq(0);
    done();
  });
  it('should return 3 steps when data from square at 12', (done) => {
    expect(day3(12)).to.be.eq(3);
    done();
  });
  it('should return 2 steps when data from square at 23', (done) => {
    expect(day3(23)).to.be.eq(2);
    done();
  });
  it('should return 31 steps when data from square at 1024', (done) => {
    expect(day3(1024)).to.be.eq(31);
    done();
  });
  it('should return 1 steps when data from square at 2', (done) => {
    expect(day3(2)).to.be.eq(1);
    done();
  });
  it('should return 2 steps when data from square at 9', (done) => {
    expect(day3(9)).to.be.eq(2);
    done();
  });
  it('should return 3 steps when data from square at 10', (done) => {
    expect(day3(10)).to.be.eq(3);
    done();
  });
  it('should return 4 steps when data from square at 25', (done) => {
    expect(day3(25)).to.be.eq(4);
    done();
  });
  it('should return 5 steps when data from square at 26', (done) => {
    expect(day3(26)).to.be.eq(5);
    done();
  });
  it('should return 5 steps when data from square at 48', (done) => {
    expect(day3(48)).to.be.eq(5);
    done();
  });
  it('should return 6 steps when data from square at 49', (done) => {
    expect(day3(49)).to.be.eq(6);
    done();
  });
  it('should return 480 steps when data from square at 347991', (done) => {
    expect(day3(347991)).to.be.eq(480);
    done();
  });
});
