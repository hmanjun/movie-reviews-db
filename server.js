const express = require('express')
const mysql = require('mysql2')

const PORT = 3001
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
);


app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})