const { user_game_biodata } = require('../models/index')

class biodataController{
    static viewAll(req,res){
        user_game_biodata.findAll({
            order: [["id",'ASC']]
        })
        .then((data) => {
            res.render('user_game_biodata/biodata2.ejs', { data })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static getAddFunction(req,res){
        res.render('user_game_biodata/addbiodata.ejs')
    }

    static addFunction(req,res){
       let obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            birth_date: req.body.birth_date,
            gender: req.body.gender
        }
        user_game_biodata.create(obj)
        .then(() => {
            res.redirect('/biodata')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static getEditFunction(req, res) {
        const id = req.params.id
        user_game_biodata.findByPk(id)
          .then((data) => {
            res.render('user_game_biodata/editbiodata.ejs', { data })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    

    static editFunction(req,res){
        let id = req.params.id
        let obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            birth_date: req.body.birth_date,
            gender: req.body.gender
        }
        user_game_biodata.update(obj, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/biodata')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    static deleteFunction(req,res){
        let id = req.params.id
        user_game_biodata.destroy({
            where : {
                id : id
            }
        })
        .then(() => {
            res.redirect('/biodata')
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

module.exports = biodataController