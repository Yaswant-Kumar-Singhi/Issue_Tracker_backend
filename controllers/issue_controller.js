const Issue = require("../models/issue");
const Project = require("../models/project")

const slugify = require("slugify");


module.exports.createIssue = async (req, res) => {
    try {
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
