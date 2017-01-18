(function () {
'use strict';

angular.module('LunchApp',[])
.controller('LunchController',LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
$scope.lunch = null;
$scope.shouldEat = null;
$scope.tooMuch = function() {
  if ($scope.lunch == null) {
    $scope.shouldEat = 'Please Enter data First';
    return;
  }
  var lunchList = $scope.lunch.toString();
  var re = /\s*,\s*/;
  var arrayLunch = lunchList.split(re);
  console.log(arrayLunch)
  console.log(arrayLunch.length)

  if (arrayLunch.length< 1 || arrayLunch == '') {
    $scope.shouldEat = 'Please Enter data First';
  }
  else if(arrayLunch.length > 3 ){
    $scope.shouldEat = 'Too much!';
  } else {
    $scope.shouldEat = 'Enjoy!';
  }
};

};
})();
