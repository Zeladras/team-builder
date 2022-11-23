//Calls the employee js file
const Employee = require('./Employee');
 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }
 
    getSchool () {
        return this.school;
    }

// Returns Intern role by overriding employee when given Intern role
    getRole () {
        return "Intern";
    }
}
//Exports Intern role
module.exports = Intern;