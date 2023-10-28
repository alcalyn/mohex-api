import express from 'express';
import api from './api';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.type('text/plain').send('Mohex API');
})

app.use('/api', api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
