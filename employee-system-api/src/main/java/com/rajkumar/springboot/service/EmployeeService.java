/**
 * 
 */
package com.rajkumar.springboot.service;

import java.util.List;

import com.rajkumar.springboot.model.Employee;

/**
 * @author Rajkumar. S
 *
 */
public interface EmployeeService {
    
    Employee createEmployee(Employee employee);
    
    List<Employee> getAllEmployees();
    
    boolean deleteEmployee(String id);
    
    Employee getEmployeeById(String id);
    
    Employee updateEmployee(String id, Employee emp);
    
}
