package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="appointt")
public class Appoint {

	private String customername;
	@Id
	private String email;
	private String mobilemodel;
	private String issue;
	private String appointmentdate;
	
	
	

	public Appoint()
	{
		
	}

}
