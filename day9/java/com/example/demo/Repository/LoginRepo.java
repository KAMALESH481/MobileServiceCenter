package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.LoginEntity;





@Repository
public interface LoginRepo extends JpaRepository<LoginEntity, Integer>{

}
