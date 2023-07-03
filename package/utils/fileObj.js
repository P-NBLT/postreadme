import inquirer from "inquirer";
import { isPathExist } from "./findDependencies.js";

export const file = {
  async verify(fileName) {
    let exisitingFile = isPathExist(fileName);
    if (!exisitingFile) return fileName;
    else {
      let result = await inquirer.prompt([
        {
          type: "confirm",
          name: "replaceFile",
          message: `There is an existing ${fileName} are you sure you want to overwrite it?`,
        },
      ]);
      if (!result.replaceFile) {
        let shouldReplace = await inquirer.prompt([
          {
            type: "list",
            name: "actionTaken",
            message: "What should we do?",
            choices: ["Abort", "Rename file"],
            filter: async (choice) => {
              if (choice == "Abort") return false;
              else {
                return await this.replaceFile();
              }
            },
          },
        ]);
        if (!shouldReplace.actionTaken) throw new Error("Command Aborted.");

        return await this.formatFile(shouldReplace.actionTaken);
      }

      return fileName;
    }
  },
  async replaceFile() {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "newFileName",
        message: "How would you like to rename this file?",
        validate: (input) => {
          if (input.length > 0) {
            return true;
          } else return "You must enter a file name";
        },
      },
    ]);
    return answer.newFileName;
  },
  async formatFile(FileName) {
    const fileName = FileName.includes(".md")
      ? FileName
      : FileName.concat(".md");
    const result = await this.verify(fileName);
    return result;
  },
};
