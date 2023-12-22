import express from "express"
import { deleteUser, getAllUsers, login, register } from "../controller/userController.js"
import auth from "../middleware/auth.js"


const router = express.Router()

router.post("/register",register)
router.get("/alluser",getAllUsers)
router.delete("/register/:id", auth,deleteUser)
router.post("/login",login)

export default router