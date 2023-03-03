import {Manager} from "./lib/Manager.js"; 
import {Engineer} from "./lib/Engineer.js";
import {Intern} from "./lib/Intern.js"
import inquirer from "inquirer";
import path from "path"
import fs from "fs"


const OUTPUT_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import { render } from './src/page-template.js';

// creates object/adds them to something
const getManager = () => {
    inquirer
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
    .then(res => {
        return new Manager(res.name, res.id, res.email, res.officeNumber)
    })
}
const getEngineer = () => {
    inquirer
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
    .then(res => {
        return new Engineer(res.name, res.id, res.email, res.github)
    })
}
const getIntern = () => {
    inquirer
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
    .then(res => {
        return new Intern(res.name, res.id, res.email, res.school)
    })
}
const mainMenu = () => {
    inquirer.
    prompt([
        {type: "checkbox",
        name: "menu",
        message: "Please Choose an option:",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }
    ]).then(res => {
        console.log(res.menu[0])
        if (res.menu[0] === "Add an engineer") {
            return "engineer"
        } else if (res.menu[0] === "Add an intern") {
            return "intern"
        } else if (res.menu[0] === "Finish building the team") {
            return "finish"
        } else {
            return "no option"
        }
    })
} 

let getTeam = () => {
    let team = []; 
    let teamManager = getManager();
    team.push(teamManager)

    // lets you know whether to run menu again
    let menuLogic = () => {
        let menuRes = mainMenu(); 
        if (menuRes === "engineer") {
            let newEngineer = getEngineer();
            team.push(newEngineer); 
            menuLogic(); 
        } else if (menuRes === "inter") {
            let newIntern = getIntern();
            team.push(newIntern)
            menuLogic(); 
        } else if (menuRes === "no option") {
            console.log("You must choose an option");
            menuLogic(); 
        } else if (menuRes === "finish") {
            return team; 
            render(team); 
        } 
    }
    menuLogic(); 
}

getTeam(); 