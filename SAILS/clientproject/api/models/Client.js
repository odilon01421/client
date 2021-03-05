/**
 * Client.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   nom: { type: 'string', required: true },
   prenom: { type: 'string', required: true },
   ville: {type: 'string', required: true},
   tel: { type: 'number', required: true },

  },

  datastore: 'default'

};

