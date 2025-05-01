const express = require("express");
const cons = require("consolidate");
const path = require("node:path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
let isLoggedin = {
  admin: false,
  standard: false,
};
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/admin", (req, res) => {
  res.render("admin");
});

app.get("/standard", (req, res) => {
  res.render("standard");
});
app.post("/logout", (req, res) => {
  res.redirect("/");
});
app.post("/", (req, res) => {
  const credintials = req.body;
  if (
    credintials.password === "12345" &&
    (credintials.username == "admin" || credintials.username == "standard")
  ) {
    if (credintials.username === "admin") {
      res.redirect("/admin");
    } else credintials.username === "standard";

    {
      res.redirect("/standard");
    }

    return;
  }
  res.redirect("/");
});

app.listen(8000, () => {
  console.log(`Example app listening on  ${8000}`);
});
