const db = require("../database")
module.exports = class User{
    constructor(id,firstName,lastName,email,password){
        this.id=id,
        this.firstName=firstName,
        this.lastName=lastName,
        this.email=email,
        this.password=password
    }
    save(){
        return db.query(`INSERT INTO users (firstname,lastname,email,password)VALUES($1,$2,$3) RETURNING *` , [this.firstName,this.lastName,this.email,this.password])
    }
    static deleteUserById(id){
        return db.query(`DELETE FROM users WHERE user_id = ($1)`, [id])
    }
    static deleteUserByEmail(email){
        return db.query(`DELETE FROM users WHERE email = ($1)`, [email])
    }
    static fetchAll(){
        return db.query(`SELECT * FROM USERS`)
    }
    static fetchById(id){
        return db.query(`SELECT * FROM USERS WHERE user_id = ($1)`, [id])
    }
    static fetchByEmail(email){
        return db.query(`SELECT * FROM USERS WHERE email = ($1)`, [email])
    }
}