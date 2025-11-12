import express from "express";
import {connectDB} from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";
import { fileURLToPath } from "url";
const app=express();

app.use(express.json());

app.use("/api/product",productRoutes)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
    const distPath = path.join(__dirname, "..", "frontend", "dist");
    app.use(express.static(distPath));
    app.get("(/)", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
    });
}

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT} http://localhost:${PORT}`)
});