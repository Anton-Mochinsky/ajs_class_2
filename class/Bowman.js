const Character = require('./class/Character');

class Bowman extends Character { 
    constructor(name) { 
        super(name, 'Bowman'); 
        this.attack = 25; 
        this.defence = 25; 
    } 
}

module.exports = Bowman;