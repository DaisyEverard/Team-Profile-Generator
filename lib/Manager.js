const type = require("os");
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (typeof officeNumber != "number" || officeNumber <= 0) {
            throw new Error("Expected office number to be a positive number")
        }
        super(name, id, email); 

        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getOfficeNumber() {return this.officeNumber}
}

module.exports = Manager