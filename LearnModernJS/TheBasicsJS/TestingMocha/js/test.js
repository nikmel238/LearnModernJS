/* global describe, it, assert, pow */

describe('pow', () => {
  describe('возводит x в степень 3', () => {
    function makeTest(x) {
      const expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, () => {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x += 1) {
      makeTest(x);
    }
  });

  it('для отрицательных n возвращает NaN', () => {
    assert.isNaN(pow(2, -1));
  });

  it('для дробных n возвращает NaN', () => {
    assert.isNaN(pow(2, 1.5));
  });
});
