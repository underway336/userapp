const db = require("../models/index.models.js");
const User = db['users'];

// get users
exports.getUsers = function(req, res,){
  User.findAll({raw: true }).then(data=>{  
    res.render("index.hbs", {
      users: data
    });
}).catch(err=>console.log(err));
  
};
// get create page:
exports.getCreate = function(req, res){
     res.render("create.hbs");
};

// create users:
exports.addUser = function (req, res) {

    if(!req.body) return res.sendStatus(400);
         
    const username = req.body.name;
    const userage = req.body.age;
    User.create({ name: username, age: userage}).then(()=>{
      res.redirect("/");
    }).catch(err=>console.log(err));
};
 
// get user for edit:
exports.idForEdit = function(req, res){
  const userid = req.params.id;
  User.findAll({where:{id: userid}, raw: true })
  .then(data=>{
    res.render("edit.hbs", {
      user: data[0]
    });
  })
  .catch(err=>console.log(err));
};

// update DB
exports.userEdit = function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
 
  const username = req.body.name;
  const userage = req.body.age;
  const userid = req.body.id;
  User.update({name:username, age: userage}, {where: {id: userid} }).then(() => {
    res.redirect("/");
  })
  .catch(err=>console.log(err));
};

// delete data
exports.deleteUser = function(req, res){  
  const userid = req.params.id;
  User.destroy({where: {id: userid} }).then(() => {
    res.redirect("/");
  }).catch(err=>console.log(err));
};