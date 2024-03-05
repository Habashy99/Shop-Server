const express = require("express")
const router = express.Router()

const adminController = require("../controllers/admin")

router.use("/admins",adminController.getAllAdmins)
router.use("/id",adminController.getAdminById)
router.use("/email",adminController.getAdminByEmail)
router.use("/signUp",adminController.createAdmin)
router.use("/edit-admin",adminController.editAdmin)
router.use("/login-admin",adminController.logInAdmin)
router.post('/delete-admin', adminController.deleteAdminById);


module.exports = router;