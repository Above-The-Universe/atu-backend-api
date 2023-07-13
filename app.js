import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/router/apis.router.js";
import compression from "compression";

dotenv.config();

const PORT = +process.env.PORT || dotenv;
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(compression());
app.use("/api/v1", router);
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
