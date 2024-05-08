import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5050;
const SERVER_URI = process.env.SERVER_URI || `http://localhost:${PORT}`; // Define server URI

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/record", records); // Route all API endpoints with /api/records to records router

app.get("/test", async (req, res) => {
  console.log("testing main");
  res.send("testing main here").status(200);
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Server URI: ${SERVER_URI}`);
});