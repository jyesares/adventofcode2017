/* global expect, fs, path, describe, it */

const day5 = require('../src/day5');

const input = fs.readFileSync(path.join(__dirname, '../puzzle-input/day5.txt'));
const input2 = fs.readFileSync(path.join(__dirname, '../puzzle-input/day5-2.txt'));

describe('Day 5', () => {
  it('should return 5 steps when data input is 0 3 0 1 -3', (done) => {
    expect(day5(input)).to.be.eq(5);
    done();
  });
  it('should return 358131 steps when data input is day5-2 file', (done) => {
    expect(day5(input2)).to.be.eq(358131);
    done();
  });
});
