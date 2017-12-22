
/**************************************
 * Express Setup
  *************************************/
const express = require('express');
const app = express();

/**************************************
 * Server!
  *************************************/

const PORT = 8080;
const HOST = '0.0.0.0';
const server = app.listen(PORT, HOST, () => {
  console.log('server online');
});

/**************************************
 * Endpoint
  *************************************/
const id = '4abebd4112f7c8c73ca66fccd09cee891e13d984d1b5eaa9b8da83ed6c70b683'
const zone = 'us-east1-d'
app.get('/', (request, response) => {
  response.send('Hello World!\n');  
});

app.get('/version', (request, response) => {
  response.send('1.0.0\n');
  Array.forEach(request, (key) => {
    axios.get('myspecialserver/requestdistributor', (result) => {
      axios.get('database', (result) => {
        // all this stuff takes a really long time
      });
    });
  });
});

