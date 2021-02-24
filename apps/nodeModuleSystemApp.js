import { Logger, url } from "./logger.js";
import path from "path";
import os from "os";
import fs from "fs";
import EventEmitter from "events";

// logger("message");
// console.log(url);

// console.table([
//   { a: 1, b: "Y" },
//   { a: "Z", b: 2 },
// ]);

// const freeMemory = os.freemem();
// const totalMemory = os.totalmem();
// const freeMemoryPersentage = freeMemory / totalMemory;

// console.log(`Free memory of  localhost: ${freeMemoryPersentage}`);

// console.log(fs.readdirSync("./"));

// fs.readdir("./", (error, files) => {
//   if (error) {
//     console.log("Error", error);
//     return;
//   }
//   console.log("Results", files);
// });

// const emitter = new EventEmitter();

// emitter.on("messageLogged", () => {
//   console.log("listener 1");
// });

// emitter.on("messageLogged", (e) => {
//   console.log("listener 2", e);
// });

// emitter.emit("messageLogged", { id: 1 });

// logger(emitter, "logging");
// logger(emitter, "logging");
const logger = new Logger();

logger.on("logging", (e) => {
  console.log(e);
});

logger.log("message");
