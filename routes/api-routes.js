var db = require("../models");
var Sequelize = require("sequelize");


module.exports=function(app){

     app.post("/api/updateSignup",function(req,res){
        db.signups.create(req.body).then(function(results){
            res.json(results)
        })
    })

    app.post("/api/addNewMember",function(req,res){
        db.member.create(req.body).then(function(results){
            res.json(results)
        })
    })

    app.get("/api/daterange/:beginDate?/:endDate?",function(req,res){
        db.schedule.findAll({
            where:{
                date:{
                    $lte:req.params.endDate,
                    $gte:req.params.beginDate
                }
                
            }
        }).then(function(results){
            console.log("working on it")
            console.log(results)
            res.json(results)
        })
    })

      app.get("/api/getSingleEvent/:id?",function(req,res){
        db.schedule.findAll({
            where:{
                id:req.params.id
            }
        }).then(function(results){
            res.json(results)
        })
    })
    app.get("/api/findUser/:first?/:last?/:email?", function(req,res){
        db.member.findAll({
            where:{
                firstName:req.params.first,
                lastName:req.params.last,
                email:req.params.email
            }
        }).then(function(results){
            res.json(results)
        })

    })

   
    

}