'use strict'

/*
|--------------------------------------------------------------------------
| PropriedadecontatoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PropriedadecontatoSeeder {
  async run () {
  
   await Factory.model("App/Models/Propriedade").createMany(5);
   await Factory.model("App/Models/Contact").createMany(10);

  }
}

module.exports = PropriedadecontatoSeeder
