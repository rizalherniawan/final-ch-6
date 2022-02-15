const { user_game } = require('../models/index.js')

class userController{
    static viewAll(req,res){
        user_game.findAll({
            order:[['id','ASC']]
        })
        .then((data) => {
            res.render('user_list/userlist.ejs', { data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static getAddFunction(req,res){
        res.render('user_list/adduserlist.ejs')
    }

    static addFunction(req,res){
        let obj = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }
        user_game.create(obj)
        .then(() => {
            res.redirect('/userlist')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static getEditFunction(req,res){
        const id = req.params.id
        user_game.findByPk(id)
        .then((data) => {
            res.render('user_list/edituserlist.ejs', { data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static editFunction(req,res){
        let id = req.params.id
        let obj = {
            username: req.body.username,
            password: req.body.password,
            email : req.body.email
        }
        user_game.update(obj,{
            where: {
                id : id
            }
        })
        .then(() => {
            res.redirect('/userlist')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static deleteFunction(req,res){
        let id = req.params.id
        user_game.destroy({
            where : {
                id : id
            }
        })
        .then(() => {
            res.redirect('/userlist')
        })
        .catch((error) => {
            console.log(error)
        })
    }


}

module.exports = userController

  