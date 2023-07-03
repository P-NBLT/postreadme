import fs from "fs";

export function writeFile(name, content) {
  return fs.writeFile(name, content, (err) => {
    if (err) {
      throw err;
    }
  });
}
