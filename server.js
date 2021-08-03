const express = require("express");
const sequelize = require("./config/connection")
const routes = require("./routes");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);



// Connect to the MySQL DB
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
});

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
//Tom
