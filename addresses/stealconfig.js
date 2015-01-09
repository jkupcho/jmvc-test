steal.config({
  map: {
    "*": {
      "addresses": "/addresses",
      "jquery/jquery.js": "../bower_components/canjs/lib/jquery.1.9.1.js"
    }
  },
  paths: {
    "can/": "../bower_components/canjs/",
    "steal/": "../bower_components/steal/",
    "jquerypp/": "../bower_components/jquerypp/"
  },
  shim: {
    jquery: {
      exports: 'jQuery'
    }
  },
  ext: {
    js: "js",
    css: "css",
    less: "../bower_components/steal/less/less.js",
    mustache: "can/view/mustache"
  }
})