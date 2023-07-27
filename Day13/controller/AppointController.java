package com.iamneo.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Appoint;
import com.iamneo.security.service.AppointService;

@RestController

@CrossOrigin(origins="*",allowedHeaders="*")
public class AppointController {

    @Autowired
    private AppointService Service;
    @PostMapping("/addAppoint")
   	public String Loginadd(@RequestBody Appoint ee) {
   		return Service.addAppoint(ee);
   		
   	}
}