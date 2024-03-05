const express = require("express")
const userController=require("../controllers/user")
const router = express.Router()

router.use("/users",userController.getAllUsers)
router.use("/id",userController.getUserById)
router.use("/email",userController.getUserByEmail)
router.use("/signUp",userController.createUser)
router.use("/edit-user",userController.editUser)
router.use("/login-user",userController.logInUser)
router.post('/delete-user', userController.deleteUserById);

module.exports = router;