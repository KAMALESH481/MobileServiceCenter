package com.iamneo.security.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Appoint;

public interface AppointRepo extends JpaRepository<Appoint,String>{
     Appoint findByEmail(String email);
}
