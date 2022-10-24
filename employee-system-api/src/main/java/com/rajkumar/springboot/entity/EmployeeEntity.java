/**
 * 
 */
package com.rajkumar.springboot.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * @author Rajkumar. S
 *
 */
@Document("employees")
@Data
public class EmployeeEntity {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
}
