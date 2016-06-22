'use strict';

class Character {
  constructor(name, race, classType, weaponType, isLiving, str, int, dex, wis, cha, con) {
    this.name = name || 'John';
    this.race = race || 'Human';
    this.class = classType || 'Fighter';
    this.weaponType = weaponType || 'Pen';
    this.isLiving = isLiving || true;
    this.str = str || 10;
    this.con = con || 10;
    this.dex = dex || 10;
    this.wis = wis || 10;
    this.int = int || 10;
    this.cha = cha || 10;
  }
}


module.exports = Character;
