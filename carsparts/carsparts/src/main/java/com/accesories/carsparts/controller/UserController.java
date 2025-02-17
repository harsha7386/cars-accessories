package com.accesories.carsparts.controller;

import com.accesories.carsparts.model.User;
import com.accesories.carsparts.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")  // Allows CORS for all methods in this controller

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public User loginUser(@RequestBody User loginData) {
        return userService.loginUser(loginData.getEmail(), loginData.getPassword());
        
    }

    @PostMapping("/signup")
    public User signUpUser(@RequestBody User user) {
        return userService.signUpUser(user);
    }
}
