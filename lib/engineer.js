//Calls the employee js file
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github
    }

    getGithub () {
        return this.github;
    }
// Returns Engineer role by overriding employee when given Engineer role
    getRole () {
        return "Engineer";
    }
}
//Exports Engineer role
module.exports = Engineer;