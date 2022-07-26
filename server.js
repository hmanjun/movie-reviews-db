const express = require('express')
const mysql = require('mysql2')

const PORT = 3001
const app = express()

app.get('/api/movies', (req,res) => {

})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})