const Bowman = require('./Bowman');

test('Bowman attack, defence, health, level, type, and name are initialized correctly', () => { 
    const bowman = new Bowman('Archer'); 
    expect(bowman.attack).toBe(25); 
    expect(bowman.defence).toBe(25);
    expect(bowman.health).toBe(100); 
    expect(bowman.level).toBe(1); 
    expect(bowman.type).toBe('Bowman'); 
    expect(bowman.name).toBe('Archer'); 
});