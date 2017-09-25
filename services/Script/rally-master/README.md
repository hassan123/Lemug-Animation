# rally

A simple but beautiful JSON visualization library, easy viewing tabular data. (also supports charts, map)

## Usage

get js from `./dist/rally.js`
get css from `./lib/css/rally.css`

```javascript
  angular.module('myApp', ['rally'])
    .controller('myCtrl', function($scope){
      $scope.data = './sample.json';
      $scope.params = {
        mode: 'basic', 
        autorefresh: true,
        visible: true,
        disabled: false
      };
      $scope.mapsize = {
        width:'970px',
        height: '450px'
      };
      $scope.options = {
        id: '#json_tb',
        tableHead: ['head1', 'head2', 'head3', 'head4', 'head5', 'head6'],
        headClass: "head_cls",
        bodyClass: "body_cls",
        bodyEvenClass: 'body_even',
        bodyOddClass: 'body_odd',
        trClass: "tr_cls",
        footerClass: "footer_cls",
        rightClass: "right_cls",
        colMath: true,
        rowMath: false,
     };
        
    });
```
and in html again you can use it like:

```html
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" media="screen">
<link rel="stylesheet" href="bower_components/json-tree/json-tree.css">
<link rel="stylesheet" href="bower_components/nvd3/nv.d3.css">
<link rel="stylesheet" href="./css/rally.css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular-route.js"></script>
<script src="bower_components/d3/d3.min.js"></script>
<script src="bower_components/angular-nvd3/dist/angular-nvd3.js"></script>
<script src="vendor/highlight.pack.js"></script>
<script src="vendor/json-tree.js"></script>
<script src="bower_components/nvd3/nv.d3.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
<script src="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js"></script>
<script src="./vendor/amass.js"></script>
<script src="./vendor/elixirchart.js"></script>
<script src="./vendor/elixirmap.js"></script>
<script src="./dist/rally.js"></script>

<div ng-app='myApp'>
  <div ng-controller='myCtrl'>
      <rally data='data' params='params' options='options', mapsize='mapsize'></rally>
  </div>
</div>
```


## Example

Here is a sample json 

```
[
    {
        "name":"Darron Weissnat IV",
        "BMI":20.72,
        "age":39,
        "birthday":"2005-01-03T00:00:00.000Z",
        "city":"East Russel",
        "married":false,
        "index":0
    }
,
    {
        "name":"Pablo Ondricka",
        "BMI":19.32,
        "age":38,
        "birthday":"1974-05-13T00:00:00.000Z",
        "city":"Lake Edytheville",
        "married":false,
        "index":1
    }
,
    {
        "name":"Mr. Stella Kiehn Jr.",
        "BMI":16.8,
        "age":34,
        "birthday":"2003-07-25T00:00:00.000Z",
        "city":"Lake Veronicaburgh",
        "married":false,
        "index":2
    }
,
    ...
    ...
    ...
]
```
will convert into charts like

[DEMO](http://elixirdoc.github.io/rally/)

## Deploy

```
    git subtree push --prefix sample origin gh-pages
```

## License

MIT

