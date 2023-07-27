package com.feedback.service;

import org.springframework.stereotype.Service;

import com.feedback.models.Appoint;
import com.feedback.models.FeedBack;
import com.feedback.repositories.Aprepo;
import com.feedback.repositories.FeedBackRepo;

import org.springframework.beans.factory.annotation.Autowired;
@Service
public class FeedBackService {
  @Autowired
  private FeedBackRepo repo;
  @Autowired 
  private Aprepo Repo;
  
  public FeedBack addFeedback(FeedBack feedback) {
		return repo.save(feedback);
	}
  public String AddDetails(Appoint ee) {
		Repo.save(ee);
		return "Data added";
	}
  
}
