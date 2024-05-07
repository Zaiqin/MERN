import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/record", records); // Changed from "/record" to "/api/record" for consistency

// Export the Express app as a serverless function
export default app;
