const { repair, succeed, fail } = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      expect(repair({ durability: 50 }).durability).toBe(100);
      expect(repair({ durability: 80 }).durability).toBe(100);
      expect(repair({ durability: -10 }).durability).toBe(100);
      expect(repair({ durability: 101 }).durability).toBe(100);
    });
  });

  describe("fail()", () => {
    it("restores durability to 100", () => {
      expect(fail({ durability: 50 }).durability).toBe(100);
      expect(fail({ durability: 80 }).durability).toBe(100);
      expect(fail({ durability: -10 }).durability).toBe(100);
      expect(fail({ durability: 101 }).durability).toBe(100);
    });
  });

  describe("succeed()", () => {
    it("restores durability to 100", () => {
      expect(succeed({ enhancement: 21 }).durability).toBe(20);
      expect(succeed({ enhancement: 20 }).durability).toBe(20);
      expect(succeed({ enhancement: -10 }).durability).toBe(-9);
      expect(succeed({ enhancement: 10 }).durability).toBe(11);
    });
  });
});
