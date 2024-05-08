import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

// Configure CORS dynamically
const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin is allowed (you can implement your logic here)
    const allowedOrigins = ['https://mern-client-eight-nu.vercel.app', 'http://localhost:5173'];
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
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