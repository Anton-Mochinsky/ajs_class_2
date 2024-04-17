const Swordsman = require('./Swordsman');

test('Swordsman attack, defence, health, level, type, and name are initialized correctly', () => { 
    const swordsman = new Swordsman('Knight'); 
    expect(swordsman.attack).toBe(40); 
    expect(swordsman.defence).toBe(10); 
    expect(swordsman.health).toBe(100); 
    expect(swordsman.level).toBe(1); 
    expect(swordsman.type).toBe('Swordsman'); 
    expect(swordsman.name).toBe('Knight'); 
});