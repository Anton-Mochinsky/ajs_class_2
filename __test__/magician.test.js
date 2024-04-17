const Magician = require('./Magician');

test('Magician attack, defence, health, level, type, and name are initialized correctly', () => { 
    const magician = new Magician('Wizard'); 
    expect(magician.attack).toBe(10); 
    expect(magician.defence).toBe(40);
    expect(magician.health).toBe(100); 
    expect(magician.level).toBe(1); 
    expect(magician.type).toBe('Magician'); 
    expect(magician.name).toBe('Wizard'); 
});