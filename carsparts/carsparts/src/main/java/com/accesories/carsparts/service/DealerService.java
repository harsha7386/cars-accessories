package com.accesories.carsparts.service;

import com.accesories.carsparts.model.Dealer;
import com.accesories.carsparts.repository.DealerRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DealerService {
    @Autowired
    private DealerRepository dealerRepository;

    public Dealer loginDealer(String email, String password) {
        Dealer dealer = dealerRepository.findByEmail(email);
        if (dealer != null && dealer.getPassword().equals(password)) {
            return dealer;
        }
        return null; // Invalid credentials
    }

    public Dealer signUpDealer(Dealer dealer) {
        return dealerRepository.save(dealer);
    }
    
    
}
