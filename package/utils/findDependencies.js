import path from "path";
import fs from "fs";

export function findPath(fileName) {
  const filePath = path.join(process.cwd(), fileName);
  return filePath;
}

export function isPathExist(fileName) {
  try {
    const path = findPath(fileName);

    fs.accessSync(path, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

const fileName = "package.json";
const filePath = findPath(fileName);
var json = JSON.parse(fs.readFileSync(filePath));
export var dependencies = Object.keys(json.dependencies);
