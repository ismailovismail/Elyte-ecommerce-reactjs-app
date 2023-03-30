const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const mySql = require('mysql2');
const database = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "ismayil5575",
    database: "blog-list"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api/get/:id', (req, res) => {
    const { id } = req.params;
    const sqlGet = 'SELECT * FROM blog_db where id = ?';
    database.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result)
    })
})


app.post('/api/post',(req,res)=>{
    const {title,brand,description,img}=req.body
    const sqlPost='INSERT INTO blog_db (title,brand,description,img) VALUES (?,?,?,?)';
    database.query(sqlPost,[title,brand,description,img],(error,result)=>{
        if (error) {
            console.log(error);
        }
    })
})



app.put('/api/update/:id',(req,res)=>{
    const {id}=req.params;
    const {title,brand,description,img}=req.body;
    const sqlUpdate='UPDATE blog_db SET title = ? , brand = ? , description = ? , img = ? WHERE id = ? '
    database.query(sqlUpdate,[title,brand,description,img,id],(error,result)=>{
        if (error) {
            console.log(error);
        }
        res.send(result)
    })
})




app.get('/api/get', (req, res) => {
    const sqlGet = 'SELECT * FROM blog_db'
    database.query(sqlGet, (error, result) => {
        res.send(result)
    })
})



app.delete('/api/remove/:id', (req, res) => {
    const { id } = req.params;
    const sqlDelete =
     "DELETE FROM blog_db where id = ?";
    database.query(sqlDelete, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    })
})
app.listen(5000, () => {
    console.log('Connection successfully  on 5000 port ');
})