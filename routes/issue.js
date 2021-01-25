const express = require("express");

const router = express.Router();



// controller
const issueController = require("../controllers/issue_controller");

// routes
router.post("/project/:_id/issue",  issueController.create);
router.get("/issuelist/",issueController.list)



module.exports = router;
