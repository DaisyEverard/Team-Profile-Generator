let Employee = require("./Employee");
// employee(name, id, email)
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); 

        this.github = github;
        this.role = "Engineer"
    }

    getGithub() {return this.github}
    getRole() {return this.role}
}

module.exports = Engineer;
