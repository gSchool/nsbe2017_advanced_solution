exports.up = function (knex, Promise) {
  return knex.schema.createTable("swords", (table) => {
    table.increments("id").primary();
    table.text("type");
    table.boolean("is_magical");
    table.integer("damage");
    table.integer("durability");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("swords");
};
