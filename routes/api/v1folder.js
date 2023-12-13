// router object for /api/v1folder enpoint
// import express
const express = require("express");
//create router object
const router = express.Router();
//configure handlers
// add CRUD FUNCTIONALITY
// TODO Create mapped to POST
// Read Mapped to GET
router.get("/", (req,res,next)=>{
    res.status(200).json("success");
})
// TODO UPDAET mapped to PUT
// TODO DELETE mapped to DELETE
//Export
module.exports = router;
