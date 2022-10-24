/**
 * 
 */
package com.rajkumar.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Rajkumar. S
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
}
