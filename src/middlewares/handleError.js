export default async function handleError(err,req,res,next){
    if(err.type=='unauthorized'){res.sendStatus(401)}
    else if(err.type=='bad body'){res.sendStatus(422)}
    else{res.sendStatus(500)}
}