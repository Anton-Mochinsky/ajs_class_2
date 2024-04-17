const Daemon = require('./Daemon');

test('Daemon attack, defence, health, level, type, and name are initialized correctly', () => { 
    const daemon = new Daemon('Evil'); 
    expect(daemon.attack).toBe(10); 
    expect(daemon.defence).toBe(40); 
    expect(daemon.health).toBe(100); 
    expect(daemon.level).toBe(1); 
    expect(daemon.type).toBe('Daemon'); 
    expect(daemon.name).toBe('Evil'); 
});