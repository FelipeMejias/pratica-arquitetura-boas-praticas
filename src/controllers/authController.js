import { authRepository } from "../repositories/authRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function signUp(req, res){
      const { name, email, password } = req.body;

      const existingUsers = await authRepository.selectUserByEmail(email)
      if (existingUsers.rowCount > 0) {
        throw {type:'bad body'};
      }
  
      const hashedPassword = bcrypt.hashSync(password, 12);
      await authRepository.insertUser(name, email, hashedPassword)
  
      res.sendStatus(201);
  }

export async function signIn(req, res){
          const { email, password } = req.body;
      
          const { rows } = await authRepository.selectUserByEmail(email)
          const [user] = rows;
      
          if (!user || !bcrypt.compareSync(password, user.password)) {
            throw {type:'unauthorized'};
          }
      
          const token = jwt.sign(
            {
              id: user.id,
            },
            process.env.JWT_SECRET
          );
      
          res.send({token});
      }