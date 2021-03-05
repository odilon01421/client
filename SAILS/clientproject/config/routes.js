/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 '/': { view: 'login_register/login' },

  '/creer_compte': { view: 'login_register/creer_compte' }, 

  'post /creer_compte' : 'UserController.create',

  'post /login' : 'UserController.login',

  '/vue' : 'ClientController.affiche',

  '/modif_compte' : {view: 'login_register/modif_compte'},

  'post /modif_compte' : 'UserController.modif',

  '/form_client' : { view: 'login_register/form_client' },

  'post /form_client' : 'ClientController.ajout',    

  '/edit_client/:id' : 'ClientController.affiche_client',

  'post /update_client/:id' : 'ClientController.editer',

  '/suppr_client/:id' : 'ClientController.supprimer',

  '/creer_produit': {view: 'login_register/creer_produit'},

  'post /creer_produit': 'ProduitController.create',

  '/produit': 'ProduitController.affiche',


  

  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
