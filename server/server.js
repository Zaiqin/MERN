import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5050"; // Change the default value to match your development environment
const app = express();

app.use(cors());
app.use(express.json());
app.use(`${API_BASE_URL}/record`, records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
