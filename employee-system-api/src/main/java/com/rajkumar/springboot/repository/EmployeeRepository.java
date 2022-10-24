/**
 * 
 */
package com.rajkumar.springboot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rajkumar.springboot.entity.EmployeeEntity;

/**
 * @author Rajkumar. S
 *
 */
public interface EmployeeRepository extends MongoRepository<EmployeeEntity, String> {
    
}
