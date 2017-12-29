/* global expect, fs, path, describe, it */

const day7 = require('../src/day7');

const input = fs.readFileSync(path.join(__dirname, '../puzzle-input/day7.txt'));
const input2 = fs.readFileSync(path.join(__dirname, '../puzzle-input/day7-2.txt'));

describe('Day 7', () => {
  it("should return 'tknk' when input is day7.txt", (done) => {
    expect(day7(input)).to.be.eq('tknk');
    done();
  });
  it("should return 'veboyvy' when input is day7-2.txt", (done) => {
    expect(day7(input2)).to.be.eq('veboyvy');
    done();
  });
});
