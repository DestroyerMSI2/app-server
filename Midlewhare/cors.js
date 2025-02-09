import c from 'cors'

 export const Cors = () => c((req,callback)=>{
   const puertos = [
    'http://localhost:3000/'
   ]
  
   const origin = req.header('Origin')

if(!origin || puertos.includes(origin) || !puertos.includes(origin)){
    return callback(null,true)
}
return callback(new Error('A ocurrido un error de cors'),false)

 })