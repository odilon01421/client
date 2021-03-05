/**
 * Produit.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    type: { type: 'string', required: true },
    marque: { type: 'string', required: true },
    prix: {type: 'number', required: true},
    couleur: { type: 'string', required: true },
 
   },
 
   datastore: 'default',

};

