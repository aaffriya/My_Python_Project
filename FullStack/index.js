// Import Required Modules.====================================================
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// init module.================================================================
const app = express()
app.use(cors())
app.use(express.json()) // MiddleWare.

// Database connection.========================================================
mongoose.connect('mongodb://localhost:27017/employee')
    .then(() => console.log('DB Contected'))
    .catch(() => console.log('DB Connection Failed'))

// Difine Mongoose Model and Schema.===========================================
const Employees = mongoose.model('employee', {  // Fisrt arg is Collection name.
    fullName: {  // Second arg is Schema.
        type: String,
        required: true
    },
    email: String,
    mobile: Number,
    city: String
})

// Init Server Connection.=====================================================
const port = process.env.PORT || 3000 // Difine Port Number.
app.listen(port, () => console.log('Server...OK!'))

// Write CRUD Methods.=========================================================
// Reade.------------------------------
app.get('/list', (reqPass, res) => {
    Employees.find((err, dbRecords) => {
        if (!err) res.send(dbRecords)
        else console.log('Error in line Number 36 :', dbRecords)
    })
})

// Difine Insert Function--------------
function create(req, resPass) {
    var jsObject = new Employees() // Use Line Number 17 var to make new Object 
    jsObject.fullName = req.body.fullName
    jsObject.email = req.body.email
    jsObject.mobile = req.body.mobile
    jsObject.city = req.body.city
    // console.log(jsObject)
    jsObject.save((err, docsPass) => { //
        if (err) console.log('Error in line Number 49 :', err)
    })
}

// update Function.--------------------
function update(req, resPass) {
    if (req.body.fullName) {
        Employees.findByIdAndUpdate({ _id: req.body._id }, req.body, (err, docsPass) => {
            if (err) console.log('Error in line Number 57 :', err)
        })
    }
}

// Post for create or update.   
app.post('/', (req, res) => {
    if (!req.body._id) create(req, res)
    else update(req, res)
})

// Delete.-----------------------------
app.delete('/delete/:id', (req, res) => {
    Employees.findByIdAndDelete({ _id: req.params.id }, (err, docsPass) => {
        if (err) console.log('Error in line Number 71 :', err)
        else res.send('')
    })
})
