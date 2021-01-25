const express = require("express");

const router = express.Router();



// controller
const issueController = require("../controllers/issue_controller");

// routes
router.post("/issue",  issueController.createIssue);



module.exports = router;
