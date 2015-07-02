"use strict"
/*function validateCtrl($scope){
  $scope.entity={};
  $scope.submitForm=function(valid){
    if(valid){
      console.log('hello Angularjs')
    }
  }
}*/
app.controller('validateCtrl', function ($scope, $modal,inform,dialogs) {
  init();

  function init(){
    $scope.entity = {

    }
    $scope.submitForm = function(valid){
      if(valid){
        alert(valid)

      }
    }
  }
});


