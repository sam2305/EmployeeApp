app.controller('MainController', ['$scope','empFactory','share', function($scope, empFactory,share) { 
	empFactory.getAllEmp().success(function(data) {
	    $scope.employees = data;
	  });
	
	$scope.isSelected=false
	$scope.selectedrow=null
	$scope.setSelected = function(index) {
        $scope.isSelected=true
        $scope.selectedRow = index;
		share.set(this.employee)
    }
    $scope.cancel=function(){
    	empFactory.redirect()
    }
}]);

