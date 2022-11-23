const Manager = require('../lib/manager');

test('creates a Manager profile', () => {
    const manager = new Manager('Noah', 4202, 'nbauer140@gmail.com', 1);

    expect(manager.managerId).toEqual(expect.any(Number));
});

test('get role of employee', () => {
    const manager = new Manager('Noah', 4202, 'nbauer140@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});