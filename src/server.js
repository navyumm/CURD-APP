import dotenv from "dotenv";
import { connectDB } from "./config/dbConnect";
import app from "./app";

dotenv.config();


connectDB();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`✈️ Server is running at http://localhost:${PORT}`);   
})