const { user_game_history } = require('../models/index.js')

class historyController{
    static viewAll(req,res){
        user_game_history.findAll({
            order:[['id','ASC']]
        })
        .then((data) => {
            res.render('user_history/userhistory.ejs', { data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static getAddFunction(req,res){
        res.render('user_history/adduserhistory.ejs')
    }

    static addFunction(req,res){
        let obj = {
            total_win : req.body.total_win,
            total_lose : req.body.total_lose,
            total_loggedin : req.body.total_loggedin,
            total_plays : req.body.total_plays
        }
        user_game_history.create(obj)
        .then(() => {
            res.redirect('/historicaldata')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static getEditFunction(req,res){
        let id = req.params.id
        user_game_history.findByPk(id)
        .then((data) => {
            res.render('user_history/edithistory.ejs', { data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static editFunction(req,res){
        let id = req.params.id
        let obj = {
            total_win : req.body.total_win,
            total_lose : req.body.total_lose,
            total_loggedin : req.body.total_loggedin,
            total_plays : req.body.total_plays
        }
        user_game_history.update(obj, {
            where: {
                id : id
            }
        })
        .then(() => {
            res.redirect('/historicaldata')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static deleteFunction(req,res){
        let id = req.params.id
        user_game_history.destroy({
            where : {
                id : id
            }
        })
        .then(() => {
            res.redirect('/historicaldata')
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

module.exports = historyController