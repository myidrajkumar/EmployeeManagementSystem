/**
 * 
 */
package com.rajkumar.springboot.service.impl;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.rajkumar.springboot.entity.EmployeeEntity;
import com.rajkumar.springboot.model.Employee;
import com.rajkumar.springboot.repository.EmployeeRepository;
import com.rajkumar.springboot.service.EmployeeService;

/**
 * @author Rajkumar. S
 *
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {
    
    private final EmployeeRepository empRepository;
    
    public EmployeeServiceImpl(EmployeeRepository empRepository) {
        this.empRepository = empRepository;
    }
    
    @Override
    public Employee createEmployee(Employee employee) {
        
        EmployeeEntity empEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, empEntity);
        
        empEntity = empRepository.save(empEntity);
        BeanUtils.copyProperties(empEntity, employee);
        
        return employee;
    }
    
    @Override
    public List<Employee> getAllEmployees() {
        return empRepository.findAll().stream()
                .map(emp -> new Employee(emp.getId(), emp.getFirstName(), emp.getFirstName(), emp.getEmail())).toList();
    }
    
    @Override
    public boolean deleteEmployee(String id) {
        boolean isExist = empRepository.findById(id).isPresent();
        if (isExist) {
            empRepository.deleteById(id);
        }
        return isExist;
    }
    
    @Override
    public Employee getEmployeeById(String id) {
        EmployeeEntity empEntity = empRepository.findById(id).orElse(new EmployeeEntity());
        return new Employee(empEntity.getId(), empEntity.getFirstName(), empEntity.getLastName(), empEntity.getEmail());
    }
    
    @Override
    public Employee updateEmployee(String id, Employee emp) {
        EmployeeEntity empEntity = empRepository.findById(id).orElse(new EmployeeEntity());
        empEntity.setFirstName(emp.getFirstName());
        empEntity.setLastName(emp.getLastName());
        empEntity.setEmail(emp.getEmail());
        empEntity = empRepository.save(empEntity);
        BeanUtils.copyProperties(empEntity, emp);
        return emp;
    }
    
}
