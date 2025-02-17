package com.accesories.carsparts.controller;

import com.accesories.carsparts.model.Dealer;
import com.accesories.carsparts.service.DealerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dealers") 
@CrossOrigin(origins = "http://localhost:3000")  
public class DealerController {

    @Autowired
    private DealerService dealerService;

    // Login endpoint for dealer
    @PostMapping("/signup")
    public Dealer signUpDealer(@RequestBody Dealer dealer) {
        System.out.println("Received dealer signup data: " + dealer);
        return dealerService.signUpDealer(dealer);
    }

    @PostMapping("/login")
    public Dealer loginDealer(@RequestBody Dealer loginData) {
        return dealerService.loginDealer(loginData.getEmail(), loginData.getPassword());
    }
    
}
