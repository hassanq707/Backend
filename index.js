require('dotenv').config()

const express = require("express")
const app = express();

const {todos_data} = require('./data')

app.use(express.json())


app.get("/task", (req, res) => {
    const allData = {
        data : todos_data,
    }
    return res.json( allData );
    console.log("Hassan Qadri")

});



app.get('/task/:id' , (req,res) => {

    const id = req.params.id

    const find_todo = todos_data.filter((elem) => {
        return elem.id == id
    })

    return res.json({
        new_data : find_todo
    })
    console.log("Hassan Qadri")
})


app.post("/task", (req, res) => {

    const new_data = req.body;

    return res.json({
      data: new_data,
      message: "Successfully added!",
    });
    console.log("Hassan Qadri")

  });



app.put("/task/:id", (req, res) => {
 
    const id = req.params.id;
    

    const data = req.body;
  
    const find_todo = todos_data.find((elem) => {
        return elem.id == id;
    });

    if(!find_todo){
          return res.status(404).json({ message: "Todo not found!" })
    }
    const update_todo = { ...find_todo, ...data };

    return res.json({ data: update_todo });
    console.log("Hassan Qadri")


  });



app.listen(process.env.PORT, () => {
    console.log("Express server is running!");
 });