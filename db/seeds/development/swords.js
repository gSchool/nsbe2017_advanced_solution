exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
  return knex("swords").del()
        .then(() => Promise.all([
                // Inserts seed entries
          knex("swords").insert({
            type: "gold",
            is_magical: false,
            damage: 5,
            durability: 33
          }),
          knex("swords").insert({
            type: "wooden",
            is_magical: false,
            damage: 5,
            durability: 60
          }),
          knex("swords").insert({
            type: "stone",
            is_magical: true,
            damage: 6,
            durability: 132
          }),
          knex("swords").insert({
            type: "iron",
            is_magical: true,
            damage: 7,
            durability: 251
          }),
          knex("swords").insert({
            type: "diamond",
            is_magical: true,
            damage: 8,
            durability: 1562
          })
        ]));
};
