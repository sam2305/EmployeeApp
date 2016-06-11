package com.employeeapp;

import static spark.Spark.get;
import static spark.Spark.post;
import static spark.Spark.put;
import static spark.Spark.delete;


/** Exposes REST endpoints for Employee services
 * @author Sam Mathew
 */
public class EmployeeResource {
	/** API context */
	private static final String API_CONTEXT = "/api/v1";
	/** UserService instance */
	private final EmployeeService empService;
	
	/** Constructor for EmployeeResource receives EmployeeService and exposes endpoints
	 * @param empService
	 */
	public EmployeeResource(EmployeeService empService) {
		this.empService = empService;
		setupEndpoints();
	}
	
	/** Exposes REST endpoints, calls necessary service, serializes to Json
	 */
	private void setupEndpoints() {
		
		post(API_CONTEXT + "/employees", "application/json", (request, response) -> {
			empService.addEmployee(request.body());
			return new Success("Success");
		}, new JsonTransformer());
		
		get(API_CONTEXT + "/employees", "application/json", (request, response)
				 
                -> empService.getAllEmployees(), new JsonTransformer());
		
		put(API_CONTEXT + "/employees", "application/json", (request, response) -> {
			empService.update(request.body());
			return new Success("Success");
		}, new JsonTransformer());
		
		get(API_CONTEXT + "/employees/:emp_num", "application/json", (request, response) -> {
			return new Success(empService.find(request.params(":emp_num")));
				}, new JsonTransformer());
		
		delete(API_CONTEXT + "/employees/:emp_num", "application/json",  (request, response)-> {
			empService.deleteEmployee(request.params(":emp_num"));
            return new Success("Success");
		}, new JsonTransformer());

	}
}

/** 
 * @author Sam Mathew
 */
class Success{
	private String response;
	public Success(String response){
		this.response=response;
	}
}