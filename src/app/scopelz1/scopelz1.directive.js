/**
 * Created by avc on 2015/6/30.
 */
app.directive('myDirective', function () {
  return {
    restrict: 'EA',
    scope:{},//改变此处的取值,看看有什么不同false，true，{}，
    template: '<div>儿子:{{ name }}<input ng-model="name"/></div>'
  };
});

