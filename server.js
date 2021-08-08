const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// sync database using sequalize
const db = require("./app/models");
// db.sequelize.sync();

// Development method below *DO NOT USE IN PRODUCTION: USE ABOVE METHOD*
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// home route
app.get('/', (req, res) => {
    res.json({ message: `Welcome to backend of application`});
});

//port set for listen requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});