const express = require("express");
const Queue = require("bull");
const bodyParser = require("body-parser");
const { sendNewMail } = require("./src/queues/mail.queue");
const cron = require("node-cron");

const app = express();
app.use(bodyParser.json());

app.use("/bull", (req, res) => {
  sendNewMail({
    name: "name",
    age: 18,
  });
  return res.send("oki");
});

cron.schedule("1-59 * * * *", () => {
  console.log("running a task every minute");
});

app.use("/", (req, res) => {
  res.json("ok");
});
app.listen(5000, () => {
  console.log(5000);
});
