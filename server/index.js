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
import classRouter from "./src/routes/class.routes.js"
import meetingRouter from "./src/routes/meeting.routes.js"

app.use("/admin", adminRouter);
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/parent", parentRouter);
app.use("/school", schoolRouter);
app.use("/class", classRouter);
app.use("/meeting", meetingRouter);


// AuthRoutes
import authRouter from "./src/routes/auth.routes.js"
app.use("/Auth",authRouter)

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}...`);
});
