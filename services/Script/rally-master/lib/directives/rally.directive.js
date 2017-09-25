(function(){
  'use strict';
  module.export = angular.module('rally')
                  .directive('rally', rallyDirective);

  var rallyController = require('../controllers/rally.controller');

  var template = '<div class="rally-buttons">'
           + '<button class="btn btn-primary" ng-click="showTable()">Table</button>'
           + '<button class="btn btn-primary" ng-click="showCharts()">Chart</button>'
           + '<button class="btn btn-primary" ng-click="showMap()">Map</button>'
           + '<button class="btn btn-success" ng-click="toggleFilter()">Filter</button></div>'
           + '<form class="form-inline rally_filter" ng-show="showFilter">'
           + '<div class="form-group">'
           + '<label>Selector</label><select ng-model="ed_selector_key" class="form-control"'
           + 'ng-options="key for key in selector_keys">'
           + '<option value="">-- Field --</option></select>'
           +  '<select ng-model="ed_selector_op" class="form-control"'
           + 'ng-options="key for (key, value) in selector_ops">'
           + '<option value="">-- select --</option></select>'
           + '<input type="number" ng-model="ed_selector_value" class="form-control" placeholder="value"></input></div><br/>'
           + '<div class="form-group">'
           + '<label>Field</label><input ng-model="ed_field" class="form-control"></input></div>'
           + '<div class="form-group"><label>Skip</label><input type="number" ng-model="ed_skip" class="form-control" placeholder="value"></input></div>'
           + '<div class="form-group"><label>Limit</label><input type="number" ng-model="ed_limit "class="form-control" placeholder="value"></input></div>'
           + '<button class="btn btn-primary" ng-click="filterData()">Update</button>'
           + '<button class="btn btn-danger" ng-click="resetData()">Reset</button></form>'
           + '<amass class="rally-table" ng-show="viewTable" id="json_tb" data="data" options="options"></amass>'
           + '<elixir-chart class="rally-charts" ng-show="viewCharts" data="data" params="params"></elixir-chart>'
           + '<elixir-map class="rally-map" ng-show="viewMap" data="data" options="options" mapsize="mapsize"></elixir-map></div>';

  function rallyDirective() {
    var directive = {
        require: '?ngModel',
        restrict: 'E',
        scope: {
          data: "=",
          params: "=",
          options: "=",
          mapsize: "=",
          api: "="
        },
        controller: rallyController,
        controllerAs: 'rally',
        template: template
    };
    return directive;
  }

})();
