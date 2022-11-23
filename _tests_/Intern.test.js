const Intern = require('../lib/intern');

test('creates an Intern profile', () => {
    const intern = new Intern('Noah', 4202, 'nbauer140@gmail.com', 'MSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('employee school', () => {
    const intern = new Intern('Noah', 4202, 'nbauer140@gmail.com', 'MSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('role of employee', () => {
    const intern = new Intern('Noah', 4202, 'nbauer140@gmail.com', 'MSU');

    expect(intern.getRole()).toEqual("Intern");
});