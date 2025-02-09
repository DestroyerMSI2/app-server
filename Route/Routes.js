import { Router } from "express";
import { Controller } from '../Controller/controller.js';

 export function Routas({Modal}){
    const controller = new Controller({Modal:Modal})
    const router = Router();

   //router.post('/IA', controller.ChatIA);
    router.get('/empleados', controller.Empleados);
    router.get('/fotos/:title', controller.Fotos)
 return router
  }