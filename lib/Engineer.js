import {Employee} from "./Employee.js"

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (!github || !github.trim().length) {
            throw new Error("Expected GitHub username to be a non-empty string")
        }
        super(name, id, email); 

        this.github = github;
        this.role = "Engineer"
    }

    getGithub() {return this.github}
    getRole() {return this.role}
}

export {Engineer};