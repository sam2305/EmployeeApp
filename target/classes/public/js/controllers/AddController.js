app.controller('AddController', ['$scope','empFactory','$window',function($scope, empFactory,$window) { 
	$scope.employee={"emp_num":"","first_name":"","last_name":"","middle_name":"","age":"","designation":"","salary":""};
	
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
	
	
	
	$scope.cancel=function(){
		$window.location.href='/'
    };
	
	$scope.reset=function(){
		$scope.empForm.$setPristine();
	    $scope.empForm.$setUntouched();
	    $scope.error="";
    };
}]);
