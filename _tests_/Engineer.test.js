const Engineer = require('../lib/engineer');

test('creates an engineer profile', () => {
    const engineer = new Engineer('Noah', 4202, 'nbauer140@gmail.com', 'Zeladras');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Noah', 4202, 'nbauer140@gmail.com', 'Zeladras');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('role of employee', () => {
    const engineer = new Engineer('Noah', 4202, 'nbauer140@gmail.com', 'Zeladras');

    expect(engineer.getRole()).toEqual("Engineer");
});