(function(){  
"use strict";

  var _ = require('lodash')
  module.exports = angular.module('rally')
                   .factory('dataService', dataService);

  dataService.$inject = ['$http'];

  function dataService($http) {
  
    var vm = this;
    vm.getData = getData;

    vm.convertLatLng = convertLatLng;

    function convertLatLng(lat, lng, dsrc) {
      var data = [];
      data.push(_getCol(lat, dsrc));
      data.push(_getCol(lng, dsrc));
      return data;
    }

    function _getCol(col, data) {
      var getKey = _.property(col);
      return _.map(data, getKey);
    }


    function getData(path) {
        return $http.get(path);
    }
    return this;
  }

})();
