const express = require ('express')
const cors = require('cors')


const app = express()

var corOptions = {
    origin : 'https://localhost:8081'
}


// middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended : true }))


//test api 

app.get('/', (req, res) => {
    res.json({ message : 'Hi je viens tester' })
})

// 

const port = process.env.port || 8080

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})