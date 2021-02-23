import EventEmitter from "events";

const url = "http://abc.com/log";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    this.emit("logging", { data: "message" });
  }
}

// export default log;
export { Logger, url };
