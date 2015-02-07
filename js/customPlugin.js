/**
 *
 * User: jack
 * Date: 1/17/2015
 * Time: 4:54 PM
 * To change this template use File | Settings | File Templates.
 */

define(['coffee-script'], function(CoffeeScript) {

    var built = {};
    function isRunningInNode() {

        return typeof process !== 'undefined'
                    && process.versions
                    && !!process.versions.node;
    }

    return {

        load: function(name, parentRequire, onload, config) {
           var onLoaded = function(coffeeText) {
               var compiled = CoffeeScript.compile(coffeeText);
               if(config.isBuild) {
                   built[name] = compiled;
               }
               onload.fromText(compiled);
           };

            if(isRunningInNode()) {
                // when run in node, use fs module instead of ajax
                var fs = require('fs');
                var path = parentRequire.toUrl(name+'.coffee');
                var coffeeText = fs.readFileSync(path, 'utf8');
                onload(coffeeText);

            } else {
                parentRequire(["text!"+name+".coffee"], onLoaded);
            }

        },
        // this method will be called on r.js optimize
        write: function(pluginName, moduleName, write) {
            write.asModule(pluginName+'!'+moduleName, built[moduleName]);
        }
    }
});
