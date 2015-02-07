define(['require','exports','module','jquery'],function(require, exports, module) {
   
   var $ = require('jquery');

   console.log($);

   module.exports = {
     sayHello: function() {
       console.log('hello');
     }
   };
});
