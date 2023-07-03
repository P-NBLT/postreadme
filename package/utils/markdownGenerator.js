export function generateMarkDown(data) {
  return `
  # ${data.title}
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/${
    data.gitHub
  }/${data.repo})

  ## Description 
  ${data.description}
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contribution Guidelines](#Contributions)
  4. [Stacks](#Stacks)
      
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Stacks
  ${data.stack
    .map((s) => {
      const reformat = s[0].toUpperCase().concat(s.slice(1));
      return `${reformat}`;
    })
    .join("\n  ")}


  ## Contributions
  ${
    data.contribution != undefined
      ? data.contribution
      : "No contribution to show at the moment"
  }

  ## Tests
  ${data.test != undefined ? data.test : "No test deployed for now."}  

  ## Questions
   For questions regarding the project, please use the following information:
  1. Username: ${data.gitHub}
  2. Repository: https://github.com/${data.gitHub}/${data.repo}
  3. E-mail: ${data.email}
`;
}

// module.exports = { generateMarkDown };
