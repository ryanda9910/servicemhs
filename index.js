const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaRoutes = require('./Routes/mahasiswa.routes')

require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}));

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})

app.use('/api/v1/mahasiswa', mahasiswaRoutes)