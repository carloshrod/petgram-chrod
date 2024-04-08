import db from "../adapter.js";

const { get } = db;

function list() {
  return get("categories").value();
}

export default { list };
