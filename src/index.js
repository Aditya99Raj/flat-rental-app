const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config()

const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const { register, login, newToken } = require("./controllers/auth.controller");

app.post("/register", register);
app.post("/login", login);

app.use("/user", userController);

const PORT = process.env.PORT || 6060;

app.listen(PORT, async () => {
   
        await connect();
        console.log("Listening on port 6060");
    
})

//  https://git.heroku.com/rental-app-for-flat.git
//https://rental-app-for-flat.herokuapp.com/