import {Manager} from "./lib/Manager.js"; 
import {Engineer} from "./lib/Engineer.js";
import {Intern} from "./lib/Intern.js"
import inquirer from "inquirer";
import path from "path"
import fs from "fs"


const OUTPUT_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import { render } from './src/page-template.js';


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// write inquier.prompt seperate function for each type of person and one for menu that 
// creates object/adds them to something
const getManger = () => {
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
        // res: { name: 'John', id: 2, email: '2', officeNumber: 2 }
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
    })
}

getManger(); 