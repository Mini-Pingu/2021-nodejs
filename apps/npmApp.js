import _ from "underscore";
import cat from "cat-lib-chris";
// const cat = require("cat-lib-chris");

console.log(
  _.map([1, 2, 3], function (num) {
    return num * 3;
  })
);

console.log(cat.add(1, 2));

console.log(_.contains([1, 2, 3], 3));
