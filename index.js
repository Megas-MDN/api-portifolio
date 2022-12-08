const express = require('express');
const projects = require('./api/projects');
const onGoing = require('./api/ongoing')

const app = express();

const port = process.env.PORT || 3000;

// app.use("/api/projects", project);
app.use("/api/projects", projects);
app.use("/api/ongoing", onGoing);

app.listen(port, () => console.log("Server ON"));