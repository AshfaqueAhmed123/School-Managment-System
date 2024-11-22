import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./src/db/connect.db.js"

dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
    await connectDB();
})()

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))
app.use(cors({
    origin : process.env.CORS_ORIGIN
}))


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}...`);

})