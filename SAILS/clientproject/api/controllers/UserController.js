/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var bcrypt = require('bcrypt');
var localStorage = require('localStorage');
//const User = require('../models/User');


module.exports = {
   create: function(req, res){
        User.create(req.allParams(), function userCreated(err, user){
            if(err){
                return res.send("Erreur:" + err);
            }
            else{
                return res.redirect('/');
            };
        });
    },

    login: function(req, res){
        var matricule = req.param('matricule');
        var password = req.param('password');
        
        User.findOne({matricule:matricule}).exec(function(err, user){

            if(err || !user){
                return res.send('verificer votre matricule ou mot de passe', 500);
            }

        bcrypt.compare(password, user.password, function(err, valid){
                if(err || !valid)
                    return res.send('Mot de passe incorrecte', 500)

                req.session.authenticated = true;
                req.session.User = user;

               /* localStorage.setItem('auth', req.session.User.matricule);
                var auth = localStorage.getItem("auth");
                console.log(auth);*/

                return res.redirect('/vue');  //chemin dans le config/route              
            });        
        }); 
    },

    modif: function(req, res){
        var matricule = req.param('matricule');
        var password = req.param('password');
        User.updateOne({matricule:matricule}, {password:password}, function(err){
            if(err){
                return res.send(err);
            } else {
                res.redirect('/');
            }
        });
    }
}