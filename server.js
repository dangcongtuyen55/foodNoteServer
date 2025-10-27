import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import restaurantRoutes from "./src/routes/restaurantRoute.js";

dotenv.config();
const app = express();

// Middleware parse JSON
app.use(express.json());

// Kết nối MongoDB
connectDB();

app.use(cors("*"));
// app.options("*", cors());

// Routes
app.use("/api/restaurants", restaurantRoutes);

// Uploads (menu images)
import path from "path";
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Test route
app.get("/", (req, res) => res.send("Server running..."));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
