/**
 * Created by avc on 2015/6/30.
 */
/*app.directive('helloWorld',function(){
  return {
    scope: false,
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World</p>'
  }
});*/
/*app.directive('helloWorld',function(){
  return {
    scope: {color:'@colorAttr'},  //指明了隔离作用域中的属性color应该绑定到属性colorAttr
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World</p>'

}
});*/
/*app.directive('hellooWorld',function(){
  return {
    scope:{color:'='},
    restrict: 'AE',
    replace: true,
    template: '<div style="background-color:{{color}}">Hello World<div><input type="text" ng-model="color"></div></div>'
  }
});*/

app.directive('helloWorld3',function(){
  return {
    scope:{},
    restrict: 'AE',
    transclude: true,
    template: '<div class="b"><div ng-transclude>你看不见我</div></div>'
  }
});
