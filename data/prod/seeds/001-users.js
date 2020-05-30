const bcrypt = require("bcryptjs");
const defaultPW = "1234";
const hash = bcrypt.hashSync(defaultPW, Number(process.env.HASHES));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "test1",
          password: hash,
          role: 1,
          first_name: "Test",
          last_name: "User 1",
          email: "user1@lambda.com",
        },
        {
          username: "test2",
          password: hash,
          role: 1,
          first_name: "Test",
          last_name: "User 2",
          email: "user2@lambda.com",
        },
        {
          username: "test3",
          password: hash,
          role: 1,
          first_name: "Test",
          last_name: "User 3",
          email: "user3@lambda.com",
        },
        {
          username: "admin1",
          password: hash,
          role: 2,
          first_name: "Test",
          last_name: "Admin1",
          email: "admin1@lambda.com",
        },
      ]);
    });
};
