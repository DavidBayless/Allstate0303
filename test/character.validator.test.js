var expect = require('chai').expect;
var Validator = require('../character.validator');
var validator;
var character;

beforeEach(function() {
  validator = new Validator();
  character = {
    name: 'Bob',
    race: 'Gnome',
    class: 'Farmer',
    weaponType: 'Pitchfork',
    isLiving: true,
    str: 11,
    int: 7,
    dex: 9,
    wis: 10,
    cha: 5,
    con: 13
  }
});

describe('Validator: XTREME EDITION', function() {
  it('should return true when given valid data', function() {
    expect(validator.isValid(character)).to.equal(true);
  });
  it('should return false if character is not an object', function() {
    expect(validator.isValid(4)).to.equal(false);
  });
  it('should return false if character is an array', function() {
    expect(validator.isValid([3,2,1,'boom'])).to.equal(false);
  });
  it('should return false when a string is empty', function() {
    character.class = '';
    expect(validator.isValid(character)).to.equal(false);
  });
  it('should return false when a string has a special character', function() {
    character.class = 'Farmer!';
    expect(validator.isValid(character)).to.equal(false);
  });
  it('should return false when a string is not a string', function() {
    character.name = 3;
    expect(validator.isValid(character)).to.equal(false);
  })
});
