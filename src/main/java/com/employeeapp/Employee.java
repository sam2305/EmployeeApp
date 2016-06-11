package com.employeeapp;

import com.mongodb.BasicDBObject;

/** Employee class that holds all employee information
 * @author Sam Mathew
 */
public class Employee {

	/** Employee number */
	private String emp_num;
	/** Employee first name */
	private String first_name;
	/** Employee last name */
	private String last_name;
	/** Employee middle name */
	private String middle_name;
	/** Employee age */
	private int age;
	/** Employee designation */
	private String designation;
	/** Employee salary */
	private int salary;
	
	
	/** Constructor for Employee
	 * @param dbObject Equivalent DB object
	 */
	public Employee(BasicDBObject dbObject) {
		this.emp_num = dbObject.getString("emp_num");
	    this.first_name = dbObject.getString("first_name");
	    this.last_name = dbObject.getString("last_name");
	    this.middle_name = dbObject.getString("middle_name");
	    this.age = Integer.parseInt(dbObject.getString("age"));
	    this.designation = dbObject.getString("designation");
	    this.salary = Integer.parseInt(dbObject.getString("salary")); 
	}
	
	
	/** Returns Employee Number
	 * @return emp_num Employee Number
	 */
	public String getEmp_Num() {
	     return emp_num;
	}
	
	/** Returns Employee's First Name
	 * @return first_name Employee's First Name
	 */
	public String getFirst_Name() {
	     return first_name;
	}
	
	/** Returns Employee's Last Name
	 * @return last_name Employee's Last Name
	 */
	public String getLast_Name() {
	     return last_name;
	}
	
	/** Returns Employee's Middle Name
	 * @return middle_name Employee's Middle Name
	 */
	public String getMiddle_Name() {
	     return middle_name;
	}
	
	/** Returns Employee's Designation
	 * @return designation Employee's Designation
	 */
	public String getDesg() {
	     return designation;
	}
	
	/** Returns Employee's Age
	 * @return age Employee's Age
	 */
	public int getAge() {
	     return age;
	}
	
	/** Returns Employee's Salary
	 * @return salary Employee's Salary
	 */
	public int getSalary() {
	     return salary;
	}
}
