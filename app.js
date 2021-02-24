import _ from "underscore";

console.log(
  _.map([1, 2, 3], function (num) {
    return num * 3;
  })
);

console.log(_.contains([1, 2, 3], 3));
