import fs from "fs";

function writeFile(name, content) {
  return fs.writeFile(name, content, (err) => {
    if (err) {
      throw err;
    }
  });
}

export { writeFile };
