const Zombie = require('./Zombie');

test('Zombie attack, defence, health, level, type, and name are initialized correctly', () => { 
    const zombie = new Zombie('Walker'); 
    expect(zombie.attack).toBe(40); 
    expect(zombie.defence).toBe(10); 
    expect(zombie.health).toBe(100); 
    expect(zombie.level).toBe(1); 
    expect(zombie.type).toBe('Zombie'); 
    expect(zombie.name).toBe('Walker'); 
});