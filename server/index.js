const express = require ('express');
const app = express();
const port = 4001;

app.use(express.json())


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});