app.controller('MainController', ['$scope','empFactory','share', function($scope, empFactory,share) { 
	empFactory.getAllEmp().success(function(data) {
	    $scope.employees = data;
	  });
	
	$scope.number="";
	$scope.isSelected=false
	$scope.selectedrow=null
	$scope.setSelected = function(index) {
		if ($scope.selectedrow != index)
			{
				$scope.isSelected=true
				$scope.selectedrow = index;
				share.set(this.employee)
			}
	    else if($scope.selectedrow == null){
				$scope.isSelected=true
		        $scope.selectedrow = index;
				share.set(this.employee)
			}
		else{
			$scope.isSelected= false
			$scope.selectedrow = null
		}
		
    }
	
    $scope.cancel=function(){
    	empFactory.redirect()
    }
}]);

