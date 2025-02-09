import { api } from '../Api/api.js';  
  


export class Local {  
    static async ApiRes() {  

        if (Array.isArray(api)) {  
            const newapi = api.map(singleitem => {  
                const { numerodecarnet, nombre, apellidos, correo, cargo } = singleitem;  
                let img = `http://localhost:3000/fotos/${numerodecarnet}`;  
                return { numerodecarnet, nombre, apellidos, correo, cargo, img };  
            });  
            return newapi;  
        }  

       return('Ha ocurrido un problema, intente de nuevo por favor');  
    }  
}