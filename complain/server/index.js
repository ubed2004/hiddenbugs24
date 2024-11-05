const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Route =require("./routes/route")

const PORT = process.env.PORT || 4000;

const app =express();
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

app.use("/api", Route);

  app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });