const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');

const sess = {
  secret: 'Super secret secret',
  cookie: {
    // 86,400 milliseconds = 1 day
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Come save your passwords at http://localhost:${PORT}!\nIf/When you get hacked, we take no responsibility :)`));
});

// -----Temp routing for handlebars testing-----

app.get("/", async (req, res) => {
  res.render("applist", { layout: "index" });
});

app.get("/test", async (req, res) => {
  res.render("test", { layout: "index" });
});

// ---------------------------------------------