app.controller('EditController', ['$scope','empFactory','share', function($scope,empFactory,share) { 
	  $scope.employee=share.get()
	  $scope.designations=["Snr. Manager","Manager","Asst. Manager","Lead","Snr. Consultant","Consultant"]
	  $scope.edit=function(){
		  if($scope.employee.age > 0){
		  if (($scope.employee.designation == "Snr. Manager" && $scope.employee.salary >= 100000 && $scope.employee.salary <= 130000)||
					($scope.employee.designation == "Manager" && $scope.employee.salary >= 90000 && $scope.employee.salary <= 99999)||
					($scope.employee.designation == "Asst. Manager" && $scope.employee.salary >= 80000 && $scope.employee.salary <= 89999)||
					($scope.employee.designation == "Lead" && $scope.employee.salary >= 60000 && $scope.employee.salary <= 79999)||
					($scope.employee.designation == "Snr. Consultant" && $scope.employee.salary >= 50000 && $scope.employee.salary <= 59000)||
					($scope.employee.designation == "Consultant" && $scope.employee.salary >= 40000 && $scope.employee.salary <= 49000))
				{ 
			
		  empFactory.editEmp($scope.employee).success(function(data) {
			  empFactory.redirect('/')
			  });
	  }
		  else {
				if ($scope.employee.designation == "Snr. Manager")
					$scope.error="Salary should be between 100000 and 130000"
				else if ($scope.employee.designation == "Manager")
					$scope.error="Salary should be between 90000 and 99999"
				else if ($scope.employee.designation == "Asst. Manager")
					$scope.error="Salary should be between 80000 and 89999"
				else if ($scope.employee.designation == "Lead")
					$scope.error="Salary should be between 60000 and 79999"
				else if ($scope.employee.designation == "Snr. Consultant")
					$scope.error="Salary should be between 50000 and 59000"
				else if ($scope.employee.designation == "Consultant")
					$scope.error="Salary should be between 40000 and 49000"
			}
		}
		else
			$scope.error="Age is invalid"
	  }
	  
	  $scope.cancel=function(){
		  empFactory.redirect('/')
	    }
}]);

