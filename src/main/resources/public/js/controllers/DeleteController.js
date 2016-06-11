app.controller('DeleteController', ['$scope','empFactory','share', function($scope,empFactory,share) {
	$scope.employee=share.get()  
	$scope.del=function(){
		  empFactory.delEmp($scope.employee.emp_num).success(function(data) {
			  empFactory.redirect()
		  });
	  }
	$scope.cancel=function(){
		empFactory.redirect()
    }
}]);

