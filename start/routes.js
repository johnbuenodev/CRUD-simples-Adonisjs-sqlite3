'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
//importar as models
const Propriedade = use("App/Models/Propriedade");
const Contact = use("App/Models/Contact");

Route.get('/home', () => {
  return { message: 'API simples Version 1.0.0.' }
})

Route.get("/propriedades", async ()=>{
  try {
    const propriedades = await Propriedade.query()
    .orderBy("id","desc")
    .fetch();
    //return await Propriedade.all();
  
    return propriedades;
  } catch (error) {
    return { message: "Error" + error}
  }
  
})

Route.get("/propriedades/:id", async ({params}) => {
  try {
    const propriedade = await Propriedade.query()
    .with("contacts") 
    .where("id", params.id)
    .first(); //tras o primeiro

    return propriedade;
    
  } catch (error) {

    return { message: "Error" + error}
  }
  

})

Route.post("/propriedades", async({request})=>{
 try {
   const propriedade = new Propriedade();
   propriedade.nome_propriedade = request.input("nome_propriedade");
   propriedade.contatos_contador = request.input("contatos_contador");
   propriedade.dispositivos_contador = request.input("dispositivos_contador");
   propriedade.endereco = request.input("endereco");
   //long
   //lat
   propriedade.cep = request.input("cep");
   propriedade.estado = request.input("estado");
   propriedade.pais = request.input("pais");

   await propriedade.save();

   return propriedade;
   
 } catch (error) {
   return { message: "Error" + error}
 }

})

Route.delete("/propriedades/:id", async ({params}) =>{

  try {

    const propriedade = await Propriedade.findOrFail(params.id);
    return propriedade.delete();

  } catch (error) {
    return { message: "Error" + error }
  }
})

Route.put("/propriedades/:id", async ({params,request}) =>{
  
   try {
    const propriedade = await Propriedade.findOrFail(params.id);
    const data = request.only(["nome_propriedade","contatos_contador","dispositivos_contador","endereco","cep","estado","pais"]); 
    
    propriedade.merge(data);
    await propriedade.save();

    return propriedade;

   } catch(error){ 
     return {message: "Error" + error}
   }

})

Route.get("/contacts", async ()=>{
  try{
    const contacts = await Contact.query()
    .orderBy("id","desc")
    .fetch();

    return contacts;
  } catch(error){
    //console.error(err);
    return { message: "Error" + error} 
  }
  
  
 
})

Route.get("/contacts/:id", async ({params}) => {
  try {
    const contact = await Contact.query()
    .where("id", params.id)
    .first(); //tras o primeiro
  
    return contact;
  } catch (error) {
    return {message: "Error" + error}
  }
 

})

Route.post("/contacts", async ({request}) => {
  try {
    const contact = new Contact();
    contact.nome_contato  = request.input("nome_contato");
    contact.email  = request.input("email");
    contact.numero  = request.input("numero");
    contact.propriedade_id  = request.input("propriedade_id");
    await contact.save();
    return contact;
    
  } catch (error) {
    return { message: "Error" + error} 
  }

})

Route.delete("/contacts/:id", async ({params}) =>{

  try {
   
    const contact = await Contact.findOrFail(params.id);
    return contact.delete();

  } catch (error) {
    return { message: "Error" + error }
  }
})

Route.put("/contacts/:id", async ({params,request}) =>{
  
  try {
    
    const contact = await Contact.findOrFail(params.id);
    const data = request.only(["nome_contato","email","numero","propriedade_id"]);

    contact.merge(data);
    await contact.save();

    return contact;

  } catch (error) {
    return { message: "Error: " + error }
  }


})