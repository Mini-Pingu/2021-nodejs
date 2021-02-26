// 配置文件設定
import config from "config";

// 日志設定
import Debug from "debug";
const debug = Debug("debug");

// 服務器設定
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

// 個人中間件設定
import logger from "./src/middleware/logger.js";
import authenticatior from "./src/middleware/authenticator.js";

// 路由設定
import home from "./src/routes/home.js";
import courses from "./src/routes/courses.js";

const app = express();

// 模板引擎設定
app.set("view engine", "pug");
app.set("views", "./src/views");

// 選擇使用哪些 express 預設的中間件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

// 根據環境變量來，選擇使用哪些中間件
if (app.get("env") === "development") {
  debug("Mongan enabled...");
  app.use(morgan("tiny"));
}

// 選擇使用哪些自己設計的中間件
app.use(logger);
app.use(authenticatior);

// 選擇引入哪些自己設計的路由
app.use("/", home);
app.use("/api/courses", courses);

// 啓動後端服務
const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Listen on port ${port}...`);
});
