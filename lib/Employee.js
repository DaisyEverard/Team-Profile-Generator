class Employee {
    constructor(name, id, email) {
        if (!name || !name.trim().length) {
            throw new Error("Expected name to be a non-empty string")
        }
        if (typeof id != "number" || id <= 0) {
            throw new Error("Expected id to be a positive number")
        }
        if (!email.match(/\w+@\w+\.\w+/i)) {
            throw new Error("Expected email in the format example@123.example")
        }

        this.name = name;
        this.id = id; 
        this.email = email; 
        this.role = "Employee"
    }

    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getRole() {return this.role}; 
}

module.exports = Employee;  