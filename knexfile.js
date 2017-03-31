module.exports = {

  development: {
    client: "pg",
    connection: "postgres://wecsizmqdydkfs:7b965772a6a619d0e60a1d530d73295588b991ebecf6f6a467d40735a55f84d1@ec2-54-221-244-196.compute-1.amazonaws.com:5432/dfh21bdlmk6j0g?ssl=true",
    migrations: {
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`
    }
  },

  production: {
    client: "pg",
    connection: "postgres://localhost/nsbe",
    migrations: {
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`
    }
  }
};
