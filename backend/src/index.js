const Express = require("express");
const setupMiddleware = require("./setup/middleware");
const setupDatabase = require("./setup/database");

const app = Express();

setupMiddleware(app);

setupDatabase()
  .then((client) => {
    app.listen(4000, () => {
      console.log("Server started on PORT 4000");
    });
  })
  .catch(console.error);
