app.controller('DeleteController', ['$scope','empFactory','share','$window',function($scope,empFactory,share,$window) {
	$scope.employee=share.get()  
	$scope.del=function(){
		  empFactory.delEmp($scope.employee.emp_num).success(function(data) {
			  $window.location.href='/'
		  });
	  }
	$scope.cancel=function(){
		empFactory.redirect()
    }
}]);

