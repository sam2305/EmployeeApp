app.controller('FormController', ['$scope','empFactory','$window','share',function($scope, empFactory,$window,share) { 
	$scope.employee={"emp_num":"","first_name":"","last_name":"","middle_name":"","age":"","designation":"","salary":""};
	
	$scope.employee=share.get();
	$scope.error=""
	$scope.retval="";
			
	$scope.add=function(){
		empFactory.findEmp($scope.employee.emp_num).success(function(data) {
		    $scope.response = data.response;
		if ($scope.response != "Success"){
			$scope.retval=empFactory.validate($scope.employee);
			if ($scope.retval== "true")
				{
					empFactory.addEmp($scope.employee).success(function(data) {
						$window.location.href='/' 
					})
				}
			else
				{
					$scope.error=$scope.retval
				}
		}
		else
			$scope.error="Employee Number already exists"
	})
	};
	
	$scope.edit=function(){
		  $scope.retval=empFactory.validate($scope.employee);
			if ($scope.retval== "true")
				{
					empFactory.editEmp($scope.employee).success(function(data) {
						$window.location.href='/' 
					})
				}
			else
				{
					$scope.error=$scope.retval
				}
		}
	
	$scope.del=function(){
		  empFactory.delEmp($scope.employee.emp_num).success(function(data) {
			  $window.location.href='/'
		  });
	  }
	
	
	$scope.cancel=function(){
		$window.location.href='/'
    };
	
	$scope.reset=function(){
		$scope.empForm.$setPristine();
	    $scope.empForm.$setUntouched();
	    $scope.error="";
    };
}]);
