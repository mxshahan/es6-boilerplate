import express from 'express';
import config from './config';

console.log(config)

const app = express();

const port = process.env.PORT || 3005;
app.listen(port, (err) => {
  if(err) throw err
  console.log(`Server running at port ${port}`)
})