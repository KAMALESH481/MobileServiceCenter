package com.feedback.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="appp")
public class Appoint {
	private String customername;
	@Id
	private String email;
	private String mobilemodel;
	private String issue;
	private String appointmentdate;
	public String getCustomername() {
		return customername;
	}
	public void setCustomername(String customername) {
		this.customername = customername;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobilemodel() {
		return mobilemodel;
	}
	public void setMobilemodel(String mobilemodel) {
		this.mobilemodel = mobilemodel;
	}
	public String getIssue() {
		return issue;
	}
	public void setIssue(String issue) {
		this.issue = issue;
	}
	public String getAppointmentdate() {
		return appointmentdate;
	}
	public void setAppointmentdate(String appointmentdate) {
		this.appointmentdate = appointmentdate;
	}
	public Appoint(String customername, String email, String mobilemodel, String issue, String appointmentdate) {
		super();
		this.customername = customername;
		this.email = email;
		this.mobilemodel = mobilemodel;
		this.issue = issue;
		this.appointmentdate = appointmentdate;
	}
	
	public Appoint()
	{
		
	}

}
