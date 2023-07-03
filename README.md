# Postreadme

---

A package that can help you to build your README.md file.

## Table of Content
---

- [Installation](#Installation)
- [Usage](#Usage)
- [List of entries](#List-of-entries)


---

## Installation
---
npm install postreadme --save-dev

---

## Usage
---
Once you are ready to write your README.md it is time to run this package.
To do so, inside your package.json add a script that will execute postreadme script.
```json
"script": {
  "my-script-name": "postreadme"
}
```

it will trigger a prompt line within your terminal. You just need to answer the questions and the program will then build the README.md file.

Be careful though, if you have an existing README.md file and you have already done some work and or styling the script will overwrite the old one.
However, you can still use this script and give a different file name when the prompt in the terminal asks you for it.

---

## List of entries
---

Below is the list of the prompt commands that you will need to answer. if you press enter without filling anything it will just be empty.
1. Name of the file. (default README.md)
2. Title
3. Description
4. Installation guideline
5. Usage
6. Github username
7. Repository name
8. Email
9. Stack (you will have a list of choices)

Once you have entered all the values the program will check if the file you want to create already exist or not. If it does not the file is created. If the file exists it will ask you if you want to overwrite it. If you don't want to overwrite then it will ask you either to abort or to rename the file.

I hope you will find this package useful. 
