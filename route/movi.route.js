const {Router} = require("express");
const {MoviModel} = require("../Models/Movi.model")
const moviRouter = Router();
moviRouter.get("/", async(req,res)=>{
    let data = req.query
    //let obj = {};
    let size = data.size || 2;
    let page = data.page || 1;
    let sorting = data.sort || "";

    // if(req.query.title){
    //     obj.title = { $in: data.title}
    // }

    // if(req.query.name){
    //     obj.name = { $in: data.name}
    //  }
     
    const mydata = await MoviModel.find(data)
    .limit(size)
    .skip((page-1)*size)
    .sort(sorting);
    res.send(mydata)
})

moviRouter.get("/search/:name" , (req,res)=>{
    var regex = new RegExp(req.params.name, "i");
    MoviModel.find({name:regex}).then((result)=>{
        res.status(200).json(result)
    })
})

moviRouter.post("/post", async(req,res)=>{
    let payload = req.body;
    const data = await MoviModel.insertMany([payload]);
    
    res.send(data)
})

moviRouter.patch("/patch/:id", async(req,res)=>{
    let ids = req.params.id
    let payload = req.body;
    const data = await MoviModel.findByIdAndUpdate({_id:ids},payload)
    res.send(data)
})

moviRouter.delete("/delete/:id",async(req, res) => {
    let ids = req.params.id
    
    const data = await MoviModel.findByIdAndDelete({_id:ids})
    res.send(data)
})


module.exports = {moviRouter}