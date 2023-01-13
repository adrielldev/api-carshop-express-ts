import express from "express";
import announcementsRouter from "./routes/announcements";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import userRouter from "./routes/users";
import commentsRouter from "./routes/comments";

const app = express();
const cors = require("cors");

app.use(express.json({limit:"50mb"}));
app.use(cors({ origin: ["http://127.0.0.1:5173","http://localhost:3000/"] }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/documents", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/announces", announcementsRouter());

app.use("/users", userRouter());

app.use("/comments", commentsRouter());

// app.use(handleErrorMiddleware);

export default app;
