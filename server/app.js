const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const cors = require('cors')
const router=require('./routes/admin')
const path=require('path')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/images',express.static("./images"))



app.use(router)


app.listen(5000, () => {
    console.log('Connection successfully  on 5000 port ');
})