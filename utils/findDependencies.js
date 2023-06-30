import path from "path";
import fs from "fs";

function findPath(fileName) {
  const filePath = path.join(process.cwd(), fileName);
  return filePath;
}

const fileName = "package.json";
const filePath = findPath(fileName);
var json = JSON.parse(fs.readFileSync(filePath));
export var dependencies = Object.keys(json.dependencies);
