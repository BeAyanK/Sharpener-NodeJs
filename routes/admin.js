const express = require('express');

// const {LocalStorage} = require('node-localstorage');

const router = express.Router();

// const localStorage = new LocalStorage('./scratch');

// router.get('/login', (req, res, next) => { // console.log('In other middleware!')
//     res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" id='username' action='/login' method='POST'>
//     <input type='text' name='username'>
//     <button type="submit">Login</button>
//     </form>`);
// })

// router.post('/login', (req, res, next) => {
//     console.log(req.body)

//     res.redirect('/');
// })

router.get('/login', (req, res) => {
    res.send(`
      <form method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)"  action="/login">
        <label>Username:</label>
        <input type="text" name="username" id='username' required>
        <button type="submit">Login</button>
      </form>
    `);
  });
  
  // Store the username in local storage and redirect to "/"
  router.post('/login', (req, res) => {
    // const { username } = req.body;
    // localStorage.setItem('username', username);
    res.redirect('/');
  });

module.exports = router;
