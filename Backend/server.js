const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();

//middleware
app.use(express.json());
 
app.use('/api',require('./route/userRouter'))


const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Servrt Running on port ${PORT}`);
});
