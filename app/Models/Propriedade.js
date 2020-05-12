'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Propriedade extends Model {
   contacts(){
       return this.hasMany("App/Models/Contact");
   }

}

module.exports = Propriedade
