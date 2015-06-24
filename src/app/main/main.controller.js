'use strict';
//MainCtrl这个函数就充当了我们的控制器
//MainCtrl在大家看来是不是全局函数，定义全局函数，有很多弊端，所以angularjs引出了模块化的概念
app.controller('MainCtrl', function ($scope) {
  $scope.greeting1 = {text:'hello'};
  $scope.phones = [
    //name snippet,这些都是model，数据模型，供前方调用
    {"name": "Nexus S",
      "snippet": "Fast just got faster with Nexus S.",
      "age": 0},
    {"name": "Motorola XOOM™ with Wi-Fi",
      "snippet": "The Next, Next Generation tablet.",
      "age": 1},
    {"name": "MOTOROLA XOOM™",
      "snippet": "The Next, Next Generation tablet.",
      "age": 2}
  ];

  $scope.orderProp = 'age';
/*  $scope.title='点击展开';
  $scope.text='这里是内部内容';*/
  $scope.expanders=[{
    title: 'nihao',
    text: '12hihhihi'
  },{
    title: 'niha9999o',
    text: '12h8888ihi'
  },{
    title: 'nihao0000',
    text: '1277777hihi'
  }];
});
//var expanderModule=angular.module('expanderModule',[])
//expanderModule.directive('expander',function(){
//  return{
//    restrict:'EA',
//    replace:true,
//    transclude:true,
//    scope:{
//      title:'=expanderTitle'
//    },
//    template:'<div>'
//    +'<div class="title" ng-click="toggle()">{{title}} </div>'
//      +'<div class="body" ng-show="showMe" ng-transclude></div>'
//        +'</div>',
//   link:function(scope,element,attrs){
//     scope.showMe=false;
//     scope.toggle=function toggle(){
//       scope.showMe=!scope.showMe;
//     }
//   }
//  }
//});
//expanderModule.controller('SomeController',function($scope){
//  $scope.title='点击展开';
//  $scope.text='这里是内部内容';
//})

