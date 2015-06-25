'use strict';
app.controller('MainCtrl', function ($scope) {
 $scope.controls=[
    {
      title:'',
      content:''
    }
  ];
 /* $scope.controlss=[
    {
      title:'',
      content:''
    }
  ];*/

  $scope.addRow=function(){
    $scope.controls.push({
      title:'测试2',
      content:'Content2'
    });
  }
/*  $scope.danhang=function(){
    $scope.controlss.push({
      title:'测试2',
      content:'Content2'
    });
  }*/
});

