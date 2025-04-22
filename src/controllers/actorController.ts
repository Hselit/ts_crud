import {db} from '../config/dbconfig';
import { Request, Response } from 'express';

export const getActors = (req:Request,res:Response)=>{
   db.query('Select * from actors',(err,results)=>{
      if(err){
         console.error(err);
         res.status(500).json({error:"Failed to fetch Actors"});
      }
      else{
         res.json(results);
      }
   });
}