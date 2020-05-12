'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropriedadesSchema extends Schema {
  up () {
    this.create('propriedades', (table) => {
      table.increments();
      table.string("nome_propriedade", 80).notNullable().unique();
      table.integer("contatos_contador").defaultTo(0);
      table.integer("dispositivos_contador").defaultTo(0);
      table.string("endereco",80).notNullable();
      table.decimal("latitude", 9, 6).notNullable()
      table.decimal("longitude", 9, 6).notNullable()
      table.string("cep",30).notNullable();
      table.string("estado",2).notNullable();
      table.string("pais",15).notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('propriedades')
  }
}

module.exports = PropriedadesSchema
