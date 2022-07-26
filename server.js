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

app.get('/api/movies', (req,res) => {
  db.query('USE movie_db; SELECT * movies', (err,results) =>{
    err ? console.log(err) : res.send(results)
  })
})

app.post('/api/add-movie', (req,res) => {
  
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})