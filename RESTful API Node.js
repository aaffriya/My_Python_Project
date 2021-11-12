const express = require("express") // import express
const app = express() // express return faunction , use this function in a variable
app.use(express.json()) // middleware //use data in json format

var members = [
    {id : 1, name : "Vikash"},
    {id : 2, name : "Jyotika Bandil"},
    {id : 3, name : "Bhupender Yadav"},
    {id : 4, name : "Abhilash"},
    {id : 5, name : "Rajan Yadav"},
    {id : 6, name : "Gulafsa Jahan"}
]

app.get("/", (req, res)=>{ // "/" Root of webpage
    // welcome webpage
    res.send("<br><br><br><br><br><br><br><br><h1 style = 'text-align : center';>Welcome To My WebPage</h1>")
})

app.get("/api/members", (req, res)=>{  // get=> for send data
    //send list of data
    res.send(members)
})

app.get("/api/members/:id", (req, res)=>{ // read
    //check id exist or not
    //if not exist return 404
    //if exist send data
    const member = members.find(key => key.id == req.params.id)  // use === and parseInt() for type cast
    if (!member) return res.status(404).send("Not Found!") // return 404
    res.send(member) // else continue send data
})

app.post("/api/members", (req,res)=>{ // create
    //check req.body is false or not
    //if req.body is ture push new data
    if (!req.body.name) return res.status(400).send("Name is required")
    const member = {
        id : members.length + 1,  // incriment id -> ooptional
        name : req.body.name  // before this use -> difine middleware
    }
    members.push(member)  // append in list
    res.send(member)  // send new data variable
})

app.put("/api/members/:id", (req, res)=>{ // update
  // first check id 
  // if not exist id return 404 -> not found
  // check data false return 400 -> bad data
  // if data is ture update data
  //last return updated data
    let member = members.find(key => key.id == req.params.id) // same as line 28
    if (!member) return res.status(404).send("Not Found!") // same as line 29
    if (!req.body.name) return res.status(400).send("Name is Required") // same as line 36
    member = {id: req.params.id, name: req.body.name}  // set new variable
    members[(req.params.id)-1] = member // add new member in at index
    res.send(member) // send new updated data
})

app.delete("/api/members/:id", (req,res)=>{ // delete
    // first check the data exist or not
    // if not exist data return 404 -> not found
    // if exist data delete data
    const member = members.find(key => key.id == req.params.id) // same as line 28, 51
    if (!member) return res.status(404).send("Not Found!") // same as line 29, 52
    const index = members.indexOf(member) // find the  index of given data in data
    members.splice(index,1) // splice() -> delete by index, 2nd arg total elements delete range
    res.send("Deleted") //

})

app.listen(3000, ()=> console.log("At http://localhost:3000")) // Listen 
