'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Propriedade', faker =>({
    nome_propriedade: faker.name(),
    contatos_contador: faker.integer({min:1,max:5}),
    dispositivos_contador: faker.integer({min:5,max:30}),
    endereco: "Km 145",
    latitude: 0,
    longitude: 0,
    cep: "19807-210",
    estado: "sp",
    pais: "brasil"

}));

Factory.blueprint('App/Models/Contact', faker =>({
    nome_contato: faker.name(),
    email: faker.email(),
    numero: "99722-0304",
    //max 5 propriedades
    propriedade_id: faker.integer({min:1,max:5})

}));