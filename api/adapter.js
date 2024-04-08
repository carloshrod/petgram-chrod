import { LowSync, Memory } from "lowdb";
import { JSONFileSync } from "lowdb/node";
import fs from "fs";

const loadJSON = (path) =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const json = loadJSON("./db.json");
// import json from "./db.json";

const isLocal = !process.env.NOW_REGION;
// const type = isLocal ? new FileSync("./db.json") : new Memory();
const type = isLocal ? new JSONFileSync("./db.json") : new Memory();

const db = new LowSync(type, json);

export default db;
