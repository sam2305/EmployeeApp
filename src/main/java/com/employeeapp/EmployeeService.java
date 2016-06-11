package com.employeeapp;

import com.google.gson.Gson;
import com.mongodb.*;
 
import java.util.ArrayList;
import java.util.List;

/** Provides functionality for Employee
 * @author Sam Mathew
 */
public class EmployeeService {

	/** DB instance */
	private final DB db;
	/** DB collection */
	private final DBCollection collection;
	
	/** Constructor for EmployeeService
	 * @param db DB instance
	 */
	public EmployeeService(DB db) {
		this.db = db;
		this.collection = db.getCollection("employees");
	}
	
	/** Adds new employee and stores it
	 * @param body serialized employee object
	 */
	public void addEmployee(String body) {
		Employee emp = new Gson().fromJson(body, Employee.class);
		collection.insert(new BasicDBObject("emp_num", emp.getEmp_Num()).append("first_name", emp.getFirst_Name())
        									.append("last_name", emp.getLast_Name()).append("middle_name", emp.getMiddle_Name())
        									.append("age", emp.getAge()).append("designation", emp.getDesg())
        									.append("salary", emp.getSalary()));
    }
	
	/** Updates existing employee details
	 * @param body serialized employee object
	 * @return new Employee(object) Employee Object
	 */
	public void update(String body) {
        Employee emp = new Gson().fromJson(body, Employee.class);
        
        BasicDBObject object = (BasicDBObject) collection.findOne(new BasicDBObject("emp_num", emp.getEmp_Num()));
        object.put("first_name",emp.getFirst_Name());
        object.put("last_name",emp.getLast_Name());
        object.put("middle_name",emp.getMiddle_Name());
        object.put("age",emp.getAge());
        object.put("designation",emp.getDesg());
        object.put("salary",emp.getSalary());        
        
        collection.update(new BasicDBObject("emp_num", emp.getEmp_Num()), object);
    }
	
	public String find(String emp_num){
		if(collection.findOne(new BasicDBObject("emp_num", emp_num)) != null)
			return "Success";
		else
			return "Fail";
	}
	
	/** Fetches all the employee details
	 * @return emps List of all employee details
	 */
	public List<Employee> getAllEmployees() {
        List<Employee> emps = new ArrayList<>();
        DBCursor dbObjects = collection.find();
        while (dbObjects.hasNext()) {
            DBObject dbObject = dbObjects.next();
            emps.add(new Employee((BasicDBObject) dbObject));
        }
        return emps;
    }
	
	/** Delete employee details of employee based on emp_num
	 * @param emp_num Employee number
	 */
	public void deleteEmployee(String emp_num) {
		collection.remove(new BasicDBObject("emp_num", emp_num));
	}
}
