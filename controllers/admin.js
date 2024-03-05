const Admin = require("../models/admin")
exports.createAdmin=async function(req,res,next){
try{
    const firstName=req.body.firstname;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const password=req.body.password;
    const admin= new Admin(undefined,firstName,lastName,email,password);
    await admin.save();
    return res.send({message:"Admin create successfully"});
}catch(error){
    console.log(error)
}
}

exports.getAllAdmins= async function (req,res,next){
try{
    const admins=await Admin.fetchAllAdmin();
    return res.send(admins.rows)
}catch(error){console.log(error)}


}

exports.getAdminById= async function (req,res,next){
    try{
        const adminId= req.body.id
        console.log(adminId)
        const admin = await Admin.fetchAdminById(adminId);
        return res.send(admin.rows)
    }catch(error){console.log(error)}
    
    
    }

    exports.getAdminByEmail= async function (req,res,next){
        try{
            const adminEmail=req.body.email;
            const admin= await Admin.fetchAdminByEmail(adminEmail)
            return res.send(admin.rows)
        }catch(error){console.log(error)}
        
        
    }

exports.editAdmin=async function(req,res,next){
    try{
        const adminId=req.body.id
       const admin= await Admin.fetchAdminById(adminId) 
       return res.send(admin.rows);
    }catch(error){console.log(error)}
}

exports.logInAdmin= async function(req,res,next){
    try{}catch(error){console.log(error)}
}

exports.deleteAdminById= async function (req,res,next){
    try{
        const id= req.body.id;
        const admin= await Admin.deleteAdminById(id);
        return res.send({message:"admin deleted successfully"});
    }catch (error){
        console.log(error)
    }
}