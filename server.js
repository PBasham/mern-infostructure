/*========================================
        Require Dependencies
========================================*/
const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")
const exp = require("constants")
require("dotenv").config()
require("./config/database.js")

/*========================================
        Create Application
========================================*/
const app = express()

/*========================================
        Middlewear
========================================*/

app.use(logger("dev"))
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/*========================================
        Routes
========================================*/
// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;
/*========================================
        Listener
========================================*/
app.listen(port, () => {
  console.log(`Express app running on port ${port}`)
});