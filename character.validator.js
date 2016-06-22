'use strict';

function stringCheck(string) {
  // console.log(string);
  if (typeof string !== 'string') return false;
  if (string.length < 1) {
    return false;
  }
  if (string.match(/\W/)) {
    return false;
  }
  return true;
}

class Validator {
  constructor() {

  }

  isValid(character) {
    var isTrue = true;
    if (typeof character === 'object') {
      for (var key in character) {
        if (propertyMap[key] === 'string') {
          if (!stringCheck(character[key])) isTrue = false;
        }
      }
    } else {
      isTrue = false;
    }
    return isTrue;
  }
}

var propertyMap = {
  name: 'string',
  race: 'string',
  class: 'string',
  weaponType: 'string',
  isLiving: 'boolean',
  str: 'number',
  int: 'number',
  dex: 'number',
  wis: 'number',
  cha: 'number',
  con: 'number'
}
module.exports = Validator;
