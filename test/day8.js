/* global expect, fs, path, describe, it */

const day8 = require('../src/day8');

const input = fs.readFileSync(path.join(__dirname, '../puzzle-input/day8.txt'));
const input2 = fs.readFileSync(path.join(__dirname, '../puzzle-input/day8-2.txt'));

describe('Day 8', () => {
  it('should return 1 when input is day8.txt', (done) => {
    expect(day8(input)).to.be.eq(1);
    done();
  });
  it('should return 7787 when input is day8-2.txt', (done) => {
    expect(day8(input2)).to.be.eq(7787);
    done();
  });
});
