const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Employee")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template")

// creates object/adds them to something
const getManager = async () => {
    const res =  await inquirer
    .prompt([
        {type: "input",
        name: "name",
        message: "Please enter manager's name"},
        {type: "number",
        name: "id",
        message: "Please enter manager's employee ID"},
        {type: "input",
        name: "email",
        message: "Please enter manager's email address"},
        {type: "number",
        name: "officeNumber",
        message: "Please enter manager's office number"}
    ])
        return new Manager(res.name, res.id, res.email, res.officeNumber)
}
const getEngineer = async () => {
    const res =  await inquirer
    .prompt([
        {type: "input",
        name: "name",
        message: "Please enter engineer's name"},
        {type: "number",
        name: "id",
        message: "Please enter engineer's employee ID"},
        {type: "input",
        name: "email",
        message: "Please enter engineer's email address"},
        {type: "input",
        name: "github",
        message: "Please enter engineer's GitHub username"}
    ])
        return new Engineer(res.name, res.id, res.email, res.github)
}
const getIntern = async () => {
    const res =  await inquirer
    .prompt([
        {type: "input",
        name: "name",
        message: "Please enter intern's name"},
        {type: "number",
        name: "id",
        message: "Please enter intern's employee ID"},
        {type: "input",
        name: "email",
        message: "Please enter intern's email address"},
        {type: "input",
        name: "school",
        message: "Please enter intern's school"}
    ])
        return new Intern(res.name, res.id, res.email, res.school)
}
const mainMenu = async () => {
    const res =  await inquirer
    .prompt([
        {type: "checkbox",
        name: "menu",
        message: "Please Choose an option:",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }
    ])
        if (res.menu[0] === "Add an engineer") {
            return "engineer"
        } else if (res.menu[0] === "Add an intern") {
            return "intern"
        } else if (res.menu[0] === "Finish building the team") {
            return "finish"
        } else {
            return "no option"
        }
} 

let getTeam = async () => {
    let team = []; 
    let teamManager = await getManager();
    team.push(teamManager)

    // lets you know whether to run menu again
    let menuLogic = async () => {
        let menuRes = await mainMenu(); 
        if (menuRes === "engineer") {
            let newEngineer = await getEngineer();
            team.push(newEngineer); 
            await menuLogic(); 
        } else if (menuRes === "intern") {
            let newIntern = await getIntern();
            team.push(newIntern)
            await menuLogic(); 
        } else if (menuRes === "no option") {
            console.log("You must choose an option");
            await menuLogic(); 
        } else if (menuRes === "finish") {
            const newHTML = render(team); 
            const fileName = `./output/${team[0].name}-team-profiles.html`; 
            fs.writeFile(fileName, newHTML, (err) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log("Success!"); 
                }
            })
        } 
    }
    await menuLogic(); 
}

getTeam(); 