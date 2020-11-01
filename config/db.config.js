module.exports = {
  HOST: "localhost",
  USER: "quest",
  PASSWORD: "73368336",
  DB: "sql-helloapp",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};