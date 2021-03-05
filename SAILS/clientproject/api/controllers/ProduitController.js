/**
 * ProduitController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Produit = require("../models/Produit");

module.exports = {
 create : function(req, res){
    var type = req.param('type');
    var marque = req.param('marque');
    var prix = req.param('prix');
    var couleur = req.param('couleur');
     Produit.create({type:type, marque:marque, prix:prix, couleur:couleur }, function(err){
         if(err){
             return res.send(err);
         }
         else{
             res.redirect('/produit');
         }
     })
 },

 affiche: function(req, res){
     Produit.find(function(err, produit){
        if(err){
            res.send(err);
        }
        else{
            res.view('pages/produit', {produit: produit});
        }
    })
 }

};
