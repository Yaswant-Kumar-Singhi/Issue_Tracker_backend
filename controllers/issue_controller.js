const Issue = require("../models/issue");
const Project = require("../models/project")

const slugify = require("slugify");

/*
module.exports.createIssue = async (req, res) => {
    try {
      Issue.create({
        project : req.params.id
      })
      console.log(req.body);
      console.log(slugify(req.body.title))
      req.body.slug = slugify(req.body.title);
      const newIssue = await new Issue(req.body).save();
      res.json(newIssue);
    } catch (err) {
      console.log(err);
      // res.status(400).send("Create product failed");
      res.status(400).json({
        err: err.message,
      });
    }
  };
*/

module.exports.create = async (req,res) => {
  try{
    
    let issue = await Issue.create({
      title : req.body.title,
      slug : req.body.title,
      description :  req.body.description,
      author:  req.body.author,
      project : req.params._id
    })
    if(req.xhr){
      issue = await issue.populate('project').execPopulate()
    }
    
  }
  catch(err){
    console.log('Error', err)

  }
}
  
module.exports.list = async (req, res) =>{
  let issuelist = await Issue.find({})
  .sort([["createdAt","desc"]])
  .exec()
  res.json(issuelist)
};

