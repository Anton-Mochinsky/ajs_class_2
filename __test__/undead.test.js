const Undead = require('./Undead');

test('Undead attack, defence, health, level, type, and name are initialized correctly', () => { 
    const undead = new Undead('Ghost'); 
    expect(undead.attack).toBe(25); 
    expect(undead.defence).toBe(25); 
    expect(undead.health).toBe(100); 
    expect(undead.level).toBe(1); 
    expect(undead.type).toBe('Undead'); 
    expect(undead.name).toBe('Ghost'); 
});