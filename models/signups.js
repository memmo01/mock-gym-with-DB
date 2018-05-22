module.exports=function(sequelize,DataTypes){
    var signup = sequelize.define("signups",{
             scheduleId:DataTypes.INTEGER,
     userID:DataTypes.INTEGER

 },{
        timestamps:false
    });
 return signup;
}