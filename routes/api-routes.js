var db = require("../models");
var Sequelize = require("sequelize");


module.exports=function(app){

    app.get("/api/daterange/:beginDate?/:endDate?",function(req,res){
        db.Schedule.findAll({
            where:{
                date:{
                    $lte:req.params.endDate,
                    $gte:req.params.beginDate
                }
                
            }
        }).then(function(results){
            res.json(results)
        })
    })

      app.get("/api/getSingleEvent/:id?",function(req,res){
        db.Schedule.findAll({
            where:{
                id:req.params.id
            }
        }).then(function(results){
            res.json(results)
        })
    })

}