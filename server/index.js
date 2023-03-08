import express  from "express";
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import dallERoutes from "./routes/dall-e-routes.js"

dotenv.config();
const PORT = process.env.PORT || 8090;
const app = express();

app.use(cors())
app.use(express.json({limit: "50mb"}));
app.use("/api/v1/post", postRoutes)
app.use("/api/v1/dalle", dallERoutes)

app.get("/", async(req, res)=>{
    res.send("Hello from DALL-E AI!!!")
})


const startServer = async() => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>console.log("Server started on port http://localhost:8090"))
    }catch(err){
        console.log("err>>>>>>>>", err)
    }
    
 }

 startServer()