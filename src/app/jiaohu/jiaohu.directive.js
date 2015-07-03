/**
 * Created by avc on 2015/6/30.
 */
app.directive("addBookButton",['Book',function(Book){
  return{
    restrict:"A",
    link:function(scope,element,attrs){
      element.bind("click",function(){
        Book.addBook({title:"angular教程",author:"徐晓杰"});
      });
    }
  }
}]);
