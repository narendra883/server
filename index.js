const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require("cors");
const employeeRoutes = require('./Routes/employeeRoute');


require("dotenv").config();
const { MONGO_URL, PORT } = process.env;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));


app.use(bodyParser.json());

app.use('/api',employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


