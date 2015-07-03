/**
 * Created by avc on 2015/6/30.
 */
/*app.directive("hello",function(){
  return{
    restrict:'AEMC',
    template:'<div>Hi everyone!</div>',//放html标签，但是能写很少的html所有出现了
    //templateUrl:'hello.html',  这样写就可以在html中编写大量的html
    replace:true
  }
});*/



/*app.run(function($templateCache){
  $templateCache.put("hello.html","<div>Hi everyone!!!!</div>")
});
app.directive("hello",function($templateCache){
  return{
    restrict:'AECM',
    template:$templateCache.get("hello.html"),
    replace:true
  }
});*/
//当我们编写的模板不仅仅是在hello这个指令中使用，也想在其他的指令中使用，那么就把他缓存起来。
//run方法：注射器加载完成所有模块时，此方法执行一次，使用$templateCache把模板缓存起来，在下边使用的时候用get出来。
//好处就是：多个模板能够使用。



//div内部元素显示出来
app.directive("hello",function(){
  return{
    restrict:'AECM',
    transclude:true,
    template:"<div>hello,everyone!<div ng-transclude></div></div>"
   /* compile:function(){

    },
   link:function(){

    }*/
  }
})
//用transclude（变换）将他显示出来，ng-transclude的意思就是把嵌套的内容放在ng-transclude所在的div的这个位置来。
