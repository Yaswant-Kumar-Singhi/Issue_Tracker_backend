const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const issueSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        text: true,
      },
      slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
      },
      description: {
        type: String,
        required: true,
        maxlength: 2000,
        text: true,
      },
      author : {
        type: String,
        required: true,
        maxlength: 200,
        text: true,
      },
      project: {
        type: ObjectId,
        ref : "Project"
      }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Issue", issueSchema);