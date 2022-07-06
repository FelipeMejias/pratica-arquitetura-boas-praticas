import { financialRepository } from "../repositories/financialRepository.js";
import { findSum } from '../services/findSum.js'
export async function postEvent(req, res){
    try {
      const {user} = res.locals 
      const { value, type } = req.body;
      await financialRepository.insertEvent(user.id, value, type)
  
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

  export async function getAllEvents(req, res){
    try {
        const {user} = res.locals 
      const events = await financialRepository.selectEvents(user.id)
  
      res.send(events.rows);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

export async function getSumOfEvents (req, res) {
    try {
        const {user} = res.locals 
        const events = await financialRepository.selectEvents(user.id)
  
      const sum = findSum(events.rows)
  
      res.send({ sum });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }