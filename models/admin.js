const db = require("../database")

module.exports= class Admin{
    constructor(id,firstname,lastname,email,password){
        this.id=id,
        this.firstname=firstname,
        this.lastname=lastname,
        this.email=email,
        this.password=password
    }

    save(){
        return db.query(`INSERT INTO admins (firstname,lastname,email,password) VALUES($1,$2,$3,$4)`[this.firstname,this.lastname,this.email,this.password])
    }
    static deleteAdminById(id){
        return db.query(``,[id])
    }
    static fetchAllAdmin(){
        return db.query(`SELECT * FROM admins`)
    }
    static fetchAdminById(id){
        return db.query(`SELECT * FROM admins WHERE admin_id = ($1)`,[id])
    }
    static fetchAdminByEmail(email){
        return db.query(`SELECT * FROM admins WHERE email = ($1)`,[email])
    }

}