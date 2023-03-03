import {Employee} from "./Employee.js"

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (!school || !school.trim().length) {
            throw new Error("Expected school to be a non-empty string")
        }
        super(name, id, email);
        
        this.school = school;
        this.role = "Intern"
    }

    getSchool() {return this.school}
}

export {Intern}; 