#!/usr/bin/env node

import inquirer from "inquirer";
import { questions } from "./utils/questions.js";
import { generateMarkDown } from "./utils/markdownGenerator.js";
import { writeFile } from "./utils/fileGenerator.js";
import { file } from "./utils/fileObj.js";

async function postreadme() {
  const answers = await inquirer.prompt(questions);
  const verifiedFileName = await file.formatFile(answers.fileName);
  const markDown = generateMarkDown(answers);
  writeFile(verifiedFileName, markDown);
}

postreadme();
