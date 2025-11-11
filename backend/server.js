import express from "express";
import {connectDB} from "./config/db.js";
import productRoutes from "./routes/product.route.js";
const app=express();

app.use(express.json());

app.use("/api/product",productRoutes)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT} http://localhost:${PORT}`)
});