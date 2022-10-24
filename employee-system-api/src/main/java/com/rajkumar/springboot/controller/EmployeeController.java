/**
 * 
 */
package com.rajkumar.springboot.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rajkumar.springboot.model.Employee;
import com.rajkumar.springboot.service.EmployeeService;

/**
 * @author Rajkumar. S
 *
 */
@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    
    private final EmployeeService empService;
    
    public EmployeeController(EmployeeService empService) {
        this.empService = empService;
    }
    
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return empService.createEmployee(employee);
    }
    
    @GetMapping
    public List<Employee> getAllEmployees() {
        return empService.getAllEmployees();
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable String id) {
        boolean isDeleted = empService.deleteEmployee(id);
        return ResponseEntity.ok(Map.of("deleted", isDeleted));
    }
    
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable String id) {
        return ResponseEntity.ok(empService.getEmployeeById(id));
    }
    
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable String id, @RequestBody Employee emp) {
        return ResponseEntity.ok(empService.updateEmployee(id, emp));
    }
}
