const express = require('express')
const mysql = require('mysql2')

const PORT = 3001
const app = express()




app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})