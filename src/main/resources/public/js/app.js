var app=angular.module('EmployeeApp',['ngRoute']);

app.config(function ($routeProvider) { 
	  $routeProvider 
	    .when('/', { 
	    	reloadOnSearch:false
	    })
	    .when('/add', { 
	      controller: 'FormController', 
	      templateUrl: 'views/AddView.html',
	      reloadOnSearch:false
	    })
	    .when('/edit', { 
	      controller: 'FormController', 
	      templateUrl: 'views/EditView.html',
	      reloadOnSearch:false
	    })
	    .when('/delete', { 
	      controller: 'FormController', 
	      templateUrl: 'views/DeleteView.html',
	      reloadOnSearch:false
	    })
	    .otherwise({ 
	      redirectTo: '/' 
	    }); 
	});

