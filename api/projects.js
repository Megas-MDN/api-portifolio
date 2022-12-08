const express = require('express');
const dataProjects = require('../data/ProjectsData');
const projects = express.Router();

projects.get("/", async (_,res) => {
  try {
    res.json({
      status: 200,
      message: "Sucess",
      results: dataProjects,
    })
    
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro, Server Off");
  }
});

module.exports = projects;