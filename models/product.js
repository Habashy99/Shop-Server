const { deleteProduct } = require("../controllers/admin")
const db = require("../database")

module.exports= class Product{
    constructor(id,adminId,title,price,image){
        this.id=id,
        this.adminId=adminId,
        this.title=title,
        this.price=price,
        this.image=image
    }
    save(){
        return db.query(`INSERT INTO products (admin_id, title, price,image) VALUES ($1, $2, $3, $4) RETURNING *`, [this.adminId, this.title, this.price,this.image])
    }
    static deleteProductById(id,adminId){
        return db.query(`DELETE FROM products WHERE product_id = ($1) AND admin_id=($2)`,[id,adminId])
    }
    static fetchAll(){
        return db.query(`SELECT * FROM products `)
    }
    static fetchProductById(id){
        return db.query(`SELECT * FROM products WHERE product_id=($1)`,[id])
    }
    static fetchProductsByAdminId(adminId){
        return db.query(`SELECT * FROM products WHERE admin_id=($1)`,[adminId])
    }
}