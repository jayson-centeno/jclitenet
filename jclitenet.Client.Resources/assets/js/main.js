'use strict';

requirejs.config({

    baseUrl: "../assets/js",

    paths: {

        //"react": ["//fb.me/react-with-addons-0.14.7.min",
        //          "lib/react/react-with-addons-0.14.7.min"],

        //"reactDOM": ["//fb.me/react-dom-0.14.7.min.js",
        //            "lib/react/react-dom-0.14.7.min"],

        "react": "lib/react/react.min",

        "react-dom": "lib/react/react-dom",

        "react-redux": "lib/react-redux/react-redux.min",
        
        //"redux": ["//cdnjs.cloudflare.com/ajax/libs/redux/3.3.1/redux.min",

        "redux": "lib/redux/redux.min",

        "react-router": "lib/react-router/ReactRouter.min",

        //"react-router-redux" : "lib/react-router-redux/index",

        "history" : "lib/history/history.min",

        "marked" : "//cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min",
      
        "q": ["//cdnjs.cloudflare.com/ajax/libs/q.js/0.9.2/q.min",
              "lib/q/q.min"],

        "underscore": ["//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
                       "lib/underscore/underscore-min"],

        "jquery": ["//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.2/jquery.min",
                   "lib/jquery/jquery-1.12.2.min"],

        "bootstrap": [ "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min",
                       "lib/bootstrap/bootstrap.min"],

        //utilities
        "util": "utilities/utilities",

        fetch: "lib/fetch/fetch.min",
    },

    waitSeconds: 0,

    shim: {
        'underscore': {
            exports: '_'
        },
        "jquery": {
            exports: "$"
        },
        'bootstrap': {
            deps: [
                "jquery"
            ]
        },

        "react": {
            exports: "React"
        }
        
    },

});

requirejs(["router", "jquery", "bootstrap"], function () {

    "use strict";

    try {

    } catch (e) {
        console.error(e.stack || e.message || e);
    }

})


