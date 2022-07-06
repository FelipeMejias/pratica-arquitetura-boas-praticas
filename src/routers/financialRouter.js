import Router from 'express'
import {tokenValidation} from '../middlewares/tokenValidation.js'
import {eventValidation} from '../middlewares/eventValidation.js'
import {postEvent,getAllEvents,getSumOfEvents} from '../controllers/financialController.js'
const financialRouter=Router()
financialRouter.post("/financial-events", tokenValidation , eventValidation , postEvent);
  
  financialRouter.get("/financial-events", tokenValidation , getAllEvents );
  
  financialRouter.get("/financial-events/sum", tokenValidation , getSumOfEvents );

  export default financialRouter