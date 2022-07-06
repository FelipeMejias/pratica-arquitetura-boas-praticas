import Router from 'express'
import signInValidation from '../middlewares/signInValidation.js'
import signUpValidation from '../middlewares/signUpValidation.js'
import {signIn,signUp} from '../controllers/authController.js'

const authRouter=Router()
authRouter.post("/sign-up", signUpValidation , signUp );

  authRouter.post("/sign-in", signInValidation , signIn );

  export default authRouter