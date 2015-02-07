define(function(require, exports, module) {
   'use strict';
   var conf = require('../config');
    var temp = require('text!templates/template.html');

    console.log(temp);



   module.exports = {
     sayHello: function() {
       console.log('hello');
     }
   };
});
