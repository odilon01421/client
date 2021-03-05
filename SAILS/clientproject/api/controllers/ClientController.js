/**
 * ClientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const { Client } = require("pg-promise/typescript/pg-subset");


module.exports = {
  // create: function(req, res){
  //   Client.create(req.allParams(), function createClient(err, client){
  //         if(err){
  //             return res.send('erreur' + err);
  //         }
  //     });
  // },

  affiche: function(req, res){
    Client.find(function(err, client){
      if(err) return res.send(err);
     // console.log(client);
      res.view('pages/vue', {client:client});
    });
  },

  ajout: function(req, res){
    var nom = req.param('nom');
    var prenom = req.param('prenom');
    var ville = req.param('ville');
    var tel = req.param('tel');
  // var client = {nom, prenom, tel};
    Client.create({nom:nom, prenom:prenom, ville:ville, tel:tel}, function(err){
      if(err){
        return res.send(err);
      }
      else{
        res.redirect('/vue');
      }
    })
    
  },

  affiche_client: function(req, res){
    var id = req.param('id');
    Client.findOne(id, function (err, client){
      if(err){
        return res.send(err);
      }
      else{
        res.view('login_register/edit_client', {client:client});
      }
    })
  },

  editer: function(req, res){
    var id = req.param('id');
    var nom = req.param('nom');
    var prenom = req.param('prenom');
    var ville = req.param('ville');
    var tel = req.param('tel');
    Client.updateOne(id, {nom:nom, prenom:prenom, ville:ville, tel:tel}, function(err){
      if(err){
        return res.send(err);
      }
      else{
        res.redirect('/vue');
      }
    })
  },

  supprimer: function(req, res){
    var id = req.param('id');
    Client.destroy(id, function(err){
      if(err){
        return res.send(err);
      }
      else{        
        res.redirect('/vue');
      }
    })
  },

  notification: function(req, res){
    console.log('ok');
  }

  
};

