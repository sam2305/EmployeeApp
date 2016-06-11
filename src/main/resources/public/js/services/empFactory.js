app.factory('empFactory', ['$http','$window', function($http,$window) { 
	empFactory={};
	
	empFactory.getAllEmp = function () {
		return $http.get('http://localhost:8080/api/v1/employees') 
	            .success(function(data) {   
	            	return data; 
	            }) 
	            .error(function(err) { 
	              return err; 
	            }); 
	}
	
	empFactory.editEmp=function(employee) { 
		  return $http.put('http://localhost:8080/api/v1/employees',employee) 
		            .success(function(data) { 
		            	return data; 
		            }) 
		            .error(function(err) { 
		              return err; 
		            }); 
	}
	
	empFactory.addEmp = function (employee) {
		return $http.post('http://localhost:8080/api/v1/employees', employee).success(function (data) {
			return data;
		}).error(function(err) { 
			return err; 
		});
	}
	
	empFactory.delEmp=function(emp_num) { 
		return $http.delete('http://localhost:8080/api/v1/employees/'+ emp_num).success(function (data) {
			return data
	    }).error(function(err) { 
	        return err; 
	    });
		}
	
	empFactory.findEmp=function(emp_num) { 
		return $http.get('http://localhost:8080/api/v1/employees/'+ emp_num).success(function (data) {
			return data
	    }).error(function(err) { 
	        return err; 
	    });
		}
	
	empFactory.redirect=function(){
		$window.location.href='/'
	}
	
	return empFactory;
}]);
