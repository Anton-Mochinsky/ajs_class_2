class Character { constructor(name, type) { if (name.length < 2 || name.length > 10) { throw new Error('Name must be between 2 and 10 characters'); } if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) { throw new Error('Invalid character type'); }

 
this.name = name;
this.type = type;
this.health = 100;
this.level = 1;
this.attack = undefined;
this.defence = undefined;
this.isAlive = true;
}

levelUp() { if (this.health === 0) { throw new Error('Cannot level up a dead character'); }

 
this.level += 1;
if (this.attack !== undefined)
  this.attack += Math.round(this.attack * 0.2);
if (this.defence !== undefined)
  this.defence += Math.round(this.defence * 0.2);

if (this.health < 100) {
  this.health = 100;
}
}

damage(points) { if (this.health === 0) { throw new Error('Cannot damage a dead character'); }

 
this.health -= points * (1 - this.defence / 100);
if (this.health < 0) {
  this.health = 0;
  this.isAlive = false;
}
} }

module.exports = Character;