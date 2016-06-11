package com.employeeapp;

import com.mongodb.*;
 import static spark.Spark.*;

/** Main class starts Jetty Server and starts resources
 * @author Sam Mathew
 */
public class Bootstrap {
 
	/** ip address of web server */
	private static final String IP_ADDRESS = "localhost";

	/** port of web server */
	private static final int PORT = 8080;

	/** Main method starts web server and resources
	 * @param args
	 * @throws Exception
	 */
    public static void main(String[] args) throws Exception{
		setIpAddress(IP_ADDRESS);
		setPort(PORT);
		staticFileLocation("/public");
        new EmployeeResource(new EmployeeService(mongo()));

        /*get("/", new Route() {
            @Override
            public Object handle(Request request, Response response) {
                return "Hello World";
            }
        });
        */
    }
    
    /** Starts MongoDB connection
	 * @return MongoDB client instance
	 * @throws Exception
	 */
    private static DB mongo() throws Exception {
		MongoClient mongoClient = new MongoClient("localhost");

		return mongoClient.getDB("employeeapp");
	}
}