export default function signInValidation(req,res,next){
    const { email, password } = req.body;
  
      if (!email || !password) {
        throw {type:'bad body'};      
      }

      next()
}