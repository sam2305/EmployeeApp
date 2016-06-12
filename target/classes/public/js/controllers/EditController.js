app.controller('EditController', ['$scope','$window','empFactory','share', function($scope,$window,empFactory,share) { 
	  $scope.employee=share.get()
	  $scope.designations=["Snr. Manager","Manager","Asst. Manager","Lead","Snr. Consultant","Consultant"]
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
	  
	  $scope.cancel=function(){
		  $window.location.href='/'
	    }
}]);

