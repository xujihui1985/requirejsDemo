/**
 * User: jack
 * Date: 1/17/2015
 * Time: 3:38 PM
 * To change this template use File | Settings | File Templates.
 */

require.config({
    //default to the directory same as the main.config.js file, can be overwritten, can be url also
    // for example, if all js files is loaded from cdn, then we can set baseUrl to
    // http://cdn.xxx.com
    //baseUrl: 'js/',
    // overwrite the path that require js will look, can also be folder
    // for example "scripts": "../scripts", this will map the scripts folder to be ../scripts
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        templates: '../templates'
    },
    // used when you want to dependence third party modules that is not written in requirejs
    // like underscore js
    // requirejs will use window._ variable as underscore when it was required as dependence
    // if underscore was depend on jquery, we can cat jquery as deps of underscore
    // noted, shim can be used with paths, after loading, requirejs will find _ variable from
    // window object
    shim: {
        underscore: {
            exports: '_',
            deps: ['jquery']
        }
    },
    waitSeconds: 7,
    // deps property indecate the modules that will be loaded before main function
    // deps: ['module1, module2'],
    // callback property like jquery's ready function, these two config is not useful as we can
    // require modules directly from the main require function
    //callback: function(module1, module2) {

    // },
    // this propety is useful for refresh cache
    urlArgs: 'bust='+ (new Date()).getTime(),
    // context can be used to defined a specific context for require, usually used in unittest
    // each context load module to its own cache
    // requirejs.s.contexts._.config; is the default config object of require js
    // we can create a new test config with this object
//    context: 'xxx'
});



