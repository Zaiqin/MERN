import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/record", records); // Route all API endpoints with /api/records to records router

app.get("/test", async (req, res) => {
  console.log("testing main")
  res.send("testing main here").status(200);
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});