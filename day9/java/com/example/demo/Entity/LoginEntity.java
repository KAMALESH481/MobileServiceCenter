package com.example.demo.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="login")
public class LoginEntity {
	@Id
	private int Id;
	private String email;
	private String pass;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public LoginEntity(int id, String email, String pass) {
		super();
		Id = id;
		this.email = email;
		this.pass = pass;
	}
	public LoginEntity()
	{
		
	}
	}


