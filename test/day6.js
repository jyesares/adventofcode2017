/* global expect, fs, path, rewire */

const day6 = require("../src/day6");

const equals = rewire("../src/day6").__get__("equals");
const existsCycle = rewire("../src/day6").__get__("existsCycle");
const redistribute = rewire("../src/day6").__get__("redistribute");

const input = fs.readFileSync(path.join(__dirname, "../puzzle-input/day6.txt"));
const input2 = fs.readFileSync(
  path.join(__dirname, "../puzzle-input/day6-2.txt")
);

describe("Day 6", () => {

  it("should return 5 steps when data input is 0 2 7 0", done => {
    expect(day6(input)).to.be.eq(5);
    done();
  });
  it("should return 5042 steps when data input is day6-2 file", done => {
    expect(day6(input2)).to.be.eq(5042);
    done();
  }).timeout(3000);

  describe("#equals", () => {
    it("should return true when 2 arrays are equals", done => {
      expect(equals([1, 2, 3, 4], [1, 2, 3, 4])).to.be.eq(true);
      done();
    });
    it("should return false when 2 arrays are differents", done => {
      expect(equals([1, 2, 3, 4], [1, 2, 3, 5])).to.be.eq(false);
      done();
    });
  });

  describe("#existsCycle", () => {
    it("should return true when exists a cycle", done => {
      expect(existsCycle([[1, 2, 3, 4]], [1, 2, 3, 4])).to.be.eq(true);
      done();
    });
    it("should return false when does not exist a cycle", done => {
      expect(existsCycle([[1, 2, 3, 4]], [1, 2, 3, 5])).to.be.eq(false);
      done();
    });
  });

  describe("#redistribute", () => {
    it("should return 2 4 1 2 when array input is 0 2 7 0", done => {
      expect(redistribute([0, 2, 7, 0]).toString()).to.be.eq(
        [2, 4, 1, 2].toString()
      );
      done();
    });
    it("should return 3 1 2 3 when array input is 2 4 1 2", done => {
      expect(redistribute([2, 4, 1, 2]).toString()).to.be.eq(
        [3, 1, 2, 3].toString()
      );
      done();
    });
  });
});
