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
	
	empFactory.validate=function(employee){
		if(employee.age > 0){
			if ((employee.designation == "Snr. Manager" && employee.salary >= 100000 && employee.salary <= 130000)||
					(employee.designation == "Manager" && employee.salary >= 90000 && employee.salary <= 99999)||
					(employee.designation == "Asst. Manager" && employee.salary >= 80000 && employee.salary <= 89999)||
					(employee.designation == "Lead" && employee.salary >= 60000 && employee.salary <= 79999)||
					(employee.designation == "Snr. Consultant" && employee.salary >= 50000 && employee.salary <= 59000)||
					(employee.designation == "Consultant" && employee.salary >= 40000 && employee.salary <= 49000))
				{ 
					return "true"
				}
			else {
				if (employee.designation == "Snr. Manager")
					return "Salary should be between 100000 and 130000"
				else if (employee.designation == "Manager")
					return "Salary should be between 90000 and 99999"
				else if (employee.designation == "Asst. Manager")
					return "Salary should be between 80000 and 89999"
				else if (employee.designation == "Lead")
					return "Salary should be between 60000 and 79999"
				else if (employee.designation == "Snr. Consultant")
					return "Salary should be between 50000 and 59000"
				else if (employee.designation == "Consultant")
					return "Salary should be between 40000 and 49000"
			}
			}
			else
				return "Age is invalid"
		}

	return empFactory;
}]);
