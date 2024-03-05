const User = require("../models/user")

exports.createUser=async function(req,res,next){
try{
    const firstName=req.body.firstname;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const password=req.body.password;
    const user= new User(undefined,firstName,lastName,email,password);
    await user.save();
    return res.send({message:"user create successfully"});
}catch(error){
    console.log(error)
}
}

exports.getAllUsers= async function (req,res,next){
try{
    const users=await User.fetchAll();
    return res.send(users.rows)
}catch(error){console.log(error)}


}

exports.getUserById= async function (req,res,next){
    try{
        const userId= req.body.id
        const user = await User.fetchById(userId);
        return res.send(user.rows)
    }catch(error){console.log(error)}
    
    
    }

    exports.getUserByEmail= async function (req,res,next){
        try{
            const userEmail=req.body.email;
            const user= await User.fetchByEmail(userEmail)
            return res.send(user.rows)
        }catch(error){console.log(error)}
        
        
    }

exports.editUser=async function(req,res,next){
    try{
        const userId=req.body.id
        const user= await User.fetchById(userId)
        const UpdateFirstName=req.body.firstname;
        const UpdateLastName=req.body.lastName;
        const UpdateEmail=req.body.email;
        const UpdatePassword=req.body.password;
        user.firstName=UpdateFirstName
        user.lastName=UpdateLastName
        user.email=UpdateEmail
        user.password=UpdatePassword
        await user.save();
        return res.send({message:"user edit successfully"});
    }catch(error){console.log(error)}
}

exports.logInUser= async function(req,res,next){
    try{}catch(error){console.log(error)}
}

exports.deleteUserById= async function (req,res,next){
    try{
        const id= req.body.id;
        const user= await User.deleteUserById(id);
        return res.send({message:"user deleted successfully"});
    }catch (err){
        console.log(err)
    }
}