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
   8. 這個表之後想到，看到了要繼續增加。

5. 要求

6. 工具

   1. `nodemon`

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

#### 重點

1. 只可以使用 ***nvm*** 對 node 版本進行變更
2. 要熟悉各種常用，好用的 npm 庫，具體看 ***9. 需要熟悉的 npm 庫***