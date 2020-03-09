const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Server listen on port: ${process.env.PORT}`);
});
