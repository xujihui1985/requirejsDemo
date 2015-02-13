require(['underscore', 'app/taskData', 'text!templates/template.html!strip'], function (_, taskData, temp) {

    console.log(temp);
    console.log(_);
    console.log($);

    taskData.sayHello();
});

//require plugins
// plugins can load modules, replacing require's build-in module loader
//"!" denotes use of a module, "{plugin}!{module}"

//define(["superPlugin!moduleTwo"], function(moduleTwo) {
//    //superPlugin
//});