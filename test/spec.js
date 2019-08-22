// write tests here
const chai = require('chai');
let scoreCalculator = require('../index.js');
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe('Score Calculator', function() {
  it('should be a function', function() {
    scoreCalculator.should.be.a('function');
  });

  it('should return a number', function() {
    const output = scoreCalculator([4, 1, 5]);
    assert.typeOf(output, 'number');
  });

  it('should throw error if input is not an array', function() {
    expect(function() {
      scoreCalculator('banana');
    }).to.throw(Error);
  });

  it('should add 5 points to the score for a radius between 5 and 10 inclusive', function() {
    const output = scoreCalculator([5, 7, 10]);
    output.should.deep.equal(15);
  });

  it('should add 10 points to the score for a radius less than 5', function() {
    const output = scoreCalculator([4, 1, 5]);
    output.should.deep.equal(25);
  });

  it('should add 0 points to the score for a radius greater than 10', function() {
    const output = scoreCalculator([10, 11, 50]);
    output.should.deep.equal(5);
  });
});