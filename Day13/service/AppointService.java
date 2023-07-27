package com.iamneo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Appoint;
import com.iamneo.security.repository.AppointRepo;

@Service

	public class AppointService {
	
	@Autowired
	private AppointRepo Repo;

	public String addAppoint(Appoint ee) {
		Repo.save(ee);
		return "Data added";
	}
}
