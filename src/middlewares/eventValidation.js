export function eventValidation(req,res,next){
    const { value, type } = req.body;
  
      if (!value || !type) {
        throw {type:'bad body'};
      }
  
      const financialTypes = ["INCOME", "OUTCOME"];
      if (!financialTypes.includes(type)) {
        throw {type:'bad body'};
      }
  
      if (value < 0) {
        throw {type:'bad body'};     
      }
  
      next()
}