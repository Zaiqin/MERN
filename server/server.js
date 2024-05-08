import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

const options = {
  origin: "http://localhost:5173"
}

app.use(cors(options));
app.use(express.json());
app.use("/api/record", records); // Route all API endpoints with /api/records to records router

app.get("/test", async (req, res) => {
  console.log("testing main")
  res.send("testing main heres").status(200);
});

app.get("/abc", cors(options), async (req, res) => {
  console.log("testing cors")
  res.send("testing cors heres").status(200);
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});