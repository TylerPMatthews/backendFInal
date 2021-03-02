const db = require("../data/db-config");
const find = () => {
  return db("users");
};

const findBy = (filter) => {
  return db("users").where(filter);
};

function add(user) {
  return db("users")
    .insert(user)
}

const findById = (id) => {
  return db("users").where("id", id);
};

module.exports = {
  find,
  findBy,
  add,
  findById,
};
