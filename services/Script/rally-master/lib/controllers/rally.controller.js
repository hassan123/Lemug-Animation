(function(){
  
  module.exports = rallyController;
  var _ = require('lodash');
  var Immerse = require('immerse');

  function rallyController($scope, $location, $http, dataService) {

    var vm = this;
    $scope.showTable = showTable;
    $scope.showCharts = showCharts;
    $scope.showMap = showMap;
    $scope.filterData = filterData;
    $scope.resetData = resetData;
    $scope.toggleFilter = toggleFilter;
    $scope.showFilter = false;
    $scope.ed_selector_key = '';
    $scope.ed_selector_op = '';
    $scope.ed_selector = '';
    $scope.ed_limit = '';
    $scope.ed_skip = '';
    $scope.ed_field = {};
    $scope.fullData = null;
    urlDirect();
    $scope.selector_keys = {};
    $scope.selector_ops = {
      'Equal': '=',
      'Not Equal than': '!=',
      'Greater than': '>',
      'Less than': '<',
      'Greater equal than': '>=',
      'Less equal than': '<='
    };

    getData($scope.data);

    function getData(item) {
      if(!item){
        console.error('You have to pass a path to your json file or API or json object!');
      }
      else if(item.constructor == String) {
        // it is a file or API
        dataService.getData(item).then(function(response){
          $scope.data = response['data'];
          $scope.ed_field = Object.keys($scope.data[0]).join();
          $scope.selector_keys = Object.keys($scope.data[0]);
        });
      }
      else {
        vm.data = item;
        $scope.ed_field = Object.keys($scope.data[0]).join();
        $scope.selector_keys = Object.keys($scope.data[0]);
      }
    }

    function urlDirect() {
      var path = $location.path();

      if(path === '') {
        showTable(); 
      }
      else if(path === '/table') {
        showTable();
      }
      else if(path === '/charts') {
        showCharts();
      }
      else if(path === '/map') {
        showMap();
      }
      else {
        $scope.viewTable = false;
        $scope.viewCharts = true;
        $scope.viewMap = false;
      }
    }

    function showTable() {
      $location.path('/table');
      $location.search('');
      $scope.viewTable = true;
      $scope.viewCharts = false;
      $scope.viewMap = false;
    }

    function showCharts() {
      if($location.path() != '/charts') {
        $location.search('');
        $location.path('/charts');
      }
      $scope.viewTable = false;
      $scope.viewCharts = true;
      $scope.viewMap = false;
    }

    function showMap() {
      if($location.path() != '/map') {
        $location.search('');
        $location.path('/map');
        $scope.mapsize = _.clone($scope.mapsize);
      }
      $scope.viewTable = false;
      $scope.viewCharts = false;
      $scope.viewMap = true;
    }

    function filterData() {
      var dataURL = getParameterByName('data_url');
      var dataType = getParameterByName('elixir_data_type');
      if ($scope.ed_selector_value) {
        $scope.ed_selector =  $scope.ed_selector_key + 
          $scope.ed_selector_op + $scope.ed_selector_value;
      }
      
      var params = {'data_url': dataURL, 'elixir_data_type': dataType, 
        'ed_selector':$scope.ed_selector, 'ed_limit': $scope.ed_limit, 
        'ed_skip': $scope.ed_skip, 'ed_field': $scope.ed_field};
      
      if (!$scope.fullData) {
        $scope.fullData = $scope.data;
      }
      
      if ($scope.api.data != null) { 
        updateData($scope.api.data, params);
      }
      else {
        $scope.data = updateByImmerse($scope.fullData, params);
      }
    }

    function updateData(url, params) {
      $http({
          url: url, 
          method: "GET",
          params: params
       }).
      success(function(data, status, headers, config) {
        $scope.data = data;
      }).
      error(function(data, status, headers, config) {
        
      });
    }

    function updateByImmerse(data, options) {
      var val = new Immerse();
      val.data(data);

      if(options.ed_field) {
        val.field(options.ed_field);
      }

      if(options.ed_selector) {
        val.selector(options.ed_selector);
      }

      if(options.ed_skip) {
        val.skip(options.ed_skip);
      }

      if(options.ed_limit) {
        val.limit(options.ed_limit);
      }
      return val.data; 
    }

    function resetData() {
      if ($scope.fullData)
        $scope.data = $scope.fullData;
    }

    function toggleFilter() {
      $scope.showFilter = $scope.showFilter === false ? true: false;
    }

    function setUrlParams(params) {
      $location.search(params);
    }

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  }
})();

