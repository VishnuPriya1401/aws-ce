const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_register"
})

app.post('/login_register', (req, res) => {
    const sql = "INSERT INTO register (`username`,`email`,`password`) VALUES (?)";
    const values= [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.listen(3306, ()=>{
    console.log("Listening");
})