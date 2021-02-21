const Project = require("../models/project");
const Issue = require("../models/issue")

const slugify = require("slugify");


module.exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.name);
    const newProject = await new Project(req.body).save();
    res.json(newProject);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};


module.exports.list = async (req, res) =>{
  let projects = await Project.find({})
  .sort([["createdAt","desc"]])
  .exec()
  res.json(projects)
};


module.exports.read = async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug}).exec();

  // getting issue related to a project
  const issue = await Issue.findOne({project})
  .populate("project")
  .populate("issue ")
  .exec()

  res.json({
    project,
    issue});
};







 