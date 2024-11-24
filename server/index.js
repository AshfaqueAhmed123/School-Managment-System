import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/connect.db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
  await connectDB();
})();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "All running good....",
  });
});

//routes
import adminRouter from "./src/routes/admin.routes.js";
import studentRouter from "./src/routes/student.routes.js"
import teacherRouter from "./src/routes/teacher.routes.js"
import parentRouter from "./src/routes/parent.routes.js"
import schoolRouter from "./src/routes/student.routes.js"

app.use("/admin", adminRouter);
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/parent", parentRouter);
app.use("/school", schoolRouter);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}...`);
});
