package com.accesories.carsparts.repository;

import com.accesories.carsparts.model.Dealer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DealerRepository extends JpaRepository<Dealer, Integer> {
    Dealer findByEmail(String email);
}
