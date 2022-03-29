const app = require("./app/app");

app.listen(app.get("port"), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on: http://localhost:%s", app.get("port"));
  }
});
