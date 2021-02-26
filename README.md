# Node.js

> 2021年 第二個計劃：Node.js

1. 學習材料

   1. [Mosh - The Complete Node.js Course](https://codewithmosh.com/courses/293204/lectures/4509750)
   2. [Node.js 从零开发个人博客项目](https://www.youtube.com/playlist?list=PL9nxfq1tlKKlhV1UzUmElRkxmjkoO3mtH)

2. 原則

   1. 要以進全力理解爲主，進度不是最重要。
   2. 一定要仔細，仔細，再仔細。
   3. 主要是查漏補缺，看看有哪些內容是自己之前不明白和理解的。在經過 coffeeMachine 項目之後，能更好的理解。

3. 階段

   分爲兩階段：第一個是 Mosh，第二個是 Jomy King。

   預計用時是 ***一個月***，於 3月底之前（過期也沒有關系，只不過時間要花在這裏，不能花在其他地方了），可以獨立開發後端服務器給之後搭建的 ***React, React Native, 和 Electron*** 使用。

4. 預計完成 Node.js 課程後，可以繼續學習後端的知識想到的有：

   1. ***Redis***
   2. ***GraphSQL*** 
   3. ***SQL*** (Mosh 課程)
   4. ***API 設計***
   5. ***Jquery***
   6. ***Javascript OOP*** (Mosh 課程)
   7. ***Webpack, 和 glup***
   8. ***notify***
   9. ***request 和 response 要如何設計***
   10. ***http 狀態碼***
   11. 這個表之後想到，看到了要繼續增加。

5. 要求

6. 有用的庫

   1. `nodemon`
   2. `joi` : 字符串格式驗證
   3. `config`：配置設定

7. 目的

   1. `Node.js` 後端開發流程
   2. `Javascrip` 常用庫
   3. 數據庫 `SQL` 
   4. `API` 設計

8. 有用 website

   1. [npmtrends](https://www.npmtrends.com/Getting)：用來查看那些 module 多人用，好用

9. 需要熟悉的 npm 庫

   1. underscore
   2. lodash
   3. node 內核庫

### 2021-02-23

#### 筆記

1. Node 不是語言，也不是框架。而只是環境。

2. 使用 nvm 安裝最新的 node lts 版: 

   ```shell
   $ nvm install --lts
   ```

#### 重點

1. 後端的終極目的是提供 API。
2. 如果應用的 I/O 是讀寫很頻繁的，就用 Node
3. 如果應用是要多線程 CPU 進行的，就不要用 Node



## Node Module System

### 2021-02-23

#### 筆記

1. `setTimeout()`

2. `clearTimeout()`

3. `setInterval()` => 在3秒的時間間隔裏重復執行 function

   ```javascript
   setInterval(function(){ alert("Hello"); }, 3000);
   ```

4. `cleanInterval()`

5. `global.console.log()` === `console.log()`

6. `events` 用法

   ```javascript
   const EventEmitter = require("events"); // 導入 庫
   const emitter = new EventEmitter(); // 創建 實例
   
   emitter.on("messageLogged", () => { // 創建 listener 1
     console.log("listener 1");
   });
   
   emitter.on("messageLogged", (e) => { // 創建 listener 2, 處理接受到的 e
     console.log("listener 2", e); // output: listener 2 { id : 1 }
   });
   
   emitter.emit("messageLogged"， { id: 1 }); // 發出信號 && 傳 arg
   ```

   流程是：

   1. 先創建 `listener`
   2. 再 `emit` 信號
   3. 當 `listener` 收到信號之後，就會執行 `callback` 函數

#### 重點

1. 一定要 ***模組化編程***，方便維護與管理
2. 留意 `module` 
3. `jshint` 用來檢查 js file 是否出錯
4. 在 import/export 模組的時候，最好用 ES6 module 方法
5. ***Mosh 的教學比較舊，有些地方最好跟 ES6 Module 來寫比較好***
6. 無事做就看 [Node 的 API 文檔](https://nodejs.org/dist/latest-v14.x/docs/api/)，深入了解
7. 因爲 `Node.js` 系單線程環境，所以 method 最好用 `async` 的類型，而不要 `sync`，否則同 `Node.js` 的初衷相違背，而且當服務器 CPU 內核不夠用時，會卡死。（我個人想法，不知道是不是。。。）



## Node Package Manager (NPM)

### 2021-02-24

#### 筆記

1. 快速建立 meta data for node project

   ```shell
   $ npm init --yes
   ```

2. 安裝 module 方法

   ```shell
   $ npm i underscore
   ```

3. 只可以使用 ***nvm*** 對 node 版本進行變更

#### 重點

1. 要熟悉各種常用，好用的 npm 庫，具體看 ***9. 需要熟悉的 npm 庫***

2. Semantic Versioning: (SemVer)

   Major(upgrade with breaking api).Minor(new feature without breaking api).Patch(Bug) => 4.13.6

3. `Package.json`:

   ```json
   "dependencies": {
   	"abc": "^4.13.6", // 有任何 4.x 以內的更新，都跟上
       "xyz": "~1.8.3", // 有任何 1.8.x 以內的更新，都跟上
       "qwerty": "2.5.7" // 只更新 2.5.7 
   }
   ```

4. 查看現有所有安裝了的 npm 庫

   ```shell
   $ npm list --depth=0 # 舊有辦法，可詳細看到第0層
   $ npm list # 新辦法，只看到第0層
   $ ncu # 使用 npm-check-updates 來查看也是可以的
   ```

5. 查看單個 npm 庫

   ```shell
   $ npm view mongoose
   ```

6. 查看單個 npm 庫以往的 版本號

   ```shell
   $ npm view mongoose versions
   ```

7. 安裝某個版本的 npm 庫

   ```shell
   $ npm i mongoose@2.4.2
   ```

8. 查看過期 npm 庫

   ```shell
   $ npm outdated
   ```

9. 進行 minor 版本更新

   ```shell
   $ npm update
   ```

10. 使用 ***npm-check-updates*** 庫來進行版本管理

    ```shell
    $ ncu -u && npm install # 直接更新到 major-minor-patch 都是最新的版本
    ```

11. 安裝 庫 到 development 階段

    ```shell
    $ npm i jshint --save-dev
    ```

    結果

    ```json
    "dependencies": {
      "mongoose": "^5.11.18",
      "underscore": "^1.12.0"
    },
    "devDependencies": {
      "jshint": "^2.12.0"
    }
    ```

12. 卸載 npm 庫

    ```shell
    $ npm un mongoose
    ```

13. ***自建 npm 庫***

    1. 登錄 

       ```shell
       $ npm login
       ```

    2. 創建 npm 項目

    3. 發布

       ```shell
       $ npm publish
       ```

    4. 如有更新，需要先更新 major, minor, patch 版本之後才能 publish

       ```shell
       $ npm version major # minor / patch
       $ npm publish
       ```



## Building RESTful API's Using Express

### 2021-02-24 & 25

#### 筆記

1. 使用 https 會比 http 更安全
2. 使用 `nodemon` 來實時運行變化中的文件
3. 無論什麼事情，都要驗證用戶的輸入

#### 重點

1. 設計 `URL` 要有的元素

   http://vidly.com/v1/api/customers 

   1. v1: 版本號
   2. api: url 類型
   3. customers: 與什麼有關

2. 不要 Delete 任何數據，只要用 visible 來控制是否顯示就好了

3. node 可以讀取環境變量

   ```shell
   $ export PORT=5000 # 定義環境變量 PORT 數值爲 5000
   ```

   ```javascript
   const port = process.env.PORT || 3000 // 如果環境變量有 PORT 的定義就用 PORT，沒有就用 3000
   ```

4. express 讀取 uri 參數方法

   ```javascript
   app.get("/api/courses/:year/:month", (req, res) => {
     console.log(req.params);
     console.log(req.query);
     res.send(req.params);
   });
   ```

   uri 是 `htttp://localhost:3000/api/courses/2019/1?sortBy=123`

   `console.log` 出來的是

   ```json
   {
   	"year": "2019",
       "month": "1"
   }
   {
       "sortBy": "123"
   }
   ```

## Express- Advanced Topics

### 2021-02-25 && 26

#### 筆記

1. 中間件就是處理 請求的一些函數 的集合

2. 中間件結構

   ```javascript
   app.use((req, res, next) => {
     console.log("Logging..."); // 其他代碼
     next(); // next() 一定要有，不然會卡死
   });
   ```

3. 中間件是按照順序來執行的

#### 重點

1. [看清楚 express 全部的中間件](http://expressjs.com/en/resources/middleware.html)

2. 中間件不需要一直開着，可以在某些情況下才開，不然會影響服務器效能

3. 通過設置環境變量 `NODE_ENV` 來決定中間件，或者其他功能是否使用

   ```shell
   $ export NODE_ENV=production
   ```

   可以使用以下方式來獲取環境變量的值

   ```javascript
   console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
   console.log(`app: ${app.get("env")}`); // app.get("env") 默認是 development
   ```

4. 使用 `config` 庫來設定需要變化的配置

   創建 `config` 文件夾，並在裏邊創建以下文件

   ```
   ├── custom-environment-variables.json <- 存儲環境變量的保密信息
   ├── default.json <- 預設
   ├── development.json <- 根據 export NODE_ENV=development 來執行的 json
   └── production.json <- 根據 export NODE_ENV=production 來執行的 json
   ```

   創建環境變量方式

   ```shell
   $ export NODE_ENV=production
   $ export password=1234 # 設定密碼
   ```

   具體 json 文件格式

   ```json
   {
     "name": "mmm",
     "mail": {
       "host": "dev-mail-server"
     }
   }
   ```

   在項目中引用方式

   ```javascript'
   import config from "config"
   config.get("mail.host")
   ```

5. 使用 `debug` 庫來打 log

   使用 `import from` 方式引用 debug 庫

   ```javascript
   import Debug from "debug";
   const startDebugger = Debug("app:startup")
   ```

   `app.js` 中打 log 方式

   ```javascript
   startDebugger("logging...")
   ```

6. 設定使用環境變量的方式

   ```shell
   # 方法一
   $ DEBUG=app:* NODE_ENV=production nodemon ./app.js
   # app:* 開啓全部 app 的 Logger
   # app:startup 只開啓 app:startup 的 Logger
   
   # 方法二
   $ export DEBUG=app:*
   $ export NODE_ENV=production
   
   # 總結
   # 方法一 通用方法
   # 方法二 用來設定一些密碼
   ```

7. 可以使用 template engine 來 render 頁面，這樣子就可以不用前端 React 了。頁面也是由後端提供。

   安裝 `pug` 庫

   設定 `view engine`

   ```javascript
   app.set("view engine", "pug");
   app.set("views", "./src/views")
   ```

   `pug` 文件結構

   ```pug
   html 
     head
       title=title
     body 
       h1=message
   ```

   渲染 `pug` 文件

   ```javascript
   res.render("index", { title: "pug title", message: "pug message" });
   ```

   

