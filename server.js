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
  db.query('SELECT * FROM movies', (err,results) =>{
    err ? console.log(err) : res.send(results)
  })
})

app.post('/api/add-movie', (req,res) => {
  const {name} = req.body
  db.query('INSERT INTO movies (movie_name) VALUES (?)', name, (err,results) =>{
    const newMovie = {
      name
    }
    res.json(newMovie)
  })
})

app.post('/api/update-review', (req, res) => {
    const { movie_id, review} = req.body
    db.query('INSERT INTO reviews (movie_id,review) VALUES (?,?)', movie_id, review, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            const newReview = {movie_id, review}
            res.json(newReview)
        }
    })
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})