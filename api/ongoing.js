const express = require('express');
const onGoProjects = require('../data/OnGoinData');
const projects = express.Router();

projects.get("/", async (_,res) => {
  try {
    res.json({
      status: 200,
      message: "Sucess",
      results: onGoProjects,
    })
    
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro, Server Off");
  }
});

module.exports = projects;