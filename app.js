const express = require('express')
const app = express()
let tasks = []


app.set('view engine', 'ejs')


app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.render("index.ejs",{tasks})
})

app.post("/new-task",(req,res)=>{
    tasks.push(req.body)
    res.redirect("/")
})
app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    tasks.splice(id,1)
    res.json({redirect : "/"})
})

app.listen(3000)