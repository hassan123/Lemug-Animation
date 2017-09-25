"use strict";
(function(window, document, undefined) {
  
  var rallyController = require("./controllers/rally.controller");
  var app = angular.module('rally', ['ngRoute', 'amass', 'elixirchart', 'elixirmap'])
                   .controller('rallyController', rallyController);
  
 
  require("./directives/rally.directive");
  require("./services/data.service");

})(window, document)

