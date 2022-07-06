export function tokenValidation(req,res,next){
    const authorization = req.headers.authorization || "";
      const token = authorization.replace("Bearer ", "");
  
      if (!token) {
        throw {type:'unauthorized'}
      }
  
      let user;
  
      try {
        user = jwt.verify(token, process.env.JWT_SECRET);
        res.locals.user=user
        next()
      } catch {
        throw {type:'unauthorized'}   
        }
  
}