var app=angular.module('EmployeeApp',['ngRoute']);

app.config(function ($routeProvider) { 
	  $routeProvider 
	    .when('/', { 
	    	reloadOnSearch:false
	    })
	    .when('/add', { 
	      controller: 'AddController', 
	      templateUrl: 'views/AddView.html',
	      reloadOnSearch:false
	    })
	    .when('/edit', { 
	      controller: 'EditController', 
	      templateUrl: 'views/EditView.html',
	      reloadOnSearch:false
	    })
	    .when('/delete', { 
	      controller: 'DeleteController', 
	      templateUrl: 'views/DeleteView.html',
	      reloadOnSearch:false
	    })
	    .otherwise({ 
	      redirectTo: '/' 
	    }); 
	});

