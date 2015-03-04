// Let's get all our packages loaded in:
var dotenv = require('dotenv'); 
var todoist =
require('node-todoist');

// Load our configurations from .env
dotenv.load();

// Authenticate with todoist
todoist.login({email: process.env.TODOIST_USER, 
               password: process.env.TODOIST_PASS})
.then(
  function(user){ 
    console.log(user['token']);
    console.log(user); 
  },
  function(e) { 
    console.error(e); 
  }
)

// Get projects from todoist
todoist.request('getProjects', user.token)
    .then(function(projects){
        //console.log(projects)
    },
    function(e) { console.error(e); });
