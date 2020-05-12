'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactsSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments();
      table.string("nome_contato", 80).notNullable();
      table.string("email",35).notNullable();
      table.string("numero",15).notNullable();
      table.integer('propriedade_id').unsigned().notNullable().references('id')
      .inTable('propriedades').onUpdate().onDelete();
   
      //unsigned para valor não ficar abaixo de zero
      ////table.integer('idpropriedadef').unsigned().notNullable();
      //add futuramente um array com as chaves de propriedades
      ////table.foreign('idpropriedadef').references('id').inTable('propriedades').
      //onUpdate().onDelete();
      table.timestamps();
    })
  }

  down () {
    this.drop('contacts');
  }
}

module.exports = ContactsSchema
