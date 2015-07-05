/**
 * Created by avc on 2015/6/30.
 */
app.directive("loader",function() {
  return {
    restrict: "AE",
    link: function (scope, element, attr) {
      element.bind("mouseenter", function () {
       // scope.loadData();
       // scope.$apply("loadData()");//效果和上面的一样。
        scope.$apply(attrs.howtoload);//注意要小写，这里是一个小坑
        //这个能够实现同一个directive在不同的地方调用。就是指令的复用，
      });
    }
  }
});
