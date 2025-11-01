import express from "express"

const app=express();

app.get("/",(req,res)=>{
    res.send("Server is ready to get started");
});

app.post('/api/product', async (req,res)=>{
    const product =req.body;
    if(!name || !price || !image){
        return res.status(400).json({success:false,message: 'Please provide with all input fields'})
    }
    const newProduct=new Product(product);
    try {
        await newProduct.save();
        res.status(200).json({success:true,message:newProduct})
    } catch (error) {
        console.log(`Error : ${error.message}`)
    }
})

app.listen(5000,()=>{
    console.log("http://localhost:5000")
})
//wYnqLJB46pC5IzBq
//mongodb+srv://muhammedosmanraheemkhan_db_user:xYd2zKEAJOJbgMuu@cluster0.gm3cgi2.mongodb.net/?appName=Cluster0