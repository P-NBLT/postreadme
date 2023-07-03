import { dependencies } from "./findDependencies.js";
import promptSync from "prompt-sync";
import inquirer from "inquirer";

// list of questions that will asked the user to promt an answer
// which will then be displayed in the generated file.

let stackChoices = [
  "Take from dependency (ALL)",
  "Let me select from my dependency list",
  "I ll write it myself",
  "I don't want to share my stack",
];

const questions = [
  {
    type: "input",
    name: "fileName",
    message: "How would you like to name this file?",
    default: "README.md",
    validate: (input) => {
      if (input.length > 0) {
        return true;
      } else return "You must enter a file name";
    },
  },
  {
    type: "input",
    name: "title",
    message: "What should the title be?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Guidelines: ",
  },
  {
    type: "input",
    name: "usage",
    message: "How to Use: ",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Enter Github Username:  ",
  },
  {
    type: "input",
    name: "repo",
    message: "Repository Name: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your e-mail: ",
  },
  {
    type: "list",
    name: "stack",
    message: "What stack did you use?",
    choices: stackChoices,
    filter: async (choice) => {
      if (choice === stackChoices[0]) {
        return dependencies;
      } else if (choice == stackChoices[1]) {
        const answer = await inquirer.prompt([
          {
            type: "checkbox",
            name: "selection",
            message: "choose the following",
            loop: true,
            choices: [...dependencies],
          },
        ]);
        return answer.selection;
      } else if (choice == stackChoices[3]) {
        return [];
      } else {
        const prompt = promptSync();
        const answer = prompt("Enter your choices: ")
          .split(" ")
          .filter((e) => e != "");
        return answer;
      }
    },
  },
];

export { questions };
