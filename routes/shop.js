const express = require('express');

const fs = require('fs');

const router = express.Router();

// router.get( '/', (req, res, next)=>{
//         fs.readFile('message.txt', (err, data) => {
//             res.setHeader('Content-Type', 'text/html');
//             res.write(data);
//             res.end();})

//     res.send(`<form action='/' method='POST'><input type='text' name='message'><button type="submit">Send</button></form>`);
// })


// Serve the send message form when the user navigates to "/"
router.get('/', (req, res) => {
  const messages = fs.readFileSync('messages.txt', 'utf-8').split('\n');
    res.send(`
      <ul>
        ${messages.map(message => `<li>${message}</li>`).join('')}
      </ul>
      <br>
        <form method="POST" action="/" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
          <input type="text" name="message" id="message" required>
          <input type="hidden" name="username" id="username">
          <button type="submit">Send</button>
        </form>
      `);    
  });
  
  // Store the message in a file with the username as a key
  router.post('/', (req, res) => {
    const { username, message } = req.body;
    const {  } = req.body.message;
    fs.appendFileSync('messages.txt', JSON.stringify({ [username]: message }) + '\n');
    res.redirect('/');
  });  

module.exports = router;
