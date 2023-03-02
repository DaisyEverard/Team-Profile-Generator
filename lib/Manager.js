let Employee = require("./Employee");
// employee(name, id, email)
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 

        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getOfficeNumber() {return this.officeNumber}
}

module.exports = Manager; 