exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable().unique();
      users.string("password", 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("title", 128).notNullable().unique();
      tbl.string("recipe_source", 128).notNullable();
      tbl.string("recipe_image", 128);
      tbl.text("ingredients").notNullable();
      tbl.string("category", 128).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("RESTRICT");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("users").dropTableIfExists("recipes");
};
