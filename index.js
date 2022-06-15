const express = require('express');
const app = express();
const port = 3001;

const api = require('./Router/api');

app.use(express.json());
app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`server on port is ${port}`));
