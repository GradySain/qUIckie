/*
 ______     __  __     __     ______     __  __     __     ______    
/\  __ \   /\ \/\ \   /\ \   /\  ___\   /\ \/ /    /\ \   /\  ___\   
\ \ \/\_\  \ \ \_\ \  \ \ \  \ \ \____  \ \  _"-.  \ \ \  \ \  __\   
 \ \___\_\  \ \_____\  \ \_\  \ \_____\  \ \_\ \_\  \ \_\  \ \_____\ 
  \/___/_/   \/_____/   \/_/   \/_____/   \/_/\/_/   \/_/   \/_____/ 
*/


//https://expressjs.com/en/starter/installing.html

// requires
const path = require('path');
// npm install express --save
const express = require('express');
const app = express();



// html server
app.use(express.static(path.join(__dirname, 'public')));

var port = 9876;

// on get request
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
  });

// start the web server
app.listen(port);
console.log('Server started! At http://localhost:' + port);  