const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const activities = require("./routes/activities");

app.use(express.static("./public"));
app.use(cors());

app.use("/activities", activities);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
