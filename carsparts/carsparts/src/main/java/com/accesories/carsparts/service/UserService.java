package com.accesories.carsparts.service;

import com.accesories.carsparts.model.User;
import com.accesories.carsparts.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null; // Invalid credentials
    }

    public User signUpUser(User user) {
        return userRepository.save(user);
    }
}
