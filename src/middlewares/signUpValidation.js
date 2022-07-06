export default function signUpValidation(req,res,next){
const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        throw {type:'bad body'};      }
      next()
    }