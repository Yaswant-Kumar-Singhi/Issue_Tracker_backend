const express = require("express");
const router = express.Router();



// controller
const projectController = require("../controllers/project_controller");

// routes
router.post("/project",  projectController.create);
router.get("/projects",  projectController.list);


module.exports = router;
