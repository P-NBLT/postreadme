import inquirer from "inquirer";
import { questions } from "./utils/questions.js";
import { generateMarkDown } from "./utils/markdownGenerator.js";
import { writeFile } from "./utils/fileGenerator.js";

async function init() {
  const answers = await inquirer.prompt(questions);
  const markDown = generateMarkDown(answers);
  const fileName = answers.fileName.includes(".md")
    ? answers.fileName
    : answers.fileName.concat(".md");
  writeFile(fileName, markDown);
}

init();
