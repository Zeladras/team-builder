//Calls the employee js file
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, managerId) {
        super (name, id, email);

        this.managerId = managerId;
    }
// Returns Manager role by overriding employee when given Manager role
    getRole () {
        return "Manager";
    }
}
//Exports Manager role
module.exports = Manager;