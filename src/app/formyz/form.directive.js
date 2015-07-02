/**
 * Created by avc on 2015/7/1.
 */
app.directive('ensureUnique',['$http',function($http){
  return{
    require:'ngModel',
    link:function(scope,ele,attrs,c){
      scope.$watch(attrs.ngModel,function(){
        $http({
          method:'POST',
          url:'/api/check/'+attrs.ensureUnique,
          data:{'field':attrs.ensureUnique}
        }).success(function (data,status,header,cfg){
          c.$setValidity('unique',data.isUnique);
        }).error(function (data,status,header,cfg){
          c.$setValidity('unique',false);
        });
      });
    }
  }
}]);
