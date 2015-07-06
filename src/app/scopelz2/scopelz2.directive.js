/**
 * Created by avc on 2015/6/30.
 */
app.directive('helloWorld1',function(){
  return {
    scope: false,
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World</p>'
  }
});
